import React from "react";

import { connect } from "react-redux";

class Home extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="packDiv">
          <div className="pack">
            <p className="title">Pack Kids</p>
            <p className="price">3 € / mois</p>
          </div>
          <div className="pack">
            <p className="title">Pack Family</p>
            <p className="price">5€ / mois</p>
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
