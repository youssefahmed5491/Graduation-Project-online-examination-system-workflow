import React, { useState } from "react";
import Select from "react-select";

const CreateExamPage = () => {
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

    const getarray = ["Math", "Graph", "Physics1", "Physics2", "Graph2"];
    let wantedarray = [];
    const addvalue = (getarray) => {
        wantedarray = [];
        for (let index = 0; index < getarray.length; index++) {
            wantedarray.push({
                value: getarray[index],
                label: getarray[index],
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
    };
    const handleMediumNumberQuestions = (e) => {
        setMediumNumberQuestions(e.target.value);
    };
    const handleHardNumberQuestions = (e) => {
        setHardNumberQuestions(e.target.value);
    };
    const handleNumberOfModels = (e) => {
        console.log(e.target.value);
    };
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
            document.getElementById("nameForm").submit();
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
    };

    /* 6 deh ma3naha kam chapter 3andy */

    const [arrayChapters, setArrayChapters] = useState(Array(3));
    console.log(arrayChapters);
    const handleChapter = (e, index) => {
        let temp = arrayChapters;
        temp[index] = e.target.value;
        setArrayChapters(temp);
        console.log(arrayChapters);
    };
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
                                placeholder="Enter Text Here"
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
                                placeholder="dd/mm/yyyy"
                                aria-label="default input example"
                                style={{ width: "10%" }}
                                onChange={(e) => {
                                    setDate(e.target.value), setDateError("");
                                }}
                            />

                            <input
                                className={`form-control d-inline ms-2 ${timeError}`}
                                type="text"
                                placeholder="ex: 23:59"
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
                    <div className="ms-5">
                        <div className="fs-5 fw-bold mb-2">
                            Enter amount of questions for each chapter
                        </div>
                        <div className="row">
                            {Array.from(Array(arrayChapters.length), (e, i) => {
                                return (
                                    <div key={i} className="col-4">
                                        <div className="d-inline me-5 fs-4 fw-bold">
                                            Chapter {i + 1}
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
                            })}
                        </div>
                    </div>
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
