import React from "react";
import { connect } from "react-redux";
import { forgotPassword } from "../api/userApi";

class AskNewPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",

      text: "",
    };
  }

  onchangeEmail = (value) => {
    this.setState({ email: value });
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    if (this.state.email !== "") {
      let data = {
        email: this.state.email,
      };
      forgotPassword(data).then((res) => {
        this.setState({ text: "" });
        console.log(res);
        if (res.status === 200) {
          window.alert("Un email vous a été envoyé");
        } else {
          this.setState({
            text: "Un problème est survenu, veuillez reessayer plus tard.",
          });
        }
      });
    } else {
      this.setState({ text: "Votre mail est vide" });
    }
  };
  render() {
    return (
      <div className="main">
        <p className="title">Veuillez entrer votre adresse email</p>

        <form
          className="b-form"
          onSubmit={(e) => {
            this.onSubmitForm(e);
          }}
        >
          <input
            type="email"
            placeholder="email"
            onChange={(e) => {
              this.onchangeEmail(e.currentTarget.value);
            }}
          />
          <input type="submit" value="Envoyer" name="Envoyer" />
          {this.state.text !== "" && <p className="text">{this.state.text} </p>}
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

export default connect(mapStateToProps, mapDispatchToProps)(AskNewPassword);
