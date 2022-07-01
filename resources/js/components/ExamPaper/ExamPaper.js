import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useTimer } from "react-timer-hook";
import ReactPaginate from "react-paginate";
import logo from "../HomePage/2560px-Adidas_Logo.svg.png";
import clock from "./chronograph-160753_1280.png";
import whiteTriangle from "../MainPage/whiteTriangle.png";
import Timer from "./Timer";

const ExamPaper = () => {
    const { username, unfinishedSubjects } = useParams();

    const request = {
        username: username,
    };
    useEffect(() => {
        axios.post(`/api/students`, request).then((response) => {
            setStudentData(response.data);
            console.log(response.data, "tonyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy");
        });
    }, []);

    const [users, setUsers] = useState({});
    const [studentdata, setStudentData] = useState([]);
    const [check, setCheck] = useState(false);
    const [ind, setInd] = useState(0);
    const [arraylol, setArraylol] = useState([]);
    const [egabat, setEgabat] = useState([]);
    const [answersArray, setAnswersArray] = useState(["a", "b", "c", "d"]);
    const [questionAnswer, setQuestionAnswer] = useState([]);
    const [tryChecks, setTryChecks] = useState([
        false,
        false,
        false,
        false,
        false,
        false,
    ]);
    console.log(username);
    console.log(questionAnswer, "tonyyyyyyyyyyyy answerrrrrrr");
    useEffect(() => {
        if (users.modelquestions != null) {
            setArraylol(Array(displayquestions().length).fill(1));
            setQuestionAnswer(Array(displayquestions().length));
            setEgabat(Array(displayquestions().length));
        }
    }, [users.modelquestions]);

    useEffect(() => {
        axios
            .get(`/api/subjects/${unfinishedSubjects}/exam `)
            .then((response) => {
                setUsers(response.data);
                console.log(
                    response.data,
                    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                );
            });
    }, []);

    useEffect(() => {
        let temp = [...arraylol];
        temp[1] = 2;
        console.log("temp", temp);
        setArraylol(temp);
    }, []);

    const handleNext = () => {
        setCheck(false);

        if (ind > displayquestions().length - 2) {
            console.log("lol");
            setInd(0);
            handleSquares(0);
        } else {
            setInd(ind + 1);
            // let temp = [...arraylol];
            // temp[ind + 1] = 2;
            // setArraylol(temp);
            handleSquares(ind + 1);
        }
    };
    const handlePrevious = () => {
        console.log(ind);
        setCheck(false);
        if (ind === 0) {
            setInd(displayquestions().length - 1);

            handleSquares(displayquestions().length - 1);
        } else {
            setInd(ind - 1);
            // let temp = [...arraylol];
            // temp[ind - 1] = 2;
            // setArraylol(temp);
            handleSquares(ind - 1);
        }
    };
    const handleSquares = (number) => {
        if (arraylol[number] === 3) {
            setInd(number);
            let x = questionAnswer[number];
            let temp3 = [false, false, false, false, false, false];
            console.log("the x we need");
            console.log(x);
            temp3[x - 1] = true;
            console.log("temp3");
            console.log(temp3);
            setTryChecks(temp3);
            console.log("el mafrood yetba3 true");
            console.log(tryChecks[x - 1]);

            console.log(tryChecks);
        } else {
            let temp3 = [false, false, false, false, false, false];

            setTryChecks(temp3);
            console.log("what we need");
            console.log(questionAnswer);
            setCheck(false);
            let temp = [...arraylol];
            temp[number] = 2;
            setArraylol(temp);
            setInd(number);
        }
    };

    //display certain object given a number
    const displayuser = (number) => {
        return users.modelquestions[number];
    };
    const displayquestions = () => {
        return users.modelquestions;
    };
    if (users.modelquestions != null) {
        console.log(displayquestions(), "7madaaaa");
        //  console.log(displayuser(1).mcq_answers.length, "999999999999999999");
    }
    console.log(egabat);
    const handleSubmit = () => {
        axios
            .patch(`/api/students/${studentdata.id}/exams/${users.id}`, egabat)
            .then((response) => {});
    };
    const handleRadio = (e, z) => {
        let temp2 = questionAnswer;
        temp2[ind] = e.target.value;
        setQuestionAnswer(temp2);
        let temp15 = egabat;
        temp15[ind] = z;
        setEgabat(temp15);
        setCheck(true);
        let temp = [...arraylol];
        temp[ind] = 3;
        setArraylol(temp);
        let x = questionAnswer[ind];
        let temp3 = [false, false, false, false, false, false];
        temp3[x - 1] = true;
        setTryChecks(temp3);
        console.log(tryChecks, "888888888888888888888888888888");
    };
    const time = new Date();
    time.setMinutes(time.getMinutes() + 6);
    console.log(arraylol);
    return (
        <div
            className="container-fluid vh-100 vw-100"
            style={{ overflow: "hidden" }}
        >
            {/* navbar section */}
            <div className="row bg-primary " style={{ height: "7%" }}>
                <div
                    className="  d-flex  align-items-center h-100 "
                    style={{ backgroundColor: "#6bfff5" }}
                >
                    <div>
                        <img
                            src={logo}
                            alt=""
                            style={{ width: "5%" }}
                            className="h-50  m-5"
                        />
                        Subject:Math Name:youssef ahmed Id:5491
                    </div>

                    <div className="float">
                        <img src={clock} alt="" className="h-75  m-5" />
                    </div>
                    <div className="float">
                        <Timer expiryTimestamp={time} />
                    </div>
                </div>
            </div>
            {/* navbar section */}
            <div className="row" style={{ height: "93%" }}>
                <div
                    className="col"
                    style={{ backgroundColor: "#EBEBEB", height: "100%" }}
                >
                    <div
                        className="row"
                        style={{
                            height: "90%",
                            display: "flex",
                            flexDirection: "column",
                            overflow: "auto",
                        }}
                    >
                        <div>
                            <div
                                style={{
                                    backgroundColor: "white",
                                    borderStyle: "solid",
                                    borderRadius: "10px",
                                    margin: "10px",
                                    width: "98%",
                                }}
                            >
                                {users.modelquestions != null &&
                                    displayuser(ind).text}
                            </div>
                            <div
                                style={{
                                    backgroundColor: "white",
                                    borderStyle: "solid",
                                    borderRadius: "10px",
                                    margin: "10px",
                                    width: "98%",
                                }}
                            >
                                {users.modelquestions != null &&
                                    Array.from(
                                        Array(
                                            parseInt(
                                                displayuser(ind).mcq_answers
                                                    .length
                                            )
                                        ),
                                        (e, i) => {
                                            return (
                                                <div key={i}>
                                                    <div className="form-check form-check-inline mt-4 mb-4">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            id={i}
                                                            name="inlineRadioOptions"
                                                            value={i + 1}
                                                            checked={
                                                                tryChecks[i]
                                                            }
                                                            onChange={(e) =>
                                                                handleRadio(
                                                                    e,
                                                                    displayuser(
                                                                        ind
                                                                    )
                                                                        .mcq_answers[
                                                                        i
                                                                    ]
                                                                )
                                                            }
                                                            required
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor={i}
                                                        >
                                                            {
                                                                displayuser(ind)
                                                                    .mcq_answers[
                                                                    i
                                                                ]
                                                            }
                                                        </label>
                                                    </div>
                                                </div>
                                            );
                                        }
                                    )}
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ height: "3%" }}>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                position: "absolute",
                                width: "80%",
                                bottom: "7%",
                                right: "20%",
                            }}
                        >
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Ut unde, dolore in
                        </div>
                    </div>
                    <div
                        className="row"
                        style={{ height: "7%", background: "grey" }}
                    >
                        <button
                            onClick={handlePrevious}
                            style={{
                                width: "150px",
                                background: "grey",
                                border: "0",
                                padding: "0",
                            }}
                        >
                            <div>
                                Previous
                                <img
                                    src={whiteTriangle}
                                    alt=""
                                    className="float"
                                    style={{
                                        height: "30px",
                                        transform: "rotate(180deg)",
                                    }}
                                />
                            </div>
                        </button>
                        <button
                            onClick={handleNext}
                            style={{
                                width: "100px",
                                background: "grey",
                                border: "0",
                                padding: "0",
                            }}
                        >
                            <div>
                                <img
                                    src={whiteTriangle}
                                    alt=""
                                    style={{
                                        float: "left",
                                        height: "30px",
                                    }}
                                />
                                Next
                            </div>
                        </button>
                    </div>
                </div>
                <div
                    className="col-3  "
                    style={{ height: "100%", width: "20%" }}
                >
                    <div
                        className="row"
                        style={{
                            backgroundColor: "#EBEBEB",
                            borderStyle: "solid",
                            borderRight: "0px",
                            borderTop: "0px",
                            borderColor: "white",
                            overflow: "auto",
                            height: "50%",
                        }}
                    >
                        <div>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-around",
                                    margin: "10px",
                                }}
                            >
                                Questions
                            </div>

                            {users.modelquestions != null &&
                                displayquestions().map((user, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className=""
                                            style={{
                                                cursor: "pointer",
                                                height: "25px",
                                                width: "25px",
                                                backgroundColor: `${
                                                    arraylol[index] === 1
                                                        ? "grey"
                                                        : arraylol[index] === 2
                                                        ? "red"
                                                        : "green"
                                                }`,
                                                margin: "5px",
                                                display: "flex",
                                                float: "left",
                                                justifyContent: "space-around",
                                                borderRadius: "5px",
                                                color: "white",
                                            }}
                                            onClick={() => handleSquares(index)}
                                        >
                                            {index + 1}
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                    <div
                        className="row h-50"
                        style={{
                            backgroundColor: "#EBEBEB",
                            borderStyle: "solid",
                            borderRight: "0px",
                            borderTop: "0px",
                            borderBottom: "0px",
                            borderColor: "white",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                margin: "20%",
                                width: "60%",
                                padding: "0",
                            }}
                        >
                            <div>
                                <div
                                    style={{
                                        height: "30px",
                                        width: "30px",
                                        backgroundColor: "green",
                                        marginBottom: "10px",
                                        display: "flex",
                                        float: "left",
                                        justifyContent: "space-around",
                                        borderRadius: "5px",
                                        color: "white",
                                        paddingTop: "2px",
                                    }}
                                >
                                    {arraylol.filter((e) => e === 3).length}
                                </div>
                                <span
                                    style={{
                                        paddingLeft: "10px",
                                        paddingTop: "2px",
                                    }}
                                >
                                    Attempted
                                </span>
                            </div>
                            <div>
                                <div
                                    style={{
                                        height: "30px",
                                        width: "30px",
                                        backgroundColor: "grey",
                                        marginBottom: "10px",
                                        display: "flex",
                                        float: "left",
                                        justifyContent: "space-around",
                                        borderRadius: "5px",
                                        color: "white",
                                        paddingTop: "2px",
                                    }}
                                >
                                    {arraylol.filter((e) => e === 1).length}
                                </div>
                                <span
                                    style={{
                                        paddingLeft: "10px",
                                        paddingTop: "2px",
                                    }}
                                >
                                    Not Attempted
                                </span>
                            </div>
                            <div>
                                <div
                                    style={{
                                        height: "30px",
                                        width: "30px",
                                        backgroundColor: "red",
                                        marginBottom: "10px",
                                        display: "flex",
                                        float: "left",
                                        justifyContent: "space-around",
                                        borderRadius: "5px",
                                        color: "white",
                                        paddingTop: "2px",
                                    }}
                                >
                                    {arraylol.filter((e) => e === 2).length}
                                </div>
                                <span
                                    style={{
                                        paddingLeft: "10px",
                                        paddingTop: "2px",
                                    }}
                                >
                                    Left Empty
                                </span>
                            </div>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "flex-end",
                                marginBottom: "5px",
                            }}
                        >
                            <Link to={`/${username}`}>
                                <button
                                    onClick={handleSubmit}
                                    style={{
                                        width: "80%",
                                        height: "50%",
                                        marginLeft: "10%",
                                        fontSize: "140%",
                                        background: "blue",
                                        borderRadius: "10px",
                                        paddingBottom: "10px",
                                    }}
                                >
                                    Submit Exam
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExamPaper;
