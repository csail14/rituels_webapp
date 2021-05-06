import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import logo from "../assets/logo.png";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <nav>
          <div className="liste1">
            <Link to="/home">
              <img className="logo" alt="logo" src={logo} />
            </Link>
            <Link to="/home">Accueil</Link>
            <Link to="/presentation">Présentation</Link>
            <Link to="/pack">Pack</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/account">Mon compte</Link>
            <Link to="/admin">Admin</Link>

            {this.props.user.isLogged && (
              <Link to="/Logout">Se deconnecter</Link>
            )}
          </div>
        </nav>
      </header>
    );
  }
}

const mapDispatchToProps = {};

const mapStateToProps = (store) => {
  return {
    user: store.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
