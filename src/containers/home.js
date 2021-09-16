import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import { loadThemeInfo } from "../actions/theme/themeActions";
import { getAllTheme } from "../api/themeApi";
import appStore from "../assets/apple-app-store-icon.png";
import androidStore from "../assets/android-app-store.png";
import { getTextById } from "../api/textApi";
import DOMPurify from "dompurify";
import TextEditor from "../component/textEditor";
import { isMobile } from "react-device-detect";

const GoToQG = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: ${isMobile ? "60px" : "40px"};
  width: ${isMobile ? "60px" : "40px"};
  background-color: yellow;
  border-radius: 50%;
  position: absolute;
  font-size: ${isMobile ? "40px" : "20px"};
  bottom: ${isMobile ? "" : "10px"};
  top: ${isMobile ? "550px" : ""};
  left: 10px;
  cursor: pointer;
`;

const SquareInfoContainerLeft = styled.div`
  margin-bottom: 20px;
  left: 10px;
  top: 100px;
`;

const GoButton = styled.div`
  height: ${isMobile ? "400px" : "200px"};
  width:${isMobile ? "400px" : "200px"};
  margin-top: 10%;
  font-size: ${isMobile ? "60px" : "40px"};
  background-color: #ff171b;
  border-color: #ff171b;
  border-radius: 50%;
  position: ${isMobile ? "absolute" : ""};
  margin ${isMobile ? "0 28%" : ""};
`;
const Title = styled.div`
  font-weight: 700;
  font-size: ${isMobile ? "50px" : "20px;"};
  text-decoration: underline;
  text-align: center;
  padding-top: 5px;
`;

const FreeTrialContainer = styled.div`
  color: white;
  font-size: ${isMobile ? "40px" : "22px"};
  margin-top: ${isMobile ? "500px" : ""};
`;

const SquareInfoContainerRight = styled.div``;

const SquareInfoContainerBottom = styled.div``;

const SquareInfoTop = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: ${isMobile ? "column" : ""};
  margin-top: ${isMobile ? "100px" : ""};
`;
const SquareInfo = styled.div`
  color: white;
  border: 1px solid white;
  border-radius: 12px;
  text-align: left;
  max-width: ${isMobile ? "" : "500px"};
  margin: 30px;
  background-color: rgba(255, 255, 255, 0.5);
`;
const SquareInfoBottom = styled.div`
  padding: 12px;
  color: white;
  border: 1px solid white;
  border-radius: 12px;
  text-align: left;
  margin: ${isMobile ? "50px 30px" : "50px 100px"};

  background-color: rgba(255, 255, 255, 0.5);
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
const createMarkup = (html) => {
  return {
    __html: DOMPurify.sanitize(html),
  };
};

console.log("isMobile", isMobile);
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bloc1: "",
      bloc2: "",
      bloc3: "",
      bloc4: "",
      bloc5: "",
      isEditingBloc1: false,
      isEditingBloc2: false,
      isEditingBloc3: false,
      isEditingBloc4: false,
      isEditingBloc5: false,
    };
  }
  componentDidMount = () => {
    if (this.props.theme.allTheme && this.props.theme.allTheme.length == 0) {
      getAllTheme().then((res) => {
        this.props.loadThemeInfo(res.result);
      });
    }
    getTextById(1).then((res) => {
      if (res.text) {
        this.setState({ bloc1: res.text.text });
      }
    });
    getTextById(11).then((res) => {
      if (res.text) {
        this.setState({ bloc2: res.text.text });
      }
    });
    getTextById(21).then((res) => {
      if (res.text) {
        this.setState({ bloc3: res.text.text });
      }
    });
    getTextById(31).then((res) => {
      if (res.text) {
        this.setState({ bloc4: res.text.text });
      }
    });
    getTextById(41).then((res) => {
      if (res.text) {
        this.setState({ bloc5: res.text.text });
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

  handleToggleEditBloc4Mode = () => {
    this.setState({
      isEditingBloc4: !this.state.isEditingBloc4,
    });
  };
  handleToggleEditBloc5Mode = () => {
    this.setState({
      isEditingBloc5: !this.state.isEditingBloc5,
    });
  };
  render() {
    return (
      <div>
        <div>
          <SquareInfoTop>
            <SquareInfoContainerLeft>
              {isMobile && (
                <FreeTrialContainer>
                  <Link style={{ color: "white" }} to="/register">
                    Commencez ici votre essai gratuit de 7 jours
                  </Link>
                </FreeTrialContainer>
              )}
              <SquareInfo
                style={{
                  marginBottom: "45px",
                }}
              >
                <Title>Efficacité</Title>
                {this.state.isEditingBloc1 ? (
                  <TextEditor
                    id={1}
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
              </SquareInfo>
              <SquareInfo>
                <Title>Concentration</Title>
                {this.state.isEditingBloc2 ? (
                  <TextEditor
                    id={11}
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
            </SquareInfoContainerLeft>
            <GoButton>
              <Link
                to="/presentation"
                className="Go"
                style={{ top: isMobile ? "40%" : "" }}
              >
                Let's go !
              </Link>
            </GoButton>

            <SquareInfoContainerRight>
              <SquareInfo>
                <Title>Motivation</Title>
                {this.state.isEditingBloc3 ? (
                  <TextEditor
                    id={21}
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

              <SquareInfo>
                <Title>Divers</Title>
                {this.state.isEditingBloc4 ? (
                  <TextEditor
                    id={31}
                    toggle={this.handleToggleEditBloc4Mode}
                    text={this.state.bloc4}
                  />
                ) : (
                  <div
                    className="preview"
                    dangerouslySetInnerHTML={createMarkup(this.state.bloc4)}
                  ></div>
                )}
                {!this.state.isEditingBloc4 &&
                  this.props.user.infos &&
                  this.props.user.infos.role === "admin" && (
                    <EditButton onClick={this.handleToggleEditBloc4Mode}>
                      Modifier ce bloc
                    </EditButton>
                  )}
              </SquareInfo>
            </SquareInfoContainerRight>
          </SquareInfoTop>
          {!isMobile && (
            <FreeTrialContainer>
              <Link style={{ color: "white" }} to="/register">
                Commencez ici votre essai gratuit de 7 jours
              </Link>
            </FreeTrialContainer>
          )}
          <SquareInfoContainerBottom>
            <SquareInfoBottom>
              {this.state.isEditingBloc5 ? (
                <TextEditor
                  id={41}
                  toggle={this.handleToggleEditBloc5Mode}
                  text={this.state.bloc5}
                />
              ) : (
                <div
                  className="preview"
                  dangerouslySetInnerHTML={createMarkup(this.state.bloc5)}
                ></div>
              )}
              {!this.state.isEditingBloc5 &&
                this.props.user.infos &&
                this.props.user.infos.role === "admin" && (
                  <EditButton onClick={this.handleToggleEditBloc5Mode}>
                    Modifier ce bloc
                  </EditButton>
                )}
            </SquareInfoBottom>
          </SquareInfoContainerBottom>
        </div>
        <Link style={{ textDecoration: "none", color: "black" }} to="/warroom">
          <GoToQG> QG</GoToQG>
        </Link>

        <button
          style={{
            margin: 5,
            padding: 0,
            borderRadius: "12px",

            borderColor: "white",
          }}
          onClick={() =>
            window.open(
              "https://apps.apple.com/us/app/4bpremium/id1571508135?itsct=apps_box_link&itscg=30200",
              "_blank" // <- This is what makes it open in a new window.
            )
          }
        >
          <img
            style={{
              margin: 0,
              padding: 0,
              borderRadius: "12px",
              maxWidth: "200px",
              cursor: "pointer",
            }}
            src={appStore}
          />
        </button>

        <button
          style={{
            margin: 5,
            padding: 0,
            borderRadius: "12px",

            borderColor: "white",
          }}
          onClick={() =>
            window.open(
              "https://play.google.com/store/apps/details?id=com.premium4b.app",
              "_blank" // <- This is what makes it open in a new window.
            )
          }
        >
          <img
            style={{
              margin: 0,
              padding: 0,
              borderRadius: "12px",
              height: "58px",
              cursor: "pointer",
            }}
            src={androidStore}
          />
        </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
