import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import logo from "../assets/logo.png";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";
import { isMobile } from "react-device-detect";
import styled from "styled-components";
import menu from "../assets/menu-burger.png";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={100}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "center",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const MobileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: -webkit-fill-available;
`;

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {},
    },
  },
}))(MenuItem);

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      showMenu: false,
    };
  }

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  render() {
    return (
      <header className="header">
        {isMobile ? (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <MobileHeader>
              <Link className="web" style={{ padding: "0" }} to="/home">
                <img className="logo-mobile" alt="logo" src={logo} />
              </Link>

              <img
                onClick={() => {
                  this.setState({ showMenu: !this.state.showMenu });
                }}
                alt="menu"
                style={{
                  height: "150px",
                  marginTop: "18px",
                  marginReft: "30px",
                  paddingRight: "18px",
                }}
                src={menu}
              ></img>
            </MobileHeader>
            {this.state.showMenu && (
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Link
                  onClick={() => {
                    this.setState({ showMenu: !this.state.showMenu });
                  }}
                  className="mobile-menu-link"
                  to="/home"
                >
                  Accueil
                </Link>
                <Link
                  onClick={() => {
                    this.setState({ showMenu: !this.state.showMenu });
                  }}
                  className="mobile-menu-link"
                  to="/presentation"
                >
                  Présentation
                </Link>
                <Link
                  onClick={() => {
                    this.setState({ showMenu: !this.state.showMenu });
                  }}
                  className="mobile-menu-link"
                  to="/pack"
                >
                  Pack
                </Link>
                <Link
                  onClick={() => {
                    this.setState({ showMenu: !this.state.showMenu });
                  }}
                  className="mobile-menu-link"
                  to="/warroom"
                >
                  Quartier Général
                </Link>
                <Link
                  onClick={() => {
                    this.setState({ showMenu: !this.state.showMenu });
                  }}
                  className="mobile-menu-link"
                  to="/account"
                >
                  Mon Compte
                </Link>
                <Link
                  onClick={() => {
                    this.setState({ showMenu: !this.state.showMenu });
                  }}
                  className="mobile-menu-link"
                  to="/contact"
                >
                  Contact
                </Link>
                {this.props.user.isLogged ? (
                  <Link
                    onClick={() => {
                      this.setState({ showMenu: !this.state.showMenu });
                    }}
                    className="mobile-menu-link"
                    to="/Logout"
                  >
                    Se déconnecter
                  </Link>
                ) : (
                  <Link
                    onClick={() => {
                      this.setState({ showMenu: !this.state.showMenu });
                    }}
                    className="mobile-menu-link"
                    to="/register"
                  >
                    S'inscrire
                  </Link>
                )}
              </div>
            )}
          </div>
        ) : (
          <nav>
            <div className="liste1">
              <>
                <Link className="web" style={{ padding: "0" }} to="/home">
                  <img className="logo" alt="logo" src={logo} />
                </Link>
                <Link className="web" to="/home">
                  Accueil
                </Link>
                <Link className="web" to="/presentation">
                  Présentation
                </Link>
                <Link className="web" to="/pack">
                  Pack
                </Link>
                <Link className="web" to="/warroom">
                  Quartier Général
                </Link>
                <Link className="web" to="/account">
                  Mon Compte
                </Link>
                <Link className="web" to="/contact">
                  Contact
                </Link>
                {this.props.user.isLogged ? (
                  <Link className="web" to="/Logout">
                    Se déconnecter
                  </Link>
                ) : (
                  <Link className="web" to="/register">
                    S'inscrire
                  </Link>
                )}
              </>
            </div>
          </nav>
        )}
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
