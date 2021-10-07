import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { config } from "../../config";
import { Link } from "react-router-dom";
import { setStripeProduct } from "../../api/stripeApi";
import styled from "styled-components";
import { isMobile } from "react-device-detect";

const Title = styled.div`
  color: white;
  font-size: ${isMobile ? "70px" : "30px"};
  font-weight: bold;
  margin-top: ${isMobile ? "100px" : "50px"};
  margin-bottom: ${isMobile ? "100px" : "50px"};
`;

const Text = styled.div`
  color: white;
  font-size: ${isMobile ? "40px" : "20px"};
  padding: 10px;
`;
const SubTitle = styled.div`
  color: white;
  font-size: ${isMobile ? "40px" : "20px"};
  padding: 10px;
  margin-top: 100px;
  margin-bottom: ${isMobile ? "40px" : ""};
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PackDivContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const PackContainer = styled.div`
  margin: 10px;
  border: 2px solid white;
  height: ${isMobile ? "500px" : "300px"};
  width: ${isMobile ? "400px" : "260px"};
  border-radius: 10px;
  padding: 20px;
`;

const Button = styled.div`
  display: flex;
  margin: 10px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: -webkit-fill-available;
  color: black;
  border-radius: 12px;
  background-color: white;
  font-size: ${isMobile ? "40px" : ""};
  cursor: pointer;
  height: auto;
`;

const Price = styled.div`
  color: white;
  font-size: ${isMobile ? "40px" : "20px"};
`;

class Admin extends React.Component {
  paiement = (priceId, product) => {
    let data = {
      email: this.props.user.infos.email,
      priceId: priceId,
      product: product,
    };
    const apiCall = async () => {
      try {
        axios
          .post(config.api_url + "/api/v1/paiment/checkout", data)
          .then((res) => {
            window.open(
              "https://paiment-4brn.herokuapp.com/" + res.data.sessionId,
              "_blank"
            );
          });
      } catch (error) {
        console.log(error);
      }
    };
    apiCall();
  };

  setProduct = (priceId) => {
    let data = {
      priceId: priceId,
      stripe_id: this.props.user.infos.subscription_id,
      email: this.props.user.infos.email,
    };
    console.log(data);
    setStripeProduct(data).then((res) => {
      if (res.status == 200) {
        window.location.reload();
      }
    });
  };

  checkAcount = () => {
    let data = {
      customerId: this.props.user.infos.stripe_id,
    };
    const apiCall = async () => {
      try {
        axios.post(config.api_url + "/customer-portal", data).then((res) => {
          window.location.href = res.data.url;
        });
      } catch (error) {
        console.log(error);
      }
    };
    apiCall();
  };

  render() {
    return (
      <div className="Main">
        <Title>Bienvenue sur votre compte 4b Premium.</Title>
        {this.props.user.infos && (
          <>
            {this.props.user.infos.isPaid === 1 && (
              <>
                <Text>
                  Vous avez choisi le pack{" "}
                  {this.props.user.infos ? this.props.user.infos.product : null}{" "}
                </Text>
                <button
                  style={
                    isMobile
                      ? {
                          fontSize: "25px",
                          padding: "25px",
                          height: "auto",
                          width: "auto",
                          fontSize: "40px",
                        }
                      : null
                  }
                  className="buy-button"
                  onClick={() => this.checkAcount()}
                >
                  Voir les infos de mon paiement
                </button>
              </>
            )}

            <>
              {this.props.user.infos.isPaid === 0 ? (
                <SubTitle>Vous n'avez pas encore choisi votre pack</SubTitle>
              ) : (
                <SubTitle>Voulez-vous changer de pack ?</SubTitle>
              )}
              {this.props.user.infos.stripe_id === null ? (
                <PackDivContainer>
                  <PackContainer>
                    <Text>Pack Kids</Text>
                    <Price>3€ / mois</Price>
                    <ButtonContainer>
                      <Button
                        onClick={() => {
                          this.paiement(
                            "price_1IZDjWJwXSakrFau37sJondx",
                            "kids"
                          );
                        }}
                      >
                        Choisir ce pack
                      </Button>
                      <Button className="buy-button">
                        <Link to="/pack" style={{ textDecoration: "none" }}>
                          Plus d'info
                        </Link>
                      </Button>
                    </ButtonContainer>
                  </PackContainer>
                  <PackContainer>
                    <Text>Pack Family</Text>
                    <Price>5€ / mois</Price>
                    <p className="price">5€ / mois</p>
                    <ButtonContainer>
                      <Button
                        className="buy-button"
                        onClick={() => {
                          this.paiement(
                            "price_1IZDkSJwXSakrFauYSsgNXAi",
                            "family"
                          );
                        }}
                      >
                        Choisir ce pack
                      </Button>
                      <Button className="buy-button">
                        <Link to="/pack" style={{ textDecoration: "none" }}>
                          Plus d'info
                        </Link>
                      </Button>
                    </ButtonContainer>
                  </PackContainer>
                </PackDivContainer>
              ) : (
                <PackDivContainer>
                  {this.props.user.infos.product === "kids" ? (
                    <PackContainer>
                      <Text>Pack Family</Text>
                      <Price>5€ / mois</Price>
                      <ButtonContainer>
                        <Button
                          className="buy-button"
                          onClick={() => {
                            this.setProduct("price_1IZDkSJwXSakrFauYSsgNXAi");
                          }}
                        >
                          Changer pour ce pack
                        </Button>
                        <Button className="buy-button">
                          <Link to="/pack" style={{ textDecoration: "none" }}>
                            Plus d'info
                          </Link>
                        </Button>
                      </ButtonContainer>
                    </PackContainer>
                  ) : (
                    <PackContainer>
                      <Text>Pack Kids</Text>
                      <Price>3€ / mois</Price>
                      <ButtonContainer>
                        <Button
                          className="buy-button"
                          onClick={() => {
                            this.setProduct("price_1IZDjWJwXSakrFau37sJondx");
                          }}
                        >
                          Changer pour ce pack
                        </Button>
                        <Button className="buy-button">
                          <Link to="/pack" style={{ textDecoration: "none" }}>
                            Plus d'info
                          </Link>
                        </Button>
                      </ButtonContainer>
                    </PackContainer>
                  )}
                </PackDivContainer>
              )}
            </>
          </>
        )}{" "}
        <Link style={{ margin: "10px", color: "white" }} to="/admin">
          Admin
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = {};

const mapStateToProps = (store) => {
  return {
    user: store.user,
    theme: store.theme,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
