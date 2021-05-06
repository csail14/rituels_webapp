import React from "react";
import { connect } from "react-redux";
import { loadThemeInfo } from "../actions/theme/themeActions";
import { validateUser } from "../api/userApi";

class Forgot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validate: false,
    };
  }

  render() {
    return (
      <div className="main">
        <p className="title">Validation de votre compte</p>
        <p className="text">Bienvenu sur l'application 4b</p>
        {!this.state.validate && (
          <p className="text">
            Pour valider votre mail, cliquez
            <button
              onClick={() => {
                validateUser(this.props.match.params.key_id).then((res) => {
                  if (res.status === 200) {
                    this.setState({ validate: true });
                  }
                });
              }}
            >
              ici
            </button>
          </p>
        )}
        {this.state.validate && (
          <p className="text">
            Votre mail a bien été validé. Rendez vous sur l'application pour
            vous connecter.
          </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Forgot);
