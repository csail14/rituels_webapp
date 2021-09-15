import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { config } from "../../config";
import { Link } from "react-router-dom";
import { setStripeProduct } from "../../api/stripeApi";

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
        <p className="title">Bienvenue sur votre compte 4b Premium.</p>
        {this.props.user.infos && (
          <>
            {this.props.user.infos.isPaid === 1 && (
              <>
                <p className="text">
                  Vous avez choisi le pack{" "}
                  {this.props.user.infos ? this.props.user.infos.product : null}{" "}
                </p>
                <button
                  className="buy-button"
                  onClick={() => this.checkAcount()}
                >
                  Voir les infos de mon paiement.
                </button>
              </>
            )}

            <>
              {this.props.user.infos.isPaid === 0 ? (
                <p className="text">Vous n'avez pas encore choisi votre pack</p>
              ) : (
                <p className="text">Voulez-vous changer de pack ?</p>
              )}
              {this.props.user.infos.stripe_id === null ? (
                <div className="packDiv">
                  <div className="pack">
                    <p className="title">Pack Kids</p>
                    <p className="price">3 € / mois</p>
                    <button
                      className="buy-button"
                      onClick={() => {
                        this.paiement("price_1IZDjWJwXSakrFau37sJondx", "kids");
                      }}
                    >
                      Choisir ce pack
                    </button>
                    <button className="buy-button">
                      <Link to="/pack" style={{ textDecoration: "none" }}>
                        Plus d'info
                      </Link>
                    </button>
                  </div>
                  <div className="pack">
                    <p className="title">Pack Family</p>
                    <p className="price">5€ / mois</p>
                    <button
                      className="buy-button"
                      onClick={() => {
                        this.paiement(
                          "price_1IZDkSJwXSakrFauYSsgNXAi",
                          "family"
                        );
                      }}
                    >
                      Choisir ce pack
                    </button>
                    <button className="buy-button">
                      <Link to="/pack" style={{ textDecoration: "none" }}>
                        Plus d'info
                      </Link>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="packDiv">
                  {this.props.user.infos.product === "kids" ? (
                    <div className="pack">
                      <p className="title">Pack Family</p>
                      <p className="price">5€ / mois</p>
                      <button
                        className="buy-button"
                        onClick={() => {
                          this.setProduct("price_1IZDkSJwXSakrFauYSsgNXAi");
                        }}
                      >
                        Changer pour ce pack
                      </button>
                      <button className="buy-button">
                        <Link to="/pack" style={{ textDecoration: "none" }}>
                          Plus d'info
                        </Link>
                      </button>
                    </div>
                  ) : (
                    <div className="pack">
                      <p className="title">Pack Kids</p>
                      <p className="price">3 € / mois</p>
                      <button
                        className="buy-button"
                        onClick={() => {
                          this.setProduct("price_1IZDjWJwXSakrFau37sJondx");
                        }}
                      >
                        Changer pour ce pack
                      </button>
                      <button className="buy-button">
                        <Link to="/pack" style={{ textDecoration: "none" }}>
                          Plus d'info
                        </Link>
                      </button>
                    </div>
                  )}
                </div>
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
