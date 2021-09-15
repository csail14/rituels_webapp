/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Redirect } from "react-router-dom";
import { config } from "../config";
import axios from "axios";
import { connect } from "react-redux";
import { loadUserInfo } from "../actions/user/userActions";
import { loadThemeInfo } from "../actions/theme/themeActions";
import { getAllTheme } from "../api/themeApi";

export default function (ChildComponent, withAuth = false, isAdmin = false) {
  class RequireAuth extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        redirect: false,
        redirectNoAdmin: false,
      };
    }

    componentDidMount = async () => {
      if (
        this.props.theme &&
        this.props.theme.allTheme &&
        this.props.theme.allTheme.length == 0
      ) {
        getAllTheme().then((res) => {
          this.props.loadThemeInfo(res.result);
        });
      }
      const token = window.localStorage.getItem("4brntoken");
      if (token === null && withAuth) {
        this.setState({ redirect: true });
      } else {
        if (this.props.user.isLogged === false) {
          axios
            .get(config.api_url + "/api/v1/checkToken", {
              headers: { "x-access-token": token },
            })
            .then((response) => {
              if (response.data.status !== 200) {
                this.setState({ redirect: true });
              } else {
                axios
                  .get(
                    config.api_url +
                      "/api/v1/subuser/get/all/" +
                      response.data.user.id,
                    { headers: { "x-access-token": token } }
                  )
                  .then((responseSub) => {
                    this.props.loadUserInfo(
                      true,
                      response.data.user,
                      responseSub.data.result,
                      0
                    );
                    if (response.data.user.role !== "admin" && isAdmin) {
                      console.log("icic");
                      this.setState({ redirectNoAdmin: true });
                    }
                  });
              }
            });
        } else if (this.props.user.infos.role !== "admin" && isAdmin) {
          this.setState({ redirectNoAdmin: true });
        }
      }
    };

    render() {
      if (this.state.redirect && withAuth) {
        return <Redirect to="/login" />;
      }
      if (this.state.redirectNoAdmin && withAuth) {
        return <Redirect to="/non-authorize" />;
      }
      return <ChildComponent {...this.props} />;
    }
  }

  const mapDispatchToProps = {
    loadUserInfo,
    loadThemeInfo,
  };

  const mapStateToProps = (store) => {
    return {
      user: store.user,
      theme: store.theme,
    };
  };

  return connect(mapStateToProps, mapDispatchToProps)(RequireAuth);
}
