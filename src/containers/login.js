import React from "react";
import { Redirect } from "react-router-dom";
import { loginUser } from "../api/userApi";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Title = styled.p`
  color: white;
  font-size: 22px;
`;

const Text = styled.p`
  color: white;
  font-size: 18px;
`;

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      error: null,
    };
    this.email = "";
    this.password = "";
  }

  onChangeText(type, text) {
    this[type] = text;
  }

  onSubmitForm = (e) => {
    e.preventDefault();
    let data = {
      email: this.email,
      password: this.password,
    };
    loginUser(data).then((res) => {
      if (res.status === 200) {
        window.localStorage.setItem("4brntoken", res.token);
        this.setState({ redirect: true });
      } else if (res.status === 404) {
        this.setState({ error: res.msg });
      } else if (res.status === 401) {
        this.setState({ error: res.msg });
      } else {
        this.setState({ error: "Un problème est survenu !" });
      }
    });
  };

  render() {
    return (
      <div>
        {this.state.redirect && <Redirect to="/account" />}
        {this.state.error !== null && (
          <p style={{ color: "red" }}>{this.state.error}</p>
        )}
        <Title>Connectez-vous : </Title>
        <form
          className="b-form"
          onSubmit={(e) => {
            this.onSubmitForm(e);
          }}
        >
          <input
            type="text"
            placeholder="Votre mail"
            onChange={(e) => {
              this.onChangeText("email", e.currentTarget.value);
            }}
          />

          <input
            type="password"
            placeholder="Votre mot de passe"
            onChange={(e) => {
              this.onChangeText("password", e.currentTarget.value);
            }}
          />

          <input type="submit" value="Enregistrer" name="Enregistrer" />
        </form>

        <Text>
          Pas encore Membre ?{" "}
          <Link style={{ color: "white" }} to="/register">
            Inscrivez-vous
          </Link>{" "}
        </Text>

        <Text>
          <Link style={{ color: "white" }} to="/forgot">
            Mot de passe oublié
          </Link>{" "}
        </Text>
      </div>
    );
  }
}
