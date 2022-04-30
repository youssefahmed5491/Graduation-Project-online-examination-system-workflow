import React, { useState } from "react";

const CreateExamPage = () => {
    const selectSubjectOptions = [
        "...",
        "Math",
        "Graph",
        "Physics1",
        "Physics2",
        "Graph2",
    ];
    const selectExamType = ["...", "MCQ", "Text Question"];
    const MCQAmount = ["...", 2, 3, 4, 5, 6];
    const [togleMCQAmount, setTogleMCQAmount] = useState(false);

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
        console.log(e.target.value);
    };
    const handleMediumNumberQuestions = (e) => {
        console.log(e.target.value);
    };
    const handleHardNumberQuestions = (e) => {
        console.log(e.target.value);
    };
    const handleNumberOfModels = (e) => {
        console.log(e.target.value);
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
            <div className="m-5">
                {/*First Form-Slect */}
                <div className="ms-5">
                    <div className="fs-5 fw-bold mb-2">Select Subject</div>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        style={{ width: "95%" }}
                        onChange={(e) => handleChangeSelectSubject(e)}
                    >
                        {selectSubjectOptions.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
                {/*End First Form-Slect */}
                <div className="ms-5 m-2">
                    <div className="fs-5 fw-bold mb-2">Enter Exam Duration</div>
                    <div className="form-group mt-2">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Enter Text Here"
                            aria-label="default input example"
                            style={{ width: "95.5%" }}
                            onChange={(e) => handleExamDuration(e)}
                        />
                    </div>
                </div>
                {/*End Form-Slect */}
                {/*First Form-Slect */}
                <div className="ms-5">
                    <div className="fs-5 fw-bold mb-2">Select Exam Type</div>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        style={{ width: "95%" }}
                        onChange={(e) => handleChangeSelectExamType(e)}
                    >
                        {selectExamType.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
                {/*End First Form-Slect */}
                {togleMCQAmount && (
                    <>
                        {/*End First Form-Slect */}
                        <div className="ms-5">
                            <div className="fs-5 fw-bold mb-2">
                                Enter MCQ Amount
                            </div>
                            <select
                                className="form-select"
                                aria-label="Default select example"
                                style={{ width: "95%" }}
                                onChange={(e) => handleChangeMCQAmount(e)}
                            >
                                {MCQAmount.map((option, index) => (
                                    <option key={index} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
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
                            className="form-control d-inline "
                            type="text"
                            placeholder="dd/mm/yyyy"
                            aria-label="default input example"
                            style={{ width: "10%" }}
                            onChange={(e) => handleExamDate(e)}
                        />
                        <input
                            className="form-control d-inline ms-2"
                            type="text"
                            placeholder="ex: 23:59"
                            aria-label="default input example"
                            style={{ width: "10%" }}
                            onChange={(e) => handleExamTime(e)}
                        />
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
                                        onChange={(e) => handleChapter(e, i)}
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
                        className="form-control "
                        type="text"
                        placeholder="Enter Text Here"
                        aria-label="default input example"
                        style={{ width: "95.5%" }}
                        onChange={(e) => handleNumberOfModels(e)}
                    />
                </div>
            </div>
        </>
    );
};

export default CreateExamPage;
