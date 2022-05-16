import React, { Profiler, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import logo from "../HomePage/2560px-Adidas_Logo.svg.png";
import profile from "./profile icon.png";
import notification from "./notif bell.png";
import settings from "./settings.png";
import home from "./home.png";
import schedule from "./schedule.png";
import camera from "./camera.png";
import rules from "./exam rules.png";
import whiteTriangle from "./whiteTriangle.png";
import remaining from "./remaining.png";
import danger from "./alertupcoming.png";
import check from "./check mark.png";
import createexam from "./createexam.png";
import AssignProctorWhite from "./AssignProctorWhite.png";
import App from "../Calendar/App";
import calenderstyle from "../Calendar/calenderstyle.css";
import AddQuestions from "../Questions/AddQuestions";
import ViewQuestions from "../Questions/ViewQuestions";
import ProfilePage from "../ProfilePage/ProfilePage";
import CreateExamPage from "../CreateExamPage/CreateExamPage";
import { auto } from "@popperjs/core";
import AssignProcror from "../AssignProctor/AssignProcror";
import axios from "axios";

const AllUsersHome = () => {
    const { username, radio } = useParams();

    useEffect(() => {
        axios.post("/api/professors", { username }).then((response) => {
            const data = response.data;
            if (data) {
                setProfessor(data);
            }
        });
    }, []);

    let profiletype;
    if (radio === "Doctor") {
        profiletype = "professors";
    } else if (radio === "Student") {
        profiletype = "students";
    } else if (radio === "System Manager") {
        profiletype = "systemmanagers";
    } else if (radio === "proctor") {
        profiletype = "proctors";
    } else if (radio === "Supervisor") {
        profiletype = "supervisors";
    }

    const [profiledata, setProfiledata] = useState([]);
    useEffect(() => {
        axios.post(`/api/${profiletype}`, { username }).then((response) => {
            setProfiledata(response.data);
        });
    }, []);

    console.log(allSubjects);

    const x = 2;
    const y = 3;
    const z = x.toString() + y.toString();
    const [professor, setProfessor] = useState([]);
    const [homeClicked, setHomeClicked] = useState(false);
    const [scheduleClicked, setScheduleClicked] = useState(false);
    const [adjustClicked, setAdjustClicked] = useState(false);
    const [examClicked, setExamClicked] = useState(false);
    const [questionsClicked, setQuestionsClicked] = useState(false);
    const [viewQuestionsClicked, setViewQuestionsClicked] = useState(false);
    const [addQuestionsClicked, setAddQuestionsClicked] = useState(false);
    const [profileClicked, setProfileClicked] = useState(false);
    const [createExamClicked, setCreateExamClicked] = useState(false);
    const [assignProctorClicked, setAssignProctorClicked] = useState(false);
    const [remainingExamsClicked, setRemainingExamsClicked] = useState(false);
    const [allSubjects, setAllSubjects] = useState([]);
    const [finishedSubjects, setFinishedSubjects] = useState([]);
    const [unfinishedSubjects, setUnfinishedSubjects] = useState([]);
    const [completedExamsClicked, setCompletedExamsClicked] = useState(false);
    const [upcomingExamsClicked, setUpcomingExamsClicked] = useState(false);
    const [upcomingExam, setUpcomingExam] = useState([]);

    useEffect(() => {
        axios.get(`/api/date`).then((response) => {
            setUpcomingExam(response.data);
        });
    }, []);
    useEffect(() => {
        if (radio === "Student" && profiledata.id != null) {
            axios
                .get(`/api/students/${profiledata.id}/subjects`)
                .then((response) => {
                    setAllSubjects(response.data);
                });

            axios
                .post(`/api/students/${profiledata.id}/subjects`)
                .then((response) => {
                    setUnfinishedSubjects(response.data[0]);
                    setFinishedSubjects(response.data[1]);
                });
        }
    }, [profiledata.id]);

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
    const questionsClassName = `d-flex align-items-center ps-3 my-button ${
        questionsClicked ? "clickedbuttom" : ""
    }`;
    const VquestionsClassName = `fw-bolder  nav-bar-text-size text-light mt-3 ms-2 
    ${questionsClicked ? "clickedbuttom" : ""} 
    ${viewQuestionsClicked ? "setopacity" : "cancelopacity"}`;
    const AquestionsClassName = `fw-bolder  nav-bar-text-size text-light   ms-2
    ${questionsClicked ? "clickedbuttom" : ""} 
    ${addQuestionsClicked ? "setopacity" : "cancelopacity"}`;
    const createExamClassName = `d-flex align-items-center ps-3 my-button ${
        createExamClicked ? "clickedbuttom" : ""
    }`;
    const assignProctorClassName = `d-flex align-items-center ps-3 my-button ${
        assignProctorClicked ? "clickedbuttom" : ""
    }`;
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    const checkSize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };
    useEffect(() => {
        window.addEventListener("resize", checkSize);

        return () => {
            window.removeEventListener("resize", checkSize);
        };
    }, [height, width]);
    // 16+50=66
    const divwidth = (width - (16 / 100) * width - 630) / 2;
    const divheight = height - (7 / 100) * height - 65;
    // console.log(divwidth, divheight);

    const [playing, setPlaying] = useState(false);
    const startVideo = () => {
        setPlaying(true);
        navigator.getUserMedia(
            {
                video: true,
            },
            (stream) => {
                let video = document.getElementsByClassName("myvideo")[0];
                if (video) {
                    video.srcObject = stream;
                }
            },
            (err) => console.log(err)
        );
    };
    const stopVideo = () => {
        setPlaying(false);
        let video = document.getElementsByClassName("myvideo")[0];
        video.srcObject.getTracks()[0].stop();
    };
    return (
        <>
            <div
                className="container-fluid vh-100 "
                style={{ overflow: "hidden" }}
            >
                {" "}
                {/* navbar section */}{" "}
                <div className="row bg-primary " style={{ height: "7%" }}>
                    <div
                        className="col-2  d-flex align-items-center h-100 "
                        style={{ backgroundColor: "#3dbfb6" }}
                    >
                        <img src={logo} alt="" className="h-75 w-25 m-5" />
                    </div>{" "}
                    <div
                        className="col d-flex align-items-center flex-row-reverse  h-100"
                        style={{ backgroundColor: "#6bfff5" }}
                    >
                        <img src={settings} className="px-2 h-50  " alt="" />
                        <img src={notification} className="px-2 h-50 " alt="" />
                        <button
                            className="h-75"
                            style={{ all: "unset", cursor: "pointer" }}
                            onClick={() => {
                                setHomeClicked(false);
                                setScheduleClicked(false);
                                setAdjustClicked(false);
                                setExamClicked(false);
                                setQuestionsClicked(false);
                                setViewQuestionsClicked(false);
                                setAddQuestionsClicked(false);
                                setProfileClicked(true);
                                setCreateExamClicked(false);
                                setAssignProctorClicked(false);
                                setRemainingExamsClicked(false);
                                setCompletedExamsClicked(false);
                                setUpcomingExamsClicked(false);
                                if (radio === "student") {
                                    stopVideo();
                                }
                            }}
                        >
                            <img src={profile} alt="" className="h-100 " />
                            <span className="px-2 fw-bolder fs-4">
                                {profiledata.username}
                            </span>
                        </button>
                    </div>
                </div>
                {/* navbar section */}
                <div className="row  " style={{ height: "93%" }}>
                    <div
                        className="col-2  p-0 h-100 "
                        style={{ backgroundColor: "#19736c" }}
                    >
                        <div className="row " style={{ height: "10%" }}>
                            <div className="col-3 h-100  d-flex align-items-center">
                                <img
                                    src={profile}
                                    alt=""
                                    className=" bg-light   rounded-circle m-3 p-1"
                                    style={{ height: "55%", width: "65%" }}
                                />{" "}
                            </div>{" "}
                            <div className="col   " style={{ marginTop: "5%" }}>
                                <div className="fw-bolder  name-size text-light">
                                    {profiledata.username}
                                </div>{" "}
                                <div className="d-flex align-items-center  ">
                                    <div
                                        style={{
                                            height: "10px",
                                            width: "10px",
                                            backgroundColor: "#59eb00",
                                            borderRadius: "50%",
                                            display: "inline-block",
                                        }}
                                    ></div>{" "}
                                    <span
                                        className="text-light fw-bolder ps-3"
                                        style={{ fontSize: "13px" }}
                                    >
                                        online{" "}
                                    </span>{" "}
                                </div>{" "}
                            </div>{" "}
                        </div>
                        <button
                            onClick={() => {
                                setHomeClicked(true);
                                setScheduleClicked(false);
                                setAdjustClicked(false);
                                setExamClicked(false);
                                setQuestionsClicked(false);
                                setViewQuestionsClicked(false);
                                setAddQuestionsClicked(false);
                                setProfileClicked(false);
                                setCreateExamClicked(false);
                                setAssignProctorClicked(false);
                                setRemainingExamsClicked(false);
                                setCompletedExamsClicked(false);
                                setUpcomingExamsClicked(false);
                                if (radio === "student") {
                                    stopVideo();
                                }
                            }}
                            className={homeClassName}
                            style={{
                                height: "7%",
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
                                Home{" "}
                            </span>{" "}
                        </button>{" "}
                        <button
                            onClick={() => {
                                setHomeClicked(false);
                                setScheduleClicked(true);
                                setAdjustClicked(false);
                                setExamClicked(false);
                                setQuestionsClicked(false);
                                setViewQuestionsClicked(false);
                                setAddQuestionsClicked(false);
                                setProfileClicked(false);
                                setCreateExamClicked(false);
                                setAssignProctorClicked(false);
                                setRemainingExamsClicked(false);
                                setCompletedExamsClicked(false);
                                setUpcomingExamsClicked(false);
                                if (radio === "student") {
                                    stopVideo();
                                }
                            }}
                            className={scheduleClassName}
                            style={{
                                height: "7%",
                                width: "100%",
                                border: "0",
                                background: "#19736c",
                            }}
                        >
                            <img src={schedule} alt="" className="h-75 " />
                            <span className="fw-bolder  nav-bar-text-size text-light mt-3 ms-2">
                                Schedule{" "}
                            </span>{" "}
                        </button>{" "}
                        {radio === "Student" && (
                            <button
                                onClick={() => {
                                    startVideo();
                                    setHomeClicked(false);
                                    setScheduleClicked(false);
                                    setAdjustClicked(true);
                                    setExamClicked(false);
                                    setProfileClicked(false);
                                    setRemainingExamsClicked(false);
                                    setCompletedExamsClicked(false);
                                    setUpcomingExamsClicked(false);
                                }}
                                className={adjustClassName}
                                style={{
                                    height: "7%",
                                    width: "100%",
                                    border: "0",
                                    background: "#19736c",
                                }}
                            >
                                <img src={camera} alt="" className="h-75" />
                                <span className="fw-bolder  nav-bar-text-size text-light mt-3 ms-2">
                                    Adjust Camera{" "}
                                </span>{" "}
                            </button>
                        )}{" "}
                        {radio === "Student" && (
                            <button
                                onClick={() => {
                                    setHomeClicked(false);
                                    setScheduleClicked(false);
                                    setAdjustClicked(false);
                                    setExamClicked(true);
                                    setProfileClicked(false);
                                    setRemainingExamsClicked(false);
                                    setCompletedExamsClicked(false);
                                    setUpcomingExamsClicked(false);
                                    stopVideo();
                                }}
                                className={examClassName}
                                style={{
                                    height: "7%",
                                    width: "100%",
                                    border: "0",
                                    background: "#19736c",
                                }}
                            >
                                <img src={rules} alt="" className="h-75 " />
                                <span className="fw-bolder  nav-bar-text-size text-light mt-3 ms-2">
                                    Exam Rules{" "}
                                </span>{" "}
                            </button>
                        )}{" "}
                        {radio === "Doctor" && (
                            <button
                                onClick={() => {
                                    setHomeClicked(false);
                                    setScheduleClicked(false);
                                    setQuestionsClicked(true);
                                    setProfileClicked(false);
                                    setCreateExamClicked(false);
                                }}
                                className={questionsClassName}
                                style={{
                                    height: "7%",
                                    width: "100%",
                                    border: "0",
                                    background: "#19736c",
                                }}
                            >
                                <img src={rules} alt="" className="h-75 " />
                                <span className="fw-bolder  nav-bar-text-size text-light mt-3 ms-2">
                                    Questions{" "}
                                </span>{" "}
                                <img
                                    src={whiteTriangle}
                                    alt=""
                                    className="float"
                                    style={{
                                        height: "30%",
                                        transform: "rotate(90deg)",
                                        marginLeft: "25%",
                                        marginTop: "3%",
                                    }}
                                />{" "}
                            </button>
                        )}{" "}
                        {radio === "Doctor" && questionsClicked && (
                            <button
                                onClick={() => {
                                    setHomeClicked(false);
                                    setScheduleClicked(false);
                                    setViewQuestionsClicked(true);
                                    setAddQuestionsClicked(false);
                                    setProfileClicked(false);
                                    setCreateExamClicked(false);
                                }}
                                className={questionsClassName}
                                style={{
                                    height: "7%",
                                    width: "100%",
                                    border: "0",
                                    background: "#19736c",
                                }}
                            >
                                <span className={VquestionsClassName}>
                                    View Questions{" "}
                                </span>{" "}
                            </button>
                        )}{" "}
                        {radio === "Doctor" && questionsClicked && (
                            <button
                                onClick={() => {
                                    setHomeClicked(false);
                                    setScheduleClicked(false);
                                    setViewQuestionsClicked(false);
                                    setAddQuestionsClicked(true);
                                    setProfileClicked(false);
                                    setCreateExamClicked(false);
                                }}
                                className={questionsClassName}
                                style={{
                                    height: "7%",
                                    width: "100%",
                                    border: "0",
                                    background: "#19736c",
                                }}
                            >
                                <span className={AquestionsClassName}>
                                    Add Questions{" "}
                                </span>{" "}
                            </button>
                        )}
                        {radio === "Doctor" && (
                            <button
                                onClick={() => {
                                    setHomeClicked(false);
                                    setScheduleClicked(false);
                                    setQuestionsClicked(false);
                                    setViewQuestionsClicked(false);
                                    setAddQuestionsClicked(false);
                                    setProfileClicked(false);
                                    setCreateExamClicked(true);
                                }}
                                className={createExamClassName}
                                style={{
                                    height: "7%",
                                    width: "100%",
                                    border: "0",
                                    background: "#19736c",
                                }}
                            >
                                <img
                                    src={createexam}
                                    alt=""
                                    className="h-75 "
                                />
                                <span className="fw-bolder  nav-bar-text-size text-light mt-3 ms-2">
                                    Create Exam
                                </span>
                            </button>
                        )}
                        {radio === "Supervisor" && (
                            <button
                                onClick={() => {
                                    setHomeClicked(false);
                                    setScheduleClicked(false);
                                    setProfileClicked(false);
                                    setAssignProctorClicked(true);
                                }}
                                className={assignProctorClassName}
                                style={{
                                    height: "7%",
                                    width: "100%",
                                    border: "0",
                                    background: "#19736c",
                                }}
                            >
                                <img
                                    src={AssignProctorWhite}
                                    alt=""
                                    className="h-75 "
                                />
                                <span className="fw-bolder  nav-bar-text-size text-light mt-3 ms-2">
                                    Assign Proctor
                                </span>
                            </button>
                        )}
                    </div>
                    {!scheduleClicked &&
                        !adjustClicked &&
                        !examClicked &&
                        !viewQuestionsClicked &&
                        !addQuestionsClicked &&
                        !profileClicked &&
                        !createExamClicked &&
                        !assignProctorClicked &&
                        !remainingExamsClicked &&
                        !completedExamsClicked &&
                        !upcomingExamsClicked && (
                            <div
                                className="col p-5 "
                                style={{ background: "#ebebeb" }}
                            >
                                <button
                                    style={{
                                        all: "unset",
                                        width: "100%",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => {
                                        setScheduleClicked(false);
                                        setProfileClicked(false);
                                        setAdjustClicked(false);
                                        setExamClicked(false);
                                        setRemainingExamsClicked(true);
                                        setCompletedExamsClicked(false);
                                        setUpcomingExamsClicked(false);
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "100%",
                                            backgroundColor: "#3eba3e",
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
                                                {unfinishedSubjects.length}
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
                                </button>
                            </div>
                        )}{" "}
                    {!scheduleClicked &&
                        !adjustClicked &&
                        !examClicked &&
                        !viewQuestionsClicked &&
                        !addQuestionsClicked &&
                        !profileClicked &&
                        !createExamClicked &&
                        !assignProctorClicked &&
                        !remainingExamsClicked &&
                        !completedExamsClicked &&
                        !upcomingExamsClicked && (
                            <div
                                className="col p-5 "
                                style={{ background: "#ebebeb" }}
                            >
                                <button
                                    style={{
                                        all: "unset",
                                        width: "100%",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => {
                                        setScheduleClicked(false);
                                        setProfileClicked(false);
                                        setAdjustClicked(false);
                                        setExamClicked(false);
                                        setRemainingExamsClicked(false);
                                        setCompletedExamsClicked(false);
                                        setUpcomingExamsClicked(true);
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "100%",
                                            backgroundColor: "#fe4545",
                                            borderRadius: "5%",
                                        }}
                                    >
                                        <div className="d-flex justify-content-center text-light fw-bolder  Exams-font-size p-3">
                                            Upcoming Exam
                                        </div>

                                        <div className="d-flex justify-content-center">
                                            <img
                                                src={danger}
                                                alt=""
                                                className=" "
                                                style={{
                                                    width: "35%",
                                                    marginBottom: "10%",
                                                }}
                                            />
                                        </div>
                                    </div>
                                </button>
                            </div>
                        )}
                    {!scheduleClicked &&
                        !adjustClicked &&
                        !examClicked &&
                        !viewQuestionsClicked &&
                        !addQuestionsClicked &&
                        !profileClicked &&
                        !createExamClicked &&
                        !assignProctorClicked &&
                        !remainingExamsClicked &&
                        !completedExamsClicked &&
                        !upcomingExamsClicked && (
                            <div
                                className="col p-5 "
                                style={{ background: "#ebebeb" }}
                            >
                                <button
                                    style={{
                                        all: "unset",
                                        width: "100%",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => {
                                        setScheduleClicked(false);
                                        setProfileClicked(false);
                                        setAdjustClicked(false);
                                        setExamClicked(false);
                                        setRemainingExamsClicked(false);
                                        setCompletedExamsClicked(true);
                                        setUpcomingExamsClicked(false);
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "100%",
                                            backgroundColor: "#f0a400",
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
                                                {finishedSubjects.length}
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
                                </button>
                            </div>
                        )}
                    {!homeClicked &&
                        scheduleClicked &&
                        !adjustClicked &&
                        !examClicked &&
                        !viewQuestionsClicked &&
                        !addQuestionsClicked &&
                        !profileClicked &&
                        !createExamClicked &&
                        !assignProctorClicked &&
                        !remainingExamsClicked &&
                        !completedExamsClicked &&
                        !upcomingExamsClicked && (
                            <div
                                className="col"
                                style={{
                                    paddingLeft: `${divwidth}px`,
                                    background: "#ebebeb",
                                }}
                            >
                                <App profiledata={profiledata} radio={radio} />
                            </div>
                        )}
                    {!homeClicked &&
                        !scheduleClicked &&
                        !adjustClicked &&
                        !examClicked &&
                        !viewQuestionsClicked &&
                        !addQuestionsClicked &&
                        profileClicked &&
                        !createExamClicked &&
                        !assignProctorClicked &&
                        !remainingExamsClicked &&
                        !completedExamsClicked &&
                        !upcomingExamsClicked && (
                            <div
                                className="col "
                                style={{
                                    background: "#ebebeb",
                                }}
                            >
                                <ProfilePage username={username} type={radio} />
                            </div>
                        )}
                    {!homeClicked &&
                        !scheduleClicked &&
                        adjustClicked &&
                        !examClicked &&
                        !profileClicked &&
                        !remainingExamsClicked &&
                        !completedExamsClicked &&
                        !upcomingExamsClicked && (
                            <div
                                className="col  "
                                style={{
                                    background: "#ebebeb",
                                    height: "100%",
                                    width: "100%",
                                    padding: "0",
                                }}
                            >
                                <>
                                    <div>
                                        <video
                                            className="myvideo"
                                            height={
                                                height - (7 / 100) * height - 10
                                            }
                                            width={
                                                width - (16 / 100) * width - 15
                                            }
                                            muted
                                            autoPlay
                                        ></video>
                                    </div>
                                </>
                            </div>
                        )}
                    {!homeClicked &&
                        !scheduleClicked &&
                        !adjustClicked &&
                        examClicked &&
                        !profileClicked &&
                        !remainingExamsClicked &&
                        !completedExamsClicked &&
                        !upcomingExamsClicked && (
                            <h1 className="col m-5 ">exam</h1>
                        )}
                    {!scheduleClicked &&
                        !adjustClicked &&
                        !examClicked &&
                        !profileClicked &&
                        remainingExamsClicked &&
                        !completedExamsClicked &&
                        !upcomingExamsClicked && (
                            <div
                                style={{
                                    paddingTop: "5px",
                                    paddingLeft: "1rem",
                                    background: "#ebebeb",
                                    height: "100%",
                                }}
                                className="col  "
                            >
                                <h1>Remaining Exams</h1>
                                <div className="row me-5 ms-5 mt-5">
                                    {Array.from(
                                        Array(unfinishedSubjects.length),
                                        (e, i) => {
                                            return (
                                                <div key={i} className="col-6">
                                                    <div
                                                        style={{
                                                            width: "100%",
                                                            background: "white",
                                                            borderRadius:
                                                                "10px",
                                                            marginBottom:
                                                                "10px",
                                                            paddingTop: "10px",
                                                            paddingBottom:
                                                                "10px",
                                                            paddingLeft: "15px",
                                                        }}
                                                    >
                                                        {
                                                            unfinishedSubjects[
                                                                i
                                                            ].title
                                                        }
                                                        <span
                                                            className="float"
                                                            style={{
                                                                paddingRight:
                                                                    "10px",
                                                            }}
                                                        >
                                                            {
                                                                unfinishedSubjects[
                                                                    i
                                                                ].date
                                                            }
                                                        </span>
                                                    </div>
                                                </div>
                                            );
                                        }
                                    )}
                                </div>
                            </div>
                        )}
                    {!scheduleClicked &&
                        !adjustClicked &&
                        !examClicked &&
                        !profileClicked &&
                        !remainingExamsClicked &&
                        !completedExamsClicked &&
                        upcomingExamsClicked && (
                            <div
                                style={{
                                    paddingTop: "5px",
                                    paddingLeft: "1rem",
                                    background: "#ebebeb",
                                    height: "100%",
                                }}
                                className="col  "
                            >
                                <h1>Upcoming Exam</h1>
                                <div className="row me-5 ms-5 mt-5">
                                    <div
                                        style={{
                                            width: "100%",
                                            background: "white",
                                            borderRadius: "10px",
                                            marginBottom: "10px",
                                            paddingTop: "10px",
                                            paddingBottom: "10px",
                                            paddingLeft: "15px",
                                        }}
                                    >
                                        {upcomingExam.title}
                                        <span
                                            className="float"
                                            style={{
                                                paddingRight: "10px",
                                            }}
                                        >
                                            {upcomingExam.date}
                                        </span>
                                    </div>
                                    <div
                                        className="me-5 "
                                        style={{
                                            display: "flex",
                                            justifyContent: "flex-end",
                                            flexDirection: "column",
                                            alignItems: "flex-end",
                                        }}
                                    >
                                        <Link
                                            to={`/`}
                                            style={{
                                                display: "flex",
                                                justifyContent: "flex-end",
                                                width: "25%",
                                                textDecoration: "none",
                                            }}
                                        >
                                            <button
                                                onClick={(e) => {
                                                    console.log("subject");
                                                }}
                                                className="btn  px-5 pt-1 resizeLoginSubmitButton mt-3 mb-2"
                                                style={{
                                                    borderRadius: "25px",
                                                    fontSize: "20px",
                                                    backgroundColor: "#3dbfb6",
                                                    color: "white",
                                                    width: "100%",
                                                }}
                                            >
                                                Video Call
                                            </button>
                                        </Link>
                                        <Link
                                            to={`/${username}/${upcomingExam.id}`}
                                            style={{
                                                display: "flex",
                                                justifyContent: "flex-end",
                                                width: "25%",
                                                textDecoration: "none",
                                            }}
                                        >
                                            <button
                                                onClick={(e) => {}}
                                                className="btn  px-5 pt-1 resizeLoginSubmitButton mt-3 mb-2"
                                                style={{
                                                    borderRadius: "25px",
                                                    fontSize: "20px",
                                                    backgroundColor: "red",
                                                    color: "white",
                                                    width: "100%",
                                                }}
                                            >
                                                Exam
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    {!scheduleClicked &&
                        !adjustClicked &&
                        !examClicked &&
                        !profileClicked &&
                        !remainingExamsClicked &&
                        completedExamsClicked &&
                        !upcomingExamsClicked && (
                            <div
                                style={{
                                    paddingTop: "5px",
                                    paddingLeft: "1rem",
                                    background: "#ebebeb",
                                    height: "100%",
                                }}
                                className="col  "
                            >
                                <h1>Completed Exams</h1>
                                <div className="row me-5 ms-5 mt-5">
                                    {Array.from(
                                        Array(finishedSubjects.length),
                                        (e, i) => {
                                            return (
                                                <div key={i} className="col-6">
                                                    <div
                                                        className="d-flex justify-content-center"
                                                        style={{
                                                            width: "100%",
                                                            background: "white",
                                                            borderRadius:
                                                                "10px",
                                                            marginBottom:
                                                                "10px",
                                                            paddingTop: "10px",
                                                            paddingBottom:
                                                                "10px",
                                                            paddingLeft: "15px",
                                                        }}
                                                    >
                                                        {
                                                            finishedSubjects[i]
                                                                .title
                                                        }
                                                    </div>
                                                </div>
                                            );
                                        }
                                    )}
                                </div>
                            </div>
                        )}
                    {!homeClicked &&
                        !scheduleClicked &&
                        viewQuestionsClicked &&
                        !addQuestionsClicked &&
                        !profileClicked &&
                        !createExamClicked && (
                            <div
                                className="col"
                                style={{
                                    paddingTop: "5px",
                                    paddingLeft: "1rem",
                                    background: "#ebebeb",
                                    height: "100%",
                                }}
                            >
                                <ViewQuestions
                                    divheight={divheight}
                                    professor={professor}
                                />
                            </div>
                        )}
                    {!homeClicked &&
                        !scheduleClicked &&
                        !viewQuestionsClicked &&
                        addQuestionsClicked &&
                        !profileClicked &&
                        !createExamClicked && (
                            <div
                                className="col"
                                style={{
                                    paddingTop: "5px",
                                    paddingLeft: "1rem",
                                    background: "#ebebeb",
                                    height: "100%",
                                }}
                            >
                                <AddQuestions
                                    divheight={divheight}
                                    professor={professor}
                                />
                            </div>
                        )}
                    {!homeClicked &&
                        !scheduleClicked &&
                        !viewQuestionsClicked &&
                        !addQuestionsClicked &&
                        !profileClicked &&
                        createExamClicked && (
                            <div
                                className="col"
                                style={{
                                    paddingTop: "5px",
                                    paddingLeft: "1rem",
                                    background: "#ebebeb",
                                    height: "100%",
                                    overflow: "auto",
                                }}
                            >
                                <CreateExamPage professor={professor} />
                            </div>
                        )}
                    {!homeClicked &&
                        !scheduleClicked &&
                        !profileClicked &&
                        assignProctorClicked && (
                            <div
                                className="col"
                                style={{
                                    paddingTop: "5px",
                                    paddingLeft: "1rem",
                                    background: "#ebebeb",
                                    height: "100%",
                                    overflow: "auto",
                                }}
                            >
                                <AssignProcror />
                            </div>
                        )}
                </div>
            </div>
        </>
    );
};

export default AllUsersHome;
