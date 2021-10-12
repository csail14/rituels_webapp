import React, { useState, useEffect } from "react";
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

import { useMediaQuery } from "react-responsive";

const GoToQG = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: ${(props) => (props.isMobile ? "110px" : "40px")};
  width: ${(props) => (props.isMobile ? "110px" : "40px")};
  background-color: yellow;
  border-radius: 50%;
  position: absolute;
  font-size: ${(props) => (props.isMobile ? "40px" : "20px")};
  bottom: ${(props) => (props.isMobile ? "" : "10px")};
  top: ${(props) => (props.isMobile ? "550px" : "")};
  left: ${(props) => (props.isMobile ? "20px" : "10px")};
  cursor: pointer;
`;

const SquareInfoContainerLeft = styled.div`
  margin-bottom: 20px;
  left: 10px;
  top: 100px;
`;

const GoButton = styled.div`
  height: ${(props) => (props.isMobile ? "400px" : "200px")};
  width:${(props) => (props.isMobile ? "400px" : "200px")};
  margin-top: 10%;
  font-size: ${(props) => (props.isMobile ? "60px" : "40px")};
  background-color: #ff171b;
  border-color: #ff171b;
  border-radius: 50%;
  position: ${(props) => (props.isMobile ? "absolute" : "")};
  margin ${(props) => (props.isMobile ? "0 28%" : "")};
`;
const Title = styled.div`
  font-weight: 700;
  font-size: ${(props) => (props.isMobile ? "50px" : "20px;")};
  text-decoration: underline;
  text-align: center;
  padding-top: 5px;
`;

const FreeTrialContainer = styled.div`
  color: white;
  font-size: ${(props) => (props.isMobile ? "40px" : "22px")};
  margin-top: ${(props) => (props.isMobile ? "500px" : "")};
`;

const SquareInfoContainerRight = styled.div``;

const SquareInfoContainerBottom = styled.div``;

const SquareInfoTop = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: ${(props) => (props.isMobile ? "column" : "")};
  margin-top: ${(props) => (props.isMobile ? "100px" : "")};
`;
const SquareInfo = styled.div`
  color: white;
  border: 1px solid white;
  border-radius: 12px;
  text-align: left;
  max-width: ${(props) => (props.isMobile ? "" : "500px")};
  margin: 30px;
  background-color: rgba(255, 255, 255, 0.5);
  padding: ${(props) => (props.isMobile ? "20px" : "")};
`;
const SquareInfoBottom = styled.div`
  padding: 12px;
  color: white;
  border: 1px solid white;
  border-radius: 12px;
  text-align: left;
  margin: ${(props) => (props.isMobile ? "50px 30px" : "50px 100px")};

  background-color: rgba(255, 255, 255, 0.5);
`;

const EditButton = styled.div`
  padding: 20px;
  background-color: grey;
  color: white;
  width: fit-content;
  min-width: 60px;
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
const Home = (props) => {
  const [bloc1, setbloc1] = useState("");
  const [bloc2, setbloc2] = useState("");
  const [bloc3, setbloc3] = useState("");
  const [bloc4, setbloc4] = useState("");
  const [bloc5, setbloc5] = useState("");
  const [isEditingBloc1, setIsEditingBloc1] = useState("");
  const [isEditingBloc2, setIsEditingBloc2] = useState("");
  const [isEditingBloc3, setIsEditingBloc3] = useState("");
  const [isEditingBloc4, setIsEditingBloc4] = useState("");
  const [isEditingBloc5, setIsEditingBloc5] = useState("");

  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  useEffect(() => {
    if (props.theme.allTheme && props.theme.allTheme.length == 0) {
      getAllTheme().then((res) => {
        props.loadThemeInfo(res.result);
      });
    }
    getTextById(1).then((res) => {
      if (res.text) {
        setbloc1(res.text.text);
      }
    });
    getTextById(11).then((res) => {
      if (res.text) {
        setbloc2(res.text.text);
      }
    });
    getTextById(21).then((res) => {
      if (res.text) {
        setbloc3(res.text.text);
      }
    });
    getTextById(31).then((res) => {
      if (res.text) {
        setbloc4(res.text.text);
      }
    });
    getTextById(41).then((res) => {
      if (res.text) {
        setbloc5(res.text.text);
      }
    });
  }, []);

  const handleToggleEditBloc1Mode = () => {
    setIsEditingBloc1(!isEditingBloc1);
  };

  const handleToggleEditBloc2Mode = () => {
    setIsEditingBloc2(!isEditingBloc2);
  };

  const handleToggleEditBloc3Mode = () => {
    setIsEditingBloc3(!isEditingBloc3);
  };

  const handleToggleEditBloc4Mode = () => {
    setIsEditingBloc4(!isEditingBloc4);
  };
  const handleToggleEditBloc5Mode = () => {
    setIsEditingBloc5(!isEditingBloc5);
  };

  return (
    <div>
      <div>
        <SquareInfoTop isMobile={isMobile}>
          <SquareInfoContainerLeft>
            {isMobile && (
              <FreeTrialContainer isMobile={isMobile}>
                <Link style={{ color: "white" }} to="/register">
                  Commencez ici votre essai gratuit de 7 jours
                </Link>
              </FreeTrialContainer>
            )}
            <SquareInfo
              isMobile={isMobile}
              style={{
                marginBottom: "45px",
              }}
            >
              <Title isMobile={isMobile}>Efficacité</Title>
              {isEditingBloc1 ? (
                <TextEditor
                  id={1}
                  toggle={handleToggleEditBloc1Mode}
                  text={bloc1}
                />
              ) : (
                <div
                  className="preview"
                  dangerouslySetInnerHTML={createMarkup(bloc1)}
                ></div>
              )}
              {!isEditingBloc1 &&
                props.user.infos &&
                props.user.infos.role === "admin" && (
                  <EditButton onClick={handleToggleEditBloc1Mode}>
                    Modifier ce bloc
                  </EditButton>
                )}
            </SquareInfo>
            <SquareInfo isMobile={isMobile}>
              <Title isMobile={isMobile}>Concentration</Title>
              {isEditingBloc2 ? (
                <TextEditor
                  id={11}
                  toggle={handleToggleEditBloc2Mode}
                  text={bloc2}
                />
              ) : (
                <div
                  className="preview"
                  dangerouslySetInnerHTML={createMarkup(bloc2)}
                ></div>
              )}
              {!isEditingBloc2 &&
                props.user.infos &&
                props.user.infos.role === "admin" && (
                  <EditButton onClick={handleToggleEditBloc2Mode}>
                    Modifier ce bloc
                  </EditButton>
                )}
            </SquareInfo>
          </SquareInfoContainerLeft>
          <GoButton isMobile={isMobile}>
            <Link
              to="/presentation"
              className="Go"
              style={{ top: isMobile ? "40%" : "" }}
            >
              Let's go !
            </Link>
          </GoButton>

          <SquareInfoContainerRight>
            <SquareInfo isMobile={isMobile}>
              <Title isMobile={isMobile}>Motivation</Title>
              {isEditingBloc3 ? (
                <TextEditor
                  id={21}
                  toggle={handleToggleEditBloc3Mode}
                  text={bloc3}
                />
              ) : (
                <div
                  className="preview"
                  dangerouslySetInnerHTML={createMarkup(bloc3)}
                ></div>
              )}
              {!isEditingBloc3 &&
                props.user.infos &&
                props.user.infos.role === "admin" && (
                  <EditButton onClick={handleToggleEditBloc3Mode}>
                    Modifier ce bloc
                  </EditButton>
                )}
            </SquareInfo>

            <SquareInfo isMobile={isMobile}>
              <Title isMobile={isMobile}>Divers</Title>
              {isEditingBloc4 ? (
                <TextEditor
                  id={31}
                  toggle={handleToggleEditBloc4Mode}
                  text={bloc4}
                />
              ) : (
                <div
                  className="preview"
                  dangerouslySetInnerHTML={createMarkup(bloc4)}
                ></div>
              )}
              {!isEditingBloc4 &&
                props.user.infos &&
                props.user.infos.role === "admin" && (
                  <EditButton onClick={handleToggleEditBloc4Mode}>
                    Modifier ce bloc
                  </EditButton>
                )}
            </SquareInfo>
          </SquareInfoContainerRight>
        </SquareInfoTop>
        {!isMobile && (
          <FreeTrialContainer isMobile={isMobile}>
            <Link style={{ color: "white" }} to="/register">
              Commencez ici votre essai gratuit de 7 jours
            </Link>
          </FreeTrialContainer>
        )}
        <SquareInfoContainerBottom>
          <SquareInfoBottom isMobile={isMobile}>
            {isEditingBloc5 ? (
              <TextEditor
                id={41}
                toggle={handleToggleEditBloc5Mode}
                text={bloc5}
              />
            ) : (
              <div
                className="preview"
                dangerouslySetInnerHTML={createMarkup(bloc5)}
              ></div>
            )}
            {!isEditingBloc5 &&
              props.user.infos &&
              props.user.infos.role === "admin" && (
                <EditButton onClick={handleToggleEditBloc5Mode}>
                  Modifier ce bloc
                </EditButton>
              )}
          </SquareInfoBottom>
        </SquareInfoContainerBottom>
      </div>
      <Link style={{ textDecoration: "none", color: "black" }} to="/warroom">
        <GoToQG isMobile={isMobile}> QG</GoToQG>
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
};

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
