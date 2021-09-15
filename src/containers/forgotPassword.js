import React from "react";
import { connect } from "react-redux";
import { changePassword } from "../api/userApi";

class Forgot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newPassword: "",
      secondNewpassword: "",
      text: "",
    };
  }

  onchangeNewPassword = (value) => {
    this.setState({ newPassword: value });
  };

  onchangeSecondNewPassword = (value) => {
    this.setState({ secondNewpassword: value });
  };
  onSubmitForm = (e) => {
    e.preventDefault();
    let key_id = this.props.match.params.key_id;
    if (
      this.state.newPassword !== "" &&
      this.state.newPassword === this.state.secondNewpassword
    ) {
      let data = {
        password1: this.state.newPassword,
        password2: this.state.secondNewpassword,
      };
      changePassword(data, key_id).then((res) => {
        if (res.status == 200) {
          this.setState({ text: "Mot de passe modifié avec succes" });
        }
      });
    } else {
      this.setState({ text: "Vos mots de passe ne sont pas identiques" });
    }
  };
  render() {
    return (
      <div className="main">
        <p className="title">Modification de votre mot de passe</p>

        <form
          className="b-form"
          onSubmit={(e) => {
            this.onSubmitForm(e);
          }}
        >
          <p className="text">Votre nouveau mot de passe : </p>
          <input
            type="text"
            onChange={(e) => {
              this.onchangeNewPassword(e.currentTarget.value);
            }}
          />
          <p className="text">Répetez votre nouveau mot de passe : </p>
          <input
            type="password"
            onChange={(e) => {
              this.onchangeSecondNewPassword(e.currentTarget.value);
            }}
          />
          <input type="submit" value="Enregistrer" name="Enregistrer" />
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

export default connect(mapStateToProps, mapDispatchToProps)(Forgot);
