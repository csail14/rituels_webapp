import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { sendContactMessage } from "../api/userApi";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      message: null,
      mail: null,
      errorMessage: null,
    };
  }

  onSubmitForm = () => {
    let data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      message: this.state.message,
    };

    if (this.state.message && this.state.email) {
      sendContactMessage(data).then((res) => {
        if (res.status == 200) {
          this.setState({ errorMessage: "Votre message a bien été envoyé." });
        } else {
          this.setState({
            errorMessage:
              "Erreur lors de l'envoi du message, veuillez reessayer.",
          });
        }
      });
    } else {
      this.setState({
        errorMessage: "Veuillez remplir votre mail et votre message.",
      });
    }
  };

  render() {
    return (
      <div className="main">
        {this.state.errorMessage && (
          <p style={{ color: "red", fontSize: 20 }}>
            {this.state.errorMessage}
          </p>
        )}
        <form
          className="b-form"
          onSubmit={(e) => {
            e.preventDefault();
            this.onSubmitForm(e);
          }}
        >
          <input
            type="text"
            value={this.firstName}
            placeholder="Votre prénom"
            onChange={(e) => {
              this.setState({ firstName: e.currentTarget.value });
            }}
          />
          <input
            type="text"
            value={this.lastName}
            placeholder="Votre nom"
            onChange={(e) => {
              this.setState({ lastName: e.currentTarget.value });
            }}
          />

          <input
            type="text"
            placeholder="Votre mail"
            value={this.email}
            onChange={(e) => {
              this.setState({ email: e.currentTarget.value });
            }}
          />

          <textarea
            type="text"
            placeholder="Votre message"
            value={this.message}
            onChange={(e) => {
              this.setState({ message: e.currentTarget.value });
            }}
          />

          <input type="submit" value="Envoyer" name="Enregistrer" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {};

const mapStateToProps = (store) => {
  return {
    user: store.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
