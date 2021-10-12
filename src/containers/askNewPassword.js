import React from "react";
import { connect } from "react-redux";
import { forgotPassword } from "../api/userApi";
import { isMobile } from "react-device-detect";

class AskNewPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      isMobile: false,
      text: "",
    };
  }

  componentDidMount = () => {
    window.addEventListener("resize", this.handleResize);
  };
  handleResize = () => {
    if (window.innerWidth < 720) {
      this.setState({ isMobile: true });
    } else {
      this.setState({ isMobile: false });
    }
  };
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
        <p
          style={{
            fontSize: this.state.isMobile ? "50px" : "",
            marginTop: this.state.isMobile ? "150px" : "",
          }}
          className="title"
        >
          Veuillez entrer votre adresse email
        </p>

        <form
          className="b-form"
          onSubmit={(e) => {
            this.onSubmitForm(e);
          }}
        >
          <input
            type="email"
            placeholder="email"
            style={{
              height: this.state.isMobile ? "60px" : "",
              fontSize: this.state.isMobile ? "35px" : "",
            }}
            onChange={(e) => {
              this.onchangeEmail(e.currentTarget.value);
            }}
          />
          <input
            style={{
              height: this.state.isMobile ? "60px" : "",
              fontSize: this.state.isMobile ? "35px" : "",
            }}
            type="submit"
            value="Envoyer"
            name="Envoyer"
          />
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
