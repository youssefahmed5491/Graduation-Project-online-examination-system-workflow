import React, { useState } from "react";

const NewEventModal = ({
    onSave,
    onClose,
    length,
    onDelete,
    eventText,
    clicked,
}) => {
    const [title, setTitle] = useState("");
    const [time, setTime] = useState("");
    const [error, setError] = useState(false);
    const [show, setShow] = useState(false);
    console.log(length);
    const today = clicked.split("/");
    const now = new Date(today[2], today[1] - 1, today[0]);
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    console.log(today);
    console.log(days[now.getDay()]);
    return (
        <>
            <div id="">
                <h2 id="eventDate">
                    {days[now.getDay()]}
                    <span style={{ paddingLeft: "10px" }}>{today[0]}</span>
                </h2>
                {/* <input
          onClick={() => setShow(true)}
          className={error ? "error" : ""}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id="eventTitleInput"
          placeholder="Add event or reminder "
        />
        {show && (
          <input
            className={error ? "error" : ""}
            value={time}
            onChange={(e) => setTime(e.target.value)}
            id="eventTitleInput"
            placeholder="Set time"
          />
        )}
        {show && (
          <button
            onClick={() => {
              if (title && time) {
                setError(false);
                onSave(title, time);
                console.log(title, time);
              } else {
                setError(true);
              }
            }}
            id="saveButton"
          >
            Save
          </button>
        )}
        {show && (
          <button onClick={onClose} id="cancelButton">
            Cancel
          </button>
        )} */}
                {length > 0 && (
                    <div>
                        <h2>Events</h2>
                        <div id="eventText">
                            {eventText.map((event, index) => (
                                <div
                                    key={index}
                                    style={{
                                        borderStyle: "solid",
                                        borderColor: "#6bfff5",
                                        borderTop: "0",
                                        borderRight: "0",
                                        borderBottom: "0",
                                    }}
                                >
                                    <h3>
                                        <span style={{ paddingRight: "10px" }}>
                                            {event.time}
                                        </span>
                                        {event.title}
                                        {/* <button
                      style={{ float: "right" }}
                      onClick={() => {
                        onDelete(index);
                      }}
                      id="deleteButton"
                    >
                      Delete
                    </button> */}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default NewEventModal;
