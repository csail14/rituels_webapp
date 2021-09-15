import React from "react";
import { connect } from "react-redux";
import ReactPlayer from "react-player";
import { getVideo } from "../api/videoApi";
import { config } from "../config";

class Presentation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: "",
    };
  }

  componentDidMount = () => {
    getVideo(741).then((res) => {
      if (res.status === 200) {
        this.setState({ video: config.video_url + res.result[0].url });
      } else {
        console.log("error", res);
      }
    });
  };

  render() {
    return (
      <div className="main">
        <ReactPlayer
          className="react-player"
          url={this.state.video}
          controls={true}
          playing={true}
          width="80%"
          height="50%"
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(Presentation);
