import React, { useState, useEffect } from "react";
import { ReactAgenda, ReactAgendaCtrl, guid, Modal } from "react-agenda";
import moment from "moment";
import "react-agenda/build/styles.css";
import "react-datetime/css/react-datetime.css";
import { connect } from "react-redux";
import { getAllEvent, deleteEvent } from "../../api/eventApi";
import { loadEvent } from "../../actions/event/eventActions";
import styled from "styled-components";
import AddEvent from "../../component/addEvent";
import EditEvent from "../../component/editEvent";
import AddRecurentEvent from "../../component/addReccurentEvent";
import { isMobile } from "react-device-detect";

require("moment/locale/fr.js");
var colors = {
  1: "rgba(102, 195, 131 , 1)",
  public: "rgba(102, 195, 131 , 1)",
  private: "rgba(242, 177, 52, 1)",
  "color-3": "rgba(235, 85, 59, 1)",
};
var now = new Date();

const Title = styled.p`
  color: white;
  font-size: ${isMobile ? "60px" : "22px"};
  margin-top: ${isMobile ? "100px" : ""};
`;

const Text = styled.p`
  color: white;
  font-size: 18px;
  font-size: ${isMobile ? "30px" : "18px"};
`;

const ThemeButtonContainer = styled.div`
  margin-top: 5px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Theme = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  margin: 5px;
  background-color: ${(props) => props.backgroundColor};
  border-color: black;
  border-radius: 5px;
  border-width: 1px;
`;

const Warroom = (props) => {
  const [showHelp, setShowHelp] = useState(false);
  const [recurentEventPopUp, setRecurrentEventPopUp] = useState(false);
  const [eventPopUp, setEventPopUp] = useState(false);
  const [editeventPopUp, setEditeventPopUp] = useState(false);
  const [selectedDate, setSelectedate] = useState();
  const [selectedEvent, setselectedEvent] = useState([]);
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState([]);
  const [cellHeight, setCellHeight] = useState(30);
  const [showModal, setShowModal] = useState(false);
  const [locale, setLocale] = useState("fr");
  const [rowsPerHour, setRowsPerHour] = useState(2);
  const [numberOfDays, setNumberOfDays] = useState(7);
  const [startDate, setStartDate] = useState(new Date());

  const handleRangeSelection = (item) => {};

  const handleRemoveItem = (items, removeItem) => {
    deleteEvent(removeItem.id).then((res) => {
      if (res.status === 200) {
        getAllEvent(props.user.subuser[props.user.current_subuser].id).then(
          (res) => {
            props.loadEvent(res.result);
          }
        );
      }
    });
  };

  const addNewEvent = (items, newItem) => {
    setSelectedate(items);
    setSelected(items);
    setEventPopUp(true);
    setShowModal(true);
  };

  const editEvent = (items, newItem) => {
    setEditeventPopUp(true);
    setShowModal(true);
    let event = props.agenda.event.filter((item) => item.id === items.id)[0];
    setselectedEvent(event);
  };
  useEffect(() => {
    for (let i = 0; i < props.theme.allTheme.length; i++) {
      colors[props.theme.allTheme[i].id] = props.theme.allTheme[i].color;
    }
  }, []);

  useEffect(() => {
    if (props.user.isLogged && props.agenda.event.length == 0) {
      getAllEvent(props.user.subuser[props.user.current_subuser].id).then(
        (res) => {
          props.loadEvent(res.result);
        }
      );
    }
  }, [props.user]);

  useEffect(() => {
    let newData = [];
    props.agenda.event.map((item) => {
      let newItem = {
        id: item.id,
        _id: item.id,
        name: item.title,
        startDateTime: new Date(item.date),
        endDateTime: new Date(
          new Date(item.date).setTime(
            new Date(item.date).getTime() + item.duration * 60000
          )
        ),
        classes: item.theme_id,
      };
      newData.push(newItem);
    });
    setItems(newData);
  }, [props.agenda]);
  console.log(editeventPopUp, eventPopUp, recurentEventPopUp);
  return (
    <div>
      <div>
        <div>
          <Title
            onClick={() => {
              setShowHelp(true);
            }}
          >
            Comment fonctionne le quartier général ?
          </Title>

          <ThemeButtonContainer>
            {props.theme.allTheme.map((item) => {
              return (
                <Theme backgroundColor={item.color} key={item.id}>
                  <Text>{item.name}</Text>
                </Theme>
              );
            })}
          </ThemeButtonContainer>
        </div>
        <div
          style={{
            position: "absolute",
            backgroundColor: "red",
            padding: 16,
            borderRadius: 12,
            right: 10,
            cursor: "pointer",
          }}
          onClick={(e) => {
            e.preventDefault();
            setRecurrentEventPopUp(true);
            setShowModal(true);
          }}
        >
          <Text style={{ color: "white", margin: "7px" }}>Programmer</Text>
        </div>

        {/* {showHelp && <Help setShowHelp={setShowHelp} />} */}
      </div>
      <div>
        {props.user.subuser && (
          <Text>
            Bonjour {props.user.subuser[props.user.current_subuser].name}
          </Text>
        )}
        <Text
          style={{
            fontSize: isMobile ? "30px" : "14px",
            textDecoration: "underline",
            cursor: "pointer",
          }}
          onClick={() => {
            props.history.push("/change-account");
          }}
        >
          Changer de Compte
        </Text>
        {showModal && (
          <Modal
            style={{ backgroundColor: "red" }}
            clickOutside={() => {
              setEventPopUp(false);
              setEditeventPopUp(false);
              setRecurrentEventPopUp(false);
              setShowModal(false);
            }}
          >
            {eventPopUp && (
              <>
                <AddEvent
                  theme={props.theme}
                  date={selectedDate}
                  user={props.user}
                  setEventPopUp={setEventPopUp}
                  setShowModal={setShowModal}
                  loadEvent={props.loadEvent}
                />
              </>
            )}
            {recurentEventPopUp && (
              <>
                <AddRecurentEvent
                  theme={props.theme}
                  date={selectedDate}
                  user={props.user}
                  setEventPopUp={setRecurrentEventPopUp}
                  setShowModal={setShowModal}
                  loadEvent={props.loadEvent}
                />
              </>
            )}
            {editeventPopUp && (
              <EditEvent
                theme={props.theme}
                date={selectedDate}
                user={props.user}
                setEventPopUp={setEditeventPopUp}
                setShowModal={setShowModal}
                loadEvent={props.loadEvent}
                event={selectedEvent}
              />
            )}
          </Modal>
        )}
        <div style={{ backgroundColor: "white" }}>
          <ReactAgenda
            minDate={now}
            maxDate={new Date(now.getFullYear(), now.getMonth() + 3)}
            disablePrevButton={false}
            startDate={startDate}
            cellHeight={cellHeight}
            locale={locale}
            items={items}
            numberOfDays={numberOfDays}
            rowsPerHour={rowsPerHour}
            itemColors={colors}
            autoScale={false}
            fixedHeader={true}
            onItemEdit={editEvent}
            onCellSelect={addNewEvent}
            onRangeSelection={handleRangeSelection}
            onItemRemove={handleRemoveItem}
          />
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  loadEvent,
};

const mapStateToProps = (store) => {
  return {
    user: store.user,
    agenda: store.agenda,
    theme: store.theme,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Warroom);
