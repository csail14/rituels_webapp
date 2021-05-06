import React from "react";
import { connect } from "react-redux";
import { loadThemeInfo } from "../actions/theme/themeActions";
import axios from "axios";
import { config } from "../config";

class Admin extends React.Component {
  paiement = (priceId, product) => {
    let data = {
      email: this.props.user.infos.email,
      priceId: priceId,
      product: product,
    };
    console.log("data", data.product);
    const apiCall = async () => {
      try {
        axios
          .post(config.api_url + "/api/v1/paiment/checkout", data)
          .then((res) => {
            window.location.href =
              "https://paiment-4brn.herokuapp.com/" + res.data.sessionId;
          });
      } catch (error) {
        console.log(error);
      }
    };
    apiCall();
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
                <p className="text">Vous avez deja choisi un pack. </p>
                <button
                  className="buy-button"
                  onClick={() => this.checkAcount()}
                >
                  Voir les infos de mon pack.
                </button>
              </>
            )}

            {this.props.user.infos.isPaid === 1 && (
              <>
                <p className="text">Vous n'avez pas encore choisi votre pack</p>
                <div className="packDiv">
                  <div className="pack">
                    <p className="title">Pack Kids</p>
                    <p className="price">3 € / mois</p>
                    <button
                      className="buy-button"
                      onClick={() =>
                        this.paiement("price_1IZDjWJwXSakrFau37sJondx", "kids")
                      }
                    >
                      Choisir ce pack
                    </button>
                  </div>
                  <div className="pack">
                    <p className="title">Pack Family</p>
                    <p className="price">5€ / mois</p>
                    <button
                      className="buy-button"
                      onClick={() =>
                        this.paiement(
                          "price_1IZDkSJwXSakrFauYSsgNXAi",
                          "family"
                        )
                      }
                    >
                      Choisir ce pack
                    </button>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = {
  loadThemeInfo,
};

const mapStateToProps = (store) => {
  return {
    user: store.user,
    theme: store.theme,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
