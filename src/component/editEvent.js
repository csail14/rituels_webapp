import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { validateInputField } from "../helpers/form-validator";
import { modifyEvent, getAllEvent } from "../api/eventApi";
import moment from "moment";

const Title = styled.div`
  font-size: 20px;
  margin: 10px;
  padding: 10px;
  height: 30px;
`;

const MainContainer = styled.div`
  text-align: center;
  padding: 20px;
  padding-left: 60px;
  padding-right: 60px;
`;

const EditEventComp = (props) => {
  const [title, setTitle] = useState(props.event.title);
  const [comment, setComment] = useState(props.event.comment);
  // const [catSelected, setCatSelected] = useState(
  //   props.theme.allTheme.filter((item) => (item.id = props.event.theme_id))[0]
  //     .id
  // );
  const [catSelected, setCatSelected] = useState(1);
  const [value, onChange] = useState(new Date(props.event.date));
  const [errorMessage, setErrorMessage] = useState("");
  const [duration, setDuration] = useState(props.event.duration);
  const [notifTime, setnotifTime] = useState(props.event.notifTime);

  const onSubmitForm = () => {
    let index = props.user.current_subuser;
    let data = {
      title: title,
      comment: comment,
      date: value,
      theme_id: catSelected,
      user_id: props.user.infos.id,
      subuser_id: props.user.subuser[index].id,
      notifTime: notifTime,
      duration: duration,
    };

    setErrorMessage("");
    let error = formValidator();

    if (error === "") {
      modifyEvent(data, props.event.id).then((res) => {
        if (res.status === 200) {
          props.setEventPopUp(false);
          props.setShowModal(false);
          getAllEvent(props.user.subuser[index].id).then((resp) => {
            if (resp.status === 200) {
              props.loadEvent(resp.result);
            }
          });
        } else {
          setErrorMessage(
            "Une erreur est survenue, veuillez réessayer plus tard."
          );
        }
      });
    }
  };

  const formValidator = () => {
    let error = false;
    error = validateInputField("title", "string", title);
    if (error !== "") {
      setErrorMessage("Veuillez ajouter un titre");
      return error;
    }
    return "";
  };

  useEffect(() => {
    let catId = props.theme.allTheme.filter(
      (item) => item.id == props.event.theme_id
    )[0].id;
    setCatSelected(catId);
  }, []);

  return (
    <MainContainer>
      <Title>Modifier un Rituel</Title>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitForm();
        }}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input
          placeholder="Titre"
          type="text"
          value={title}
          name="name"
          style={{ padding: "10px" }}
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
        <div style={{ display: "flex", margin: "20px" }}>
          <p style={{ display: "flex", marginRight: "10px" }}>Categorie : </p>
          <select
            value={catSelected}
            onChange={(e) => setCatSelected(parseInt(e.currentTarget.value))}
          >
            {props.theme.allTheme.map((item, index) => {
              return (
                <option key={index} value={item.id}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>
        <TextField
          id="datetime-local"
          type="datetime-local"
          defaultValue={
            moment(props.event.date).format("YYYY-MM-DD") +
            "T" +
            new Date(props.event.date).toLocaleTimeString()
          }
          InputLabelProps={{
            shrink: true,
          }}
        />
        <div style={{ display: "flex", margin: "20px" }}>
          <p style={{ display: "flex", marginRight: "10px" }}>Durée : </p>
          <select
            value={duration}
            onChange={(e) => setDuration(parseInt(e.currentTarget.value))}
          >
            <option value={20}>20 minutes</option>;
            <option value={30}>30 minutes</option>;
            <option value={40}>40 minutes</option>;
          </select>
        </div>
        <textarea
          placeholder="Commentaire"
          value={comment}
          type="text"
          name="name"
          onChange={(e) => setComment(e.currentTarget.value)}
        />
        {props.user.infos.notification == 1 && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: "5px",
            }}
          >
            <p>M'alerter </p>
            <input
              style={{ width: "30px", textAlign: "center", margin: "0 10px" }}
              value={"" + notifTime}
              onChange={(e) => setnotifTime(e.currentTarget.value)}
            />
            <p>min avant </p>
          </div>
        )}
        <p style={{ color: "red" }}>{errorMessage}</p>
        <input
          style={{
            margin: "10px",
            height: "40px",
            borderRadius: "12px",
          }}
          type="submit"
          value="Enregistrer"
        />
      </form>
    </MainContainer>
  );
};

export default EditEventComp;
