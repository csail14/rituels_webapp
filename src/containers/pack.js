import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getTextById } from "../api/textApi";
import DOMPurify from "dompurify";
import TextEditor from "../component/textEditor";
import { isMobile } from "react-device-detect";

const SquareInfoTop = styled.div`
  padding: ${isMobile ? "30px" : "12px"};
  color: white;
  border: 1px solid white;
  border-radius: 12px;
  text-align: left;
  margin: ${isMobile ? "80px" : "50px"} 100px;
  background-color: rgba(255, 255, 255, 0.5);
`;

const Title = styled.div`
  font-weight: 700;
  font-size: ${isMobile ? "50px" : "20px"};
  text-decoration: underline;
  text-align: center;
  padding-top: 5px;
`;
const Subtitle = styled.div`
  font-weight: 700;
  font-size: ${isMobile ? "40px" : "16px"};

  text-align: center;
  padding-top: 5px;
`;
const SquareInfo = styled.div`
  color: white;
  border: 1px solid white;
  border-radius: 12px;
  text-align: left;
  max-width: ${isMobile ? "" : "500px"};
  margin: 30px;
  margin: ${isMobile ? "0 100px" : ""};
  background-color: rgba(255, 255, 255, 0.5);
  padding: ${isMobile ? "30px" : "10px"};
`;
const EditButton = styled.div`
  padding: 20px;
  background-color: grey;
  color: white;
  width: fit-content;
  margin: auto;
  border: solid white 1px;
  margin-bottom: 5px;
  border-radius: 12px;
  cursor: pointer;
`;

const PackDiv = styled.div`
  display: ${isMobile ? "" : "flex"};
  flex-direction: ${isMobile ? "column" : "row"};
  justify-content: center;
  padding-bottom: 30px;
`;
const createMarkup = (html) => {
  return {
    __html: DOMPurify.sanitize(html),
  };
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bloc1: "",
      bloc2: "",
      bloc3: "",
      isEditingBloc1: false,
      isEditingBloc2: false,
      isEditingBloc3: false,
    };
  }
  componentDidMount = () => {
    getTextById(51).then((res) => {
      if (res.text) {
        this.setState({ bloc1: res.text.text });
      }
    });
    getTextById(61).then((res) => {
      if (res.text) {
        this.setState({ bloc2: res.text.text });
      }
    });
    getTextById(71).then((res) => {
      if (res.text) {
        this.setState({ bloc3: res.text.text });
      }
    });
  };
  handleToggleEditBloc1Mode = () => {
    this.setState({
      isEditingBloc1: !this.state.isEditingBloc1,
    });
  };

  handleToggleEditBloc2Mode = () => {
    this.setState({
      isEditingBloc2: !this.state.isEditingBloc2,
    });
  };

  handleToggleEditBloc3Mode = () => {
    this.setState({
      isEditingBloc3: !this.state.isEditingBloc3,
    });
  };
  render() {
    return (
      <div className="main">
        <SquareInfoTop>
          {" "}
          <Title>Fonctionnement et explication 4B Commun</Title>
          <Subtitle>3€ /mois</Subtitle>
          {this.state.isEditingBloc1 ? (
            <TextEditor
              id={51}
              toggle={this.handleToggleEditBloc1Mode}
              text={this.state.bloc1}
            />
          ) : (
            <div
              className="preview"
              dangerouslySetInnerHTML={createMarkup(this.state.bloc1)}
            ></div>
          )}
          {!this.state.isEditingBloc1 &&
            this.props.user.infos &&
            this.props.user.infos.role === "admin" && (
              <EditButton onClick={this.handleToggleEditBloc1Mode}>
                Modifier ce bloc
              </EditButton>
            )}
        </SquareInfoTop>
        <PackDiv>
          <SquareInfo style={{ marginBottom: "45px" }}>
            <Title>Pack Kids</Title>
            <Subtitle>3€ /mois</Subtitle>
            {this.state.isEditingBloc2 ? (
              <TextEditor
                id={61}
                toggle={this.handleToggleEditBloc2Mode}
                text={this.state.bloc2}
              />
            ) : (
              <div
                className="preview"
                dangerouslySetInnerHTML={createMarkup(this.state.bloc2)}
              ></div>
            )}
            {!this.state.isEditingBloc2 &&
              this.props.user.infos &&
              this.props.user.infos.role === "admin" && (
                <EditButton onClick={this.handleToggleEditBloc2Mode}>
                  Modifier ce bloc
                </EditButton>
              )}
          </SquareInfo>
          <SquareInfo style={{ marginBottom: "45px" }}>
            <Title>Pack Family</Title>
            <Subtitle>5€ /mois</Subtitle>
            {this.state.isEditingBloc3 ? (
              <TextEditor
                id={71}
                toggle={this.handleToggleEditBloc3Mode}
                text={this.state.bloc3}
              />
            ) : (
              <div
                className="preview"
                dangerouslySetInnerHTML={createMarkup(this.state.bloc3)}
              ></div>
            )}
            {!this.state.isEditingBloc3 &&
              this.props.user.infos &&
              this.props.user.infos.role === "admin" && (
                <EditButton onClick={this.handleToggleEditBloc3Mode}>
                  Modifier ce bloc
                </EditButton>
              )}
          </SquareInfo>
        </PackDiv>
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
