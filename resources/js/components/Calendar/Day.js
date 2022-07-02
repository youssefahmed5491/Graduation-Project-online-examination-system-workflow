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
                <div>
                    {day.value !== "padding" &&
                        day.value < 10 &&
                        !day.isCurrentDay &&
                        day.event.length > 0 && (
                            <div className="hasevent">
                                {
                                    <div
                                        style={{
                                            position: "relative",
                                            top: "-6px",
                                            left: "5px",
                                        }}
                                    >
                                        {day.value}
                                    </div>
                                }
                            </div>
                        )}
                    {day.value !== "padding" &&
                        day.value > 9 &&
                        !day.isCurrentDay &&
                        day.event.length > 0 && (
                            <div className="hasevent">
                                {
                                    <div
                                        style={{
                                            position: "relative",
                                            top: "-6px",
                                        }}
                                    >
                                        {day.value}
                                    </div>
                                }
                            </div>
                        )}
                    {day.value !== "padding" &&
                        !day.isCurrentDay &&
                        day.event.length === 0 && (
                            <div>{<div>{day.value}</div>}</div>
                        )}
                    {day.value !== "padding" &&
                        day.isCurrentDay &&
                        day.event.length === 0 &&
                        day.value < 10 && (
                            <div>
                                {
                                    <div
                                        style={{
                                            position: "relative",
                                            top: "-10px",
                                            left: "15px",
                                        }}
                                    >
                                        {day.value}
                                    </div>
                                }
                            </div>
                        )}
                    {day.value !== "padding" &&
                        day.isCurrentDay &&
                        day.event.length === 0 &&
                        day.value > 9 && (
                            <div>
                                {
                                    <div
                                        style={{
                                            position: "relative",
                                            top: "-10px",
                                        }}
                                    >
                                        {day.value}
                                    </div>
                                }
                            </div>
                        )}
                    {day.value !== "padding" &&
                        day.isCurrentDay &&
                        day.event.length > 0 &&
                        day.value > 19 && (
                            <div className="currenthasevent">
                                {
                                    <div
                                        style={{
                                            position: "relative",
                                            top: "-15px",
                                            left: "4px",
                                        }}
                                    >
                                        {day.value}
                                    </div>
                                }
                            </div>
                        )}
                    {day.value !== "padding" &&
                        day.isCurrentDay &&
                        day.event.length > 0 &&
                        day.value < 10 && (
                            <div className="currenthasevent">
                                {
                                    <div
                                        style={{
                                            position: "relative",
                                            top: "-15px",
                                            left: "17px",
                                        }}
                                    >
                                        {day.value}
                                    </div>
                                }
                            </div>
                        )}
                    {day.value !== "padding" &&
                        day.isCurrentDay &&
                        day.event.length > 0 &&
                        day.value < 20 &&
                        day.value > 10 && (
                            <div className="currenthasevent">
                                {
                                    <div
                                        style={{
                                            position: "relative",
                                            top: "-15px",
                                        }}
                                    >
                                        {day.value}
                                    </div>
                                }
                            </div>
                        )}
                </div>
            )}

            {/* {day.value !== "padding" &&
                !day.isCurrentDay &&
                day.event.length > 0 && <div className="hasevent">{}</div>} */}
            {/* {day.value !== "padding" &&
                day.isCurrentDay &&
                day.event.length > 0 && (
                    <div className="currenthasevent">{}</div>
                )} */}
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
