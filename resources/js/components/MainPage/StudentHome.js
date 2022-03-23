import React, { useState } from "react";

import logo from "../HomePage/2560px-Adidas_Logo.svg.png";
import profile from "./profile icon.png";
import notification from "./notif bell.png";
import settings from "./settings.png";
import home from "./home.png";
import schedule from "./schedule.png";
import camera from "./camera.png";
import rules from "./exam rules.png";
import remaining from "./remaining.png";
import danger from "./alertupcoming.png";
import check from "./check mark.png";
import App from "../Calendar/App";
import calenderstyle from "../Calendar/calenderstyle.css";

const StudentHome = () => {
    const [homeClicked, setHomeClicked] = useState(false);
    const [scheduleClicked, setScheduleClicked] = useState(false);
    const [adjustClicked, setAdjustClicked] = useState(false);
    const [examClicked, setExamClicked] = useState(false);
    const homeClassName = `d-flex align-items-center ps-3 my-button ${
        homeClicked ? "clickedbuttom" : ""
    }`;
    const scheduleClassName = `d-flex align-items-center ps-3 my-button ${
        scheduleClicked ? "clickedbuttom" : ""
    }`;
    const adjustClassName = `d-flex align-items-center ps-3 my-button ${
        adjustClicked ? "clickedbuttom" : ""
    }`;
    const examClassName = `d-flex align-items-center ps-3 my-button ${
        examClicked ? "clickedbuttom" : ""
    }`;
    return (
        <>
            <div className="container-fluid vh-100 ">
                {/* navbar section */}
                <div className="row bg-primary " style={{ height: "10%" }}>
                    <div
                        className="col-3  d-flex align-items-center h-100 "
                        style={{ backgroundColor: "#3dbfb6" }}
                    >
                        <img src={logo} alt="" className="h-75 w-25 m-5" />
                    </div>
                    <div
                        className="col d-flex align-items-center flex-row-reverse  h-100"
                        style={{ backgroundColor: "#6bfff5" }}
                    >
                        <img src={settings} className="px-2 h-50  " alt="" />
                        <img src={notification} className="px-2 h-50 " alt="" />
                        <span className="px-2 fw-bolder fs-2">name</span>
                        <img src={profile} alt="" className="h-75  " />
                    </div>
                </div>
                {/* navbar section */}
                <div className="row  " style={{ height: "90%" }}>
                    <div
                        className="col-3  p-0 h-100 "
                        style={{ backgroundColor: "#19736c" }}
                    >
                        <div className="row " style={{ height: "30%" }}>
                            <div className="col h-100  d-flex align-items-center">
                                <img
                                    src={profile}
                                    alt=""
                                    className=" bg-light h-75 w-100  rounded-circle m-3 p-3"
                                />
                            </div>
                            <div
                                className="col   "
                                style={{ marginTop: "15%" }}
                            >
                                <div className="fw-bolder  name-size text-light">
                                    Mahmoud
                                </div>
                                <div className="d-flex align-items-center  ">
                                    <div
                                        className=" "
                                        style={{
                                            height: "25px",
                                            width: "25px",
                                            backgroundColor: "#59eb00",
                                            borderRadius: "50%",
                                            display: "inline-block",
                                        }}
                                    ></div>
                                    <span className="text-light fw-bolder ps-3">
                                        online
                                    </span>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={() => {
                                setHomeClicked(true);
                                setScheduleClicked(false);
                                setAdjustClicked(false);
                                setExamClicked(false);
                            }}
                            className={homeClassName}
                            style={{
                                height: "10%",
                                width: "100%",
                                borderLeft: "0",
                                borderRight: "0",
                                borderBottom: "0",
                                borderColor: "#6bfff5",
                                background: "#19736c",
                            }}
                        >
                            <img src={home} alt="" className="h-75 " />
                            <span className="fw-bolder  nav-bar-text-size text-light mt-3 ms-2">
                                Home
                            </span>
                        </button>
                        <button
                            onClick={() => {
                                setHomeClicked(false);
                                setScheduleClicked(true);
                                setAdjustClicked(false);
                                setExamClicked(false);
                            }}
                            className={scheduleClassName}
                            style={{
                                height: "10%",
                                width: "100%",
                                border: "0",
                                background: "#19736c",
                            }}
                        >
                            <img src={schedule} alt="" className="h-75 " />
                            <span className="fw-bolder  nav-bar-text-size text-light mt-3 ms-2">
                                Schedule
                            </span>
                        </button>
                        <button
                            onClick={() => {
                                setHomeClicked(false);
                                setScheduleClicked(false);
                                setAdjustClicked(true);
                                setExamClicked(false);
                            }}
                            className={adjustClassName}
                            style={{
                                height: "10%",
                                width: "100%",
                                border: "0",
                                background: "#19736c",
                            }}
                        >
                            <img src={camera} alt="" className="h-75" />
                            <span className="fw-bolder  nav-bar-text-size text-light mt-3 ms-2">
                                Adjust Camera
                            </span>
                        </button>
                        <button
                            onClick={() => {
                                setHomeClicked(false);
                                setScheduleClicked(false);
                                setAdjustClicked(false);
                                setExamClicked(true);
                            }}
                            className={examClassName}
                            style={{
                                height: "10%",
                                width: "100%",
                                border: "0",
                                background: "#19736c",
                            }}
                        >
                            <img src={rules} alt="" className="h-75 " />
                            <span className="fw-bolder  nav-bar-text-size text-light mt-3 ms-2">
                                Exam Rules
                            </span>
                        </button>
                    </div>
                    {!scheduleClicked && !adjustClicked && !examClicked && (
                        <div className="col m-5 ">
                            <div
                                style={{
                                    width: "100%",
                                    backgroundColor: "green",
                                    borderRadius: "5%",
                                }}
                            >
                                <div className="text-light fw-bolder Exams-font-size  p-3">
                                    Remaining Exams
                                </div>
                                <div className="row ">
                                    <div
                                        className="col d-flex align-items-center justify-content-center h-100 text-light fw-bolder  "
                                        style={{ fontSize: "60px" }}
                                    >
                                        6
                                    </div>
                                    <div className="col">
                                        <img
                                            src={remaining}
                                            alt=""
                                            className=" "
                                            style={{
                                                height: "80%",
                                                width: "70%",
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {!scheduleClicked && !adjustClicked && !examClicked && (
                        <div className="col m-5 ">
                            <div
                                style={{
                                    width: "100%",
                                    backgroundColor: "red",
                                    borderRadius: "5%",
                                }}
                            >
                                <div className="text-light fw-bolder  Exams-font-size p-3">
                                    Upcoming Exam
                                </div>
                                <div className="row">
                                    <div
                                        className="col d-flex align-items-center justify-content-center h-100 text-light fw-bolder  "
                                        style={{ fontSize: "60px" }}
                                    >
                                        6
                                    </div>
                                    <div className="col p-2">
                                        <img
                                            src={danger}
                                            alt=""
                                            className=" "
                                            style={{
                                                height: "80%",
                                                width: "60%",
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {!scheduleClicked && !adjustClicked && !examClicked && (
                        <div className="col m-5 ">
                            <div
                                style={{
                                    width: "100%",
                                    backgroundColor: "#FFA701",
                                    borderRadius: "5%",
                                }}
                            >
                                <div className="text-light fw-bolder  Exams-font-size p-3">
                                    Completed Exam
                                </div>
                                <div className="row">
                                    <div
                                        className="col d-flex align-items-center justify-content-center h-100 text-light fw-bolder  "
                                        style={{ fontSize: "60px" }}
                                    >
                                        6
                                    </div>
                                    <div className="col p-2">
                                        <img
                                            src={check}
                                            alt=""
                                            className=" "
                                            style={{
                                                height: "80%",
                                                width: "60%",
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {!homeClicked &&
                        scheduleClicked &&
                        !adjustClicked &&
                        !examClicked && (
                            <div className="col" style={{ marginLeft: "50px" }}>
                                <App />
                            </div>
                        )}
                    {!homeClicked &&
                        !scheduleClicked &&
                        adjustClicked &&
                        !examClicked && <h1 className="col m-5 ">SHARMOT</h1>}
                    {!homeClicked &&
                        !scheduleClicked &&
                        !adjustClicked &&
                        examClicked && <h1 className="col m-5 ">METNAK</h1>}

                    {/* <div className="col m-5 ">
            <div
              style={{
                height: "30%",
                width: "100%",
                backgroundColor: "#FFA701",
                borderRadius: "5%",
              }}
            >
              <div className="text-light fw-bolder  fs-2 p-3">
                Completed Exams
              </div>
              <div className="row">
                <div
                  className="col d-flex align-items-center justify-content-center h-100 text-light fw-bolder  "
                  style={{ fontSize: "60px" }}
                >
                  6
                </div>
                <div className="col">
                  <img
                    src={check}
                    alt=""
                    className=""
                    style={{ height: "100%", width: "60%" }}
                  />
                </div>
              </div>
            </div>
          </div> */}
                </div>
            </div>
        </>
    );
};

export default StudentHome;
