import React from "react";
import { connect } from "react-redux";
import { loadUserInfo } from "../../actions/user/userActions";
import { loadEvent } from "../../actions/event/eventActions";
import { getAllEvent } from "../../api/eventApi";
class Admin extends React.Component {
  constructor(props) {
    super(props);
  }

  changeUser = (index) => {
    console.log(index);
    this.props.loadUserInfo(
      true,
      this.props.user.infos,
      this.props.user.subuser,
      index
    );
    getAllEvent(this.props.user.subuser[index].id).then((res) => {
      this.props.loadEvent(res.result);
    });
    this.props.history.push("/warroom");
  };

  render() {
    return (
      <div className="Main">
        <p className="title">Désirez-vous changez de compte ?</p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {this.props.user.subuser.map((item, index) => {
            return (
              <p
                style={{
                  border: "1px white solid",
                  width: "fit-content",
                  padding: "10px",
                  color: "white",
                  borderRadius: "12px",
                  margin: "10px",
                  cursor: "pointer",
                }}
                onClick={() => this.changeUser(index)}
              >
                {item.name}
              </p>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  loadUserInfo,
  loadEvent,
};

const mapStateToProps = (store) => {
  return {
    user: store.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
