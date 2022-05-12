<<<<<<< HEAD
import axios from "axios";
import { isArray, isObject } from "lodash";
import React, { useEffect, useState } from "react";
=======
import { isArray } from "lodash";
import React, { useState } from "react";
>>>>>>> 618943411c86dc20ca1fd532a4d989ef1e46dfa7
import Select from "react-select";

const CreateExamPage = (professor) => {
    const [subject, setSubject] = useState();
    const [duration, setDuration] = useState();
    const [questionType, setQuestionType] = useState();
    const [mcqAmount, setMCQAmount] = useState();
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [numberOfModels, setNumberOfModels] = useState();
    const [easyNumberQuestions, setEasyNumberQuestions] = useState();
    const [mediumNumberQuestions, setMediumNumberQuestions] = useState();
    const [hardNumberQuestions, setHardNumberQuestions] = useState();

    const [subjectError, setSubjectError] = useState("");
    const [durationError, setDurationError] = useState("");
    const [questionTypeError, setQuestionTypeError] = useState("");
    const [mcqAmountError, setMCQAmountError] = useState("");
    const [dateError, setDateError] = useState("");
    const [timeError, setTimeError] = useState("");
    const [numberOfModelsError, setNumberOfModelsError] = useState("");
    const [getarray, setGetArray] = useState([]);
    const [easyNumberQuestions, setEasyNumberQuestions] = useState();
    const [mediumNumberQuestions, setMediumNumberQuestions] = useState();
    const [hardNumberQuestions, setHardNumberQuestions] = useState();
    const [subjectdetails, setSubjectDetails] = useState([null]);
    const [arrayChapters, setArrayChapters] = useState([]);
    console.log(professor.professor.id);
    useEffect(() => {
        axios
            .get(`/api/professors/${professor.professor.id}/subjects`)
            .then((response) => {
                setGetArray(response.data);
            });
    }, []);
    useEffect(() => {
        if (subject != null) {
            console.log(subjectdetails.set_of_criteria.length);
            setArrayChapters(Array(subjectdetails.set_of_criteria.length));
        }
    }, [subjectdetails]);

<<<<<<< HEAD
    const selectExamType = ["...", "MCQ", "Text Question"];
    const MCQAmount = ["...", 2, 3, 4, 5, 6];
    const [togleMCQAmount, setTogleMCQAmount] = useState(false);

    //const getarray = ["Math", "Graph", "Physics1", "Physics2", "Graph2"];
=======
    const getarray = ["Math", "Graph", "Physics1", "Physics2", "Graph2"];
>>>>>>> 618943411c86dc20ca1fd532a4d989ef1e46dfa7
    let wantedarray = [];
    const addvalue = (getarray) => {
        wantedarray = [];
        for (let index = 0; index < getarray.length; index++) {
            wantedarray.push({
                value: getarray[index].title,
                label: getarray[index].title,
            });
        }
        return wantedarray;
    };
    const options = addvalue(getarray);
    const handleChangeSelectSubject = (e) => {
        console.log(e.target.value);
    };
    const handleExamDuration = (e) => {
        console.log(e.target.value);
    };
    const handleChangeSelectExamType = (e) => {
        if (e.target.value === "MCQ") {
            setTogleMCQAmount(true);
        } else {
            setTogleMCQAmount(false);
        }
        console.log(e.target.value);
    };
    const handleChangeMCQAmount = (e) => {
        console.log(e.target.value);
    };
    const handleExamDate = (e) => {
        console.log(e.target.value.split("/"));
    };
    const handleExamTime = (e) => {
        console.log(e.target.value);
    };
    const handleEasyNumberQuestions = (e) => {
        setEasyNumberQuestions(e.target.value);
<<<<<<< HEAD

        console.log(e.target.value);
    };
    const handleMediumNumberQuestions = (e) => {
        setMediumNumberQuestions(e.target.value);

        console.log(e.target.value);
    };
    const handleHardNumberQuestions = (e) => {
        setHardNumberQuestions(e.target.value);

        console.log(e.target.value);
=======
    };
    const handleMediumNumberQuestions = (e) => {
        setMediumNumberQuestions(e.target.value);
    };
    const handleHardNumberQuestions = (e) => {
        setHardNumberQuestions(e.target.value);
>>>>>>> 618943411c86dc20ca1fd532a4d989ef1e46dfa7
    };
    const handleNumberOfModels = (e) => {
        console.log(e.target.value);
    };

    const handleChapter = (e, index) => {
        let temp = arrayChapters;
        temp[index] = e.target.value;
        setArrayChapters(temp);
        // console.log(isArray(arrayChapters));
    };

    //console.log(subjectdetails.id);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(
            subject,
            duration,
            questionType,
            mcqAmount,
            date,
            time,
            numberOfModels
        );
        if (
            subject &&
            duration &&
            (questionType === "written" ||
                (questionType === "mcq" && mcqAmount)) &&
            date &&
            time &&
            numberOfModels
        ) {
            for (var i = 0; i < numberOfModels; i++) {
                axios.post("/api/exam", request1);
            }
            axios.patch(`/api/subjects/${subjectdetails.id}`, request2);
            /////////////////////////////////////////////
            // document.getElementById("nameForm").submit();
            ///////////////////////////////////
        } else {
            if (!subject) {
                setSubjectError("error");
            }
            if (!duration) {
                setDurationError("error");
            }
            if (!questionType) {
                setQuestionTypeError("error");
            }
            if (!mcqAmount) {
                setMCQAmountError("error");
            }
            if (!date) {
                setDateError("error");
            }
            if (!time) {
                setTimeError("error");
            }
            if (!numberOfModels) {
                setNumberOfModelsError("error");
            }
        }
        /////////////////////////
        //////////////////////
    };
    ///////////////////////////// DATA WILL BE PASSED TO API
    const request1 = {
        subject: subject,
        duration: duration,
        examtype: questionType,
        mcqamount: mcqAmount,
        easynumberquestions: easyNumberQuestions,
        mediumnumberquestions: mediumNumberQuestions,
        hardnumberquestions: hardNumberQuestions,
        chaptersquestions: arrayChapters,
    };
    const request2 = {
        date: date,
        time: time,
    };
    ///////////////////////
    ////////////////////////
    //////////////////

    /* 6 deh ma3naha kam chapter 3andy */
    // console.log(arrayChapters);

<<<<<<< HEAD
=======
    const [arrayChapters, setArrayChapters] = useState(Array(3));
    console.log(isArray(arrayChapters));
    console.log(arrayChapters);
    const handleChapter = (e, index) => {
        let temp = arrayChapters;
        temp[index] = e.target.value;
        setArrayChapters(temp);
        console.log(arrayChapters);
    };
>>>>>>> 618943411c86dc20ca1fd532a4d989ef1e46dfa7
    return (
        <>
            <div className="m-2">
                <h1>Create Exam</h1>
            </div>
            <div className="me-5 ms-5 mt-5">
                <form onSubmit={handleSubmit} id="nameForm" action="/login">
                    {/*First Form-Slect */}
                    <div className="ms-5">
                        <div className="fs-5 fw-bold mb-2">Select Subject</div>
                        <Select
                            className={subjectError}
                            options={options}
                            placeholder={"eg:Math"}
                            value={options.find((obj) => obj.value === subject)}
                            onChange={(e) => {
                                setSubject(e.value), setSubjectError("");
                                axios
                                    .post("/api/subjects", e)
                                    .then((response) => {
                                        setSubjectDetails(response.data);
                                    });
                            }}
                        />
                        {subjectError && (
                            <div className="emptyfield">must enter feiled</div>
                        )}
                    </div>
                    {/*End First Form-Slect */}
                    <div className="ms-5 m-2">
                        <div className="fs-5 fw-bold mb-2">
                            Enter Exam Duration
                        </div>
                        <div className="form-group mt-2">
                            <input
                                className={`form-control ${durationError}`}
                                type="text"
                                placeholder="ex hh:mm:ss"
                                aria-label="default input example"
                                style={{ width: "101%" }}
                                onChange={(e) => {
                                    setDuration(e.target.value),
                                        setDurationError(""),
                                        console.log(duration);
                                }}
                            />
                            {durationError && (
                                <div className="emptyfield">
                                    must enter feiled
                                </div>
                            )}
                        </div>
                    </div>
                    {/*End Form-Slect */}
                    {/*First Form-Slect */}
                    <div className="ms-5">
                        <div className="fs-5 fw-bold mb-2">
                            Select Exam Type
                        </div>
                        <Select
                            className={questionTypeError}
                            options={[
                                { value: "mcq", label: "MCQ" },
                                { value: "written", label: "Written" },
                            ]}
                            value={options.find(
                                (obj) => obj.value === questionType
                            )}
                            onChange={(e) => {
                                setQuestionType(e.value),
                                    setQuestionTypeError(""),
                                    console.log(questionType);
                            }}
                            placeholder={"eg:MCQ"}
                        />
                        {questionTypeError && (
                            <div className="emptyfield">must enter feiled</div>
                        )}
                    </div>
                    {/*End First Form-Slect */}
                    {questionType === "mcq" && (
                        <>
                            {/*End First Form-Slect */}
                            <div className="ms-5">
                                <div className="fs-5 fw-bold mb-2">
                                    Enter MCQ Amount
                                </div>
                                <Select
                                    className={mcqAmountError}
                                    options={[
                                        { value: 2, label: "2" },
                                        { value: 3, label: "3" },
                                        { value: 4, label: "4" },
                                        { value: 5, label: "5" },
                                        { value: 6, label: "6" },
                                    ]}
                                    value={options.find(
                                        (obj) => obj.value === mcqAmount
                                    )}
                                    onChange={(e) => {
                                        setMCQAmount(e.value),
                                            setMCQAmountError("");
                                    }}
                                    placeholder={"eg:2"}
                                    menuPlacement="auto"
                                />
                                {mcqAmountError && (
                                    <div className="emptyfield">
                                        must enter feiled
                                    </div>
                                )}
                            </div>
                            {/*End Form-Slect */}
                        </>
                    )}
                    <div className="ms-5">
                        <div className="fs-5 fw-bold mb-2">
                            Enter Exam Start date and time
                        </div>
                        <div className="form-group mt-2">
                            <input
                                className={`form-control d-inline ${dateError}`}
                                type="text"
                                placeholder="yyyy-mm-dd"
                                aria-label="default input example"
                                style={{ width: "10%" }}
                                onChange={(e) => {
                                    setDate(e.target.value), setDateError("");
                                }}
                            />

                            <input
                                className={`form-control d-inline ms-2 ${timeError}`}
                                type="text"
                                placeholder="ex: hh:mm:ss"
                                aria-label="default input example"
                                style={{ width: "10%" }}
                                onChange={(e) => {
                                    setTime(e.target.value), setTimeError("");
                                }}
                            />
                            {(dateError || timeError) && (
                                <div className="emptyfield">
                                    must enter empty feiled
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="ms-5">
                        <div className="fs-5 fw-bold mb-2">
                            Enter amount of questions for each difficulty
                        </div>
                        <div className="form-group mt-2">
                            <div className="float-start mt-1 me-3">
                                <h5>Easy</h5>
                            </div>
                            <input
                                className="form-control float-start"
                                type="text"
                                placeholder="Enter Text Here"
                                aria-label="default input example"
                                style={{ width: "10%" }}
                                onChange={(e) => handleEasyNumberQuestions(e)}
                            />
                            <div className="float-start mt-1 mx-3">
                                <h5>Medium</h5>
                            </div>
                            <input
                                className="form-control float-start mx-2"
                                type="text"
                                placeholder="Enter Text Here"
                                aria-label="default input example"
                                style={{ width: "10%" }}
                                onChange={(e) => handleMediumNumberQuestions(e)}
                            />
                            <div className="float-start mt-1 mx-3">
                                <h5>Hard</h5>
                            </div>
                            <input
                                className="form-control "
                                type="text"
                                placeholder="Enter Text Here"
                                aria-label="default input example"
                                style={{ width: "10%" }}
                                onChange={(e) => handleHardNumberQuestions(e)}
                            />
                        </div>
                    </div>
                    {subject && (
                        <div className="ms-5">
                            <div className="fs-5 fw-bold mb-2">
                                Enter amount of questions for each chapter
                            </div>
                            <div className="row">
                                {Array.from(
                                    Array(arrayChapters.length),
                                    (e, i) => {
                                        return (
                                            <div key={i} className="col-4">
                                                <div className="d-inline me-5 fs-4 fw-bold">
                                                    Chapter{" "}
                                                    {
                                                        subjectdetails
                                                            .set_of_criteria[i]
                                                    }
                                                </div>
                                                <input
                                                    className="form-control d-inline mx-2"
                                                    type="text"
                                                    placeholder="Enter Text Here"
                                                    aria-label="default input example"
                                                    style={{ width: "30%" }}
                                                    onChange={(e) =>
                                                        handleChapter(e, i)
                                                    }
                                                />
                                            </div>
                                        );
                                    }
                                )}
                            </div>
                        </div>
                    )}
                    <div className="ms-5">
                        <div className="fs-5 fw-bold mb-2">
                            Enter Number of different models
                        </div>
                        <input
                            className={`form-control  ${numberOfModelsError}`}
                            type="text"
                            placeholder="Enter Text Here"
                            aria-label="default input example"
                            style={{ width: "95.5%" }}
                            onChange={(e) => {
                                setNumberOfModels(e.target.value),
                                    setNumberOfModelsError("");
                            }}
                        />
                        {numberOfModelsError && (
                            <div className="emptyfield">must enter feiled</div>
                        )}
                    </div>
                    <div
                        className="me-5 "
                        style={{
                            display: "flex",
                            justifyContent: "flex-end",
                        }}
                    >
                        <button
                            type="submit"
                            onClick={(e) => {
                                console.log("subject");
                            }}
                            className="btn  px-5 pt-1 resizeLoginSubmitButton mt-3 mb-2"
                            style={{
                                borderRadius: "25px",
                                fontSize: "25px",
                                backgroundColor: "#3dbfb6",
                                color: "white",
                            }}
                        >
                            Next
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default CreateExamPage;
