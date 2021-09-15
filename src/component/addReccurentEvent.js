import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { validateInputField } from "../helpers/form-validator";
import { addEvent, getAllEvent } from "../api/eventApi";

const Title = styled.div`
  font-size: 20px;
  margin: 10px;
  padding: 10px;
  height: 30px;
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 20px;
  padding-left: 60px;
  padding-right: 60px;
`;

const AddEventComp = (props) => {
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [catSelected, setCatSelected] = useState(props.theme.allTheme[0].id);
  const [errorMessage, setErrorMessage] = useState("");
  const [duration, setDuration] = useState(30);
  const [notifTime, setnotifTime] = useState(60);
  const [hourOptions, sethourOption] = useState([]);
  const [daySelected, setDaySelected] = useState(1);
  const [hourSelected, setHourSelected] = useState("9:00");

  useEffect(() => {
    setOptionsHour();
  }, []);

  const setOptionsHour = () => {
    let optionsHour = [];
    for (let i = 0; i < 28; i++) {
      if (i % 2 == 0) {
        let item = { value: `${8 + i / 2}:00`, label: `${8 + i / 2}:00` };
        optionsHour.push(item);
      } else {
        let item = {
          value: `${8 + (i - 1) / 2}:30`,
          label: `${8 + (i - 1) / 2}:30`,
        };
        optionsHour.push(item);
      }
    }
    sethourOption(optionsHour);
  };

  const createEventArray = () => {
    let dateArray = [];
    const date = new Date().getDay();
    let time = hourSelected.split(":");
    console.log("time", time);
    let ecart = parseInt(daySelected) - date;

    let newDate = new Date().setDate(new Date().getDate() + ecart);
    newDate = new Date(newDate).setHours(time[0], time[1]);
    newDate = new Date(newDate);
    dateArray.push(newDate);
    for (let i = 0; i < 7; i++) {
      newDate = new Date(newDate).setDate(newDate.getDate() + 7);
      newDate = new Date(newDate).setHours(time[0], time[1]);
      newDate = new Date(newDate);
      dateArray.push(newDate);
    }
    console.log(dateArray);
    for (let i = 0; i < dateArray.length; i++) {
      onSubmitForm(dateArray[i]);
    }
    let index = props.user.current_subuser;
    getAllEvent(props.user.subuser[index].id).then((resp) => {
      if (resp.status === 200) {
        console.log(resp.result);
        props.loadEvent(resp.result);
      }
    });
    props.setEventPopUp(false);
    props.setShowModal(false);
  };

  const onSubmitForm = (date) => {
    let index = props.user.current_subuser;
    let data = {
      title: title,
      comment: comment,
      date: date,
      theme_id: catSelected,
      user_id: props.user.infos.id,
      subuser_id: props.user.subuser[index].id,
      notifTime: notifTime,
      duration: duration,
    };

    setErrorMessage("");
    let error = formValidator();

    if (error === "") {
      addEvent(data).then((res) => {
        if (res.status === 200) {
          console.log(200);
          return 200;
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

  return (
    <MainContainer>
      <Title>Créer un rituel récurrent sur les 7 prochaines semaines</Title>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          createEventArray();
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <input
          placeholder="Titre"
          type="text"
          name="name"
          style={{ padding: "10px" }}
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
        <div style={{ display: "flex", margin: "20px" }}>
          <p style={{ display: "flex", marginRight: "10px" }}>Categorie : </p>
          <select
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

        <div style={{ display: "flex", margin: "20px" }}>
          <p style={{ display: "flex", marginRight: "10px" }}>Jour : </p>
          <select onChange={(e) => setDaySelected(e.currentTarget.value)}>
            <option value={1}>Lundi</option>;<option value={2}>Mardi</option>;
            <option value={3}>Mercredi</option>;<option value={4}>Jeudi</option>
            ;<option value={5}>Vendredi</option>;
            <option value={6}>Samedi</option>;
            <option value={0}>Dimanche</option>;
          </select>

          <p style={{ display: "flex", marginLeft: "10px" }}>Heure : </p>
          <select onChange={(e) => setHourSelected(e.currentTarget.value)}>
            {hourOptions.map((item) => {
              return <option value={item.value}>{item.label}</option>;
            })}
          </select>
        </div>
        <div style={{ display: "flex", margin: "20px" }}>
          <p style={{ display: "flex", marginRight: "10px" }}>Durée : </p>
          <select
            onChange={(e) => setDuration(parseInt(e.currentTarget.value))}
          >
            <option value={20}>20 minutes</option>;
            <option value={30}>30 minutes</option>;
            <option value={40}>40 minutes</option>;
          </select>
        </div>
        <textarea
          placeholder="Commentaire"
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

export default AddEventComp;
