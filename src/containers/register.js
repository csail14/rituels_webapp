import React from "react";

import { loginUser, saveUser } from "../api/userApi";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { validateInputField } from "../helpers/form-validator";

const Title = styled.p`
  color: white;
  font-size: 22px;
`;

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      error: null,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
      lang: "fr",
      stripe_id: null,
      isPaid: false,
      isCGU: false,
    };
  }

  onSubmitForm = (e) => {
    e.preventDefault();
    this.setState({ error: "" });
    let data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      passwordConfirm: this.state.passwordConfirm,
      lang: "FR",
      stripe_id: null,
      isPaid: false,
    };
    let error = this.formValidator(data);
    if (error === "") {
      saveUser(data).then((res) => {
        if (res.status === 501) {
          this.setState({
            error:
              "Cet email est déjà utilisé, veuillez vous connecter ou en choisir un autre.",
          });
        } else if (res.status === 200) {
          this.clearform();
          this.setState({
            error:
              "Rendez vous dans votre boite mail pour valider votre compte.",
          });
        } else {
          this.setState({
            error:
              "Erreur lors de l'enregistrement de l'utilisateur, veuillez réessayer ultérieurement.",
          });
        }
      });
    }
  };

  clearform = () => {
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      passwordConfirm: "",
      password: "",
    });
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      isCGU: value,
    });
  };

  formValidator = (data) => {
    let error = false;

    for (let key in data) {
      error = validateInputField(key, "string", data[key]);
      if (error !== "") {
        this.setState({ error: error });

        return error;
      }
    }
    if (validateInputField("mail", "email", data.email) !== "") {
      this.setState({ error: validateInputField("mail", "email", data.email) });
      return validateInputField("email", "email", data.email);
    }
    if (data.password !== data.passwordConfirm) {
      this.setState({
        error: "Les deux mots de passe ne sont pas identiques.",
      });
      return "Les deux mots de pass ne sont pas identiques.";
    }
    return "";
  };

  render() {
    return (
      <div>
        {this.state.error !== null && (
          <p style={{ color: "red" }}>{this.state.error}</p>
        )}
        <Title>Créer un compte : </Title>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          className="b-form"
          onSubmit={(e) => {
            this.onSubmitForm(e);
          }}
        >
          <input
            type="text"
            placeholder="Votre prénom"
            onChange={(e) => {
              this.setState({ firstName: e.currentTarget.value });
            }}
          />
          <input
            type="text"
            placeholder="Votre nom"
            onChange={(e) => {
              this.setState({ lastName: e.currentTarget.value });
            }}
          />
          <input
            type="text"
            placeholder="Votre mail"
            onChange={(e) => {
              this.setState({ email: e.currentTarget.value });
            }}
          />

          <input
            type="password"
            placeholder="Votre mot de passe"
            onChange={(e) => {
              this.setState({ password: e.currentTarget.value });
            }}
          />
          <input
            type="password"
            placeholder="Confirmez votre mot de passe"
            onChange={(e) => {
              this.setState({ passwordConfirm: e.currentTarget.value });
            }}
          />
          <div style={{ display: "flex" }}>
            <Link
              to={"/condition"}
              style={{ color: "white", marginTop: "15px" }}
            >
              J'accepte les Conditions générales d'utilisation
            </Link>
            <input
              style={{ width: "10%" }}
              name="isGoing"
              type="checkbox"
              checked={this.state.isCGU}
              onChange={this.handleInputChange}
            />
          </div>

          <input type="submit" value="Enregistrer" name="Enregistrer" />
        </form>
      </div>
    );
  }
}
