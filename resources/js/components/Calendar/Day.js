import React, { useState } from "react";

const Day = ({ day, onClick }) => {
    //const className = `day  ${day.isCurrentDay ? "currentDay" : ""} `;
    const className = `day  ${day.isCurrentDay ? "currentDay" : ""} `;
    //${day.value === "padding" ? "padding" : ""}
    //${day.value != "padding" && day.event.length > 0 ? "redDiv" : ""}
    // can be added up
    return (
        <div tabIndex="0" onClick={onClick} className={className}>
            {day.value === "padding" ? (
                ""
            ) : (
                <div style={{ position: "absolute" }}>
                    <div>{day.value}</div>
                </div>
            )}

            {day.value !== "padding" &&
                !day.isCurrentDay &&
                day.event.length > 0 && <div className="hasevent">{}</div>}
            {day.value !== "padding" &&
                day.isCurrentDay &&
                day.event.length > 0 && (
                    <div className="currenthasevent">{}</div>
                )}
            {/* {day.isCurrentDay && (
        <div
          className="today"
          style={{ display: "flex", justifyContent: "center" }}
        >
          today
        </div>
      )} */}
        </div>
    );
};

export default Day;
