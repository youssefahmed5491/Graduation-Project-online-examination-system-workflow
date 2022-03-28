import React, { useState } from "react";

const AddQuestion = (divheight) => {
    const [selectSubjectOptions, setSelectSubjectOptions] = useState([
        "Math",
        "Graph",
        "Physics1",
        "Physics2",
        "Graph2",
    ]);
    const [selectChapter, setSelectChapter] = useState([5, 6, 7, 8, 9]);
    const [selectDifficulty, setSelectDifficulty] = useState([
        "Easy",
        "Medium",
        "Hard",
    ]);
    const [selectDuration, setSelectDuration] = useState([5, 6, 7, 8, 9]);
    const [selectQuestionType, setSelectQuestionType] = useState([
        "...",
        "Multiple Choice Question",
        "Text Question",
    ]);
    const [selectNumberOfChoices, setSelectNumberOfChoices] = useState([
        "...",
        2,
        3,
        4,
        5,
        6,
    ]);
    const [option0, setOption0] = useState("");
    const [option1, setOption1] = useState("");
    const [option2, setOption2] = useState("");
    const [option3, setOption3] = useState("");
    const [option4, setOption4] = useState("");
    const [option5, setOption5] = useState("");
    const [question, setQuestion] = useState("");
    const [questionanswer, setQuestionAnswer] = useState("");
    const handleQuestion = (e) => {
        setQuestion(e.target.value);
    };
    const handleQuestionAnswer = (e) => {
        setQuestionAnswer(e.target.value);
    };

    const handleoption = (e, index) => {
        //2e3mel switch
        switch (index) {
            case 0:
                setOption0(e.target.value);
                break;
            case 1:
                setOption1(e.target.value);
                break;
            case 2:
                setOption2(e.target.value);
                break;
            case 3:
                setOption3(e.target.value);
                break;
            case 4:
                setOption4(e.target.value);
                break;
            case 5:
                setOption5(e.target.value);
                break;
        }
    };

    const [radio, setRadio] = useState("");
    console.log(radio);
    const [actualNumberOfChoices, setActualNumberOfChoices] = useState(0);

    const [choice, setChoice] = useState(false);
    const [choice2, setChoice2] = useState(false);
    const handleChange = (e) => {
        console.log(e.target.value);
    };
    const handleChangeChoice = (e) => {
        if (e.target.value === "...") {
            setChoice(false);
            setChoice2(false);
        }
        if (e.target.value === "Multiple Choice Question") {
            setActualNumberOfChoices(0);
            setChoice(true);
            setChoice2(false);
            console.log(choice);
        }
        if (e.target.value === "Text Question") {
            setChoice(false);
            setChoice2(true);
            console.log(choice);
        }
    };
    const handleNumberOfChoices = (e) => {
        if (e.target.value != "...") {
            setActualNumberOfChoices(e.target.value);
        }
        if (e.target.value === "...") {
            setActualNumberOfChoices(0);
        }
        console.log(actualNumberOfChoices);
    };
    const DivHeight = divheight.divheight * (107 / 100);
    console.log("div", DivHeight);
    return (
        <>
            <div
                className="col"
                style={{
                    backgroundColor: "#ebebeb",
                    overflowY: "auto",
                    height: `${DivHeight}px`,
                }}
            >
                <div className="fs-1 fw-bold m-2">Add Question</div>
                {/*First Form-Slect */}
                <div className="ms-5">
                    <div className="fs-5 fw-bold mb-2">Select Subject</div>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        style={{ width: "95%" }}
                        onChange={(e) => handleChange(e)}
                    >
                        {selectSubjectOptions.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
                {/*End First Form-Slect */}
                {/* Form-Slect */}
                <div className="ms-5 m-2">
                    <div className="fs-5 fw-bold mb-2">Select Chapter</div>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        style={{ width: "95%" }}
                        onChange={(e) => handleChange(e)}
                    >
                        {selectSubjectOptions.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
                {/*End Form-Slect */}
                {/* Form-Slect */}
                <div className="ms-5 m-2">
                    <div className="fs-5 fw-bold mb-2">Select Difficulty</div>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        style={{ width: "95%" }}
                        onChange={(e) => handleChange(e)}
                    >
                        {selectDifficulty.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
                {/*End Form-Slect */}
                {/* Form-Slect */}
                <div className="ms-5 m-2">
                    <div className="fs-5 fw-bold mb-2">Enter Duration</div>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        style={{ width: "95%" }}
                        onChange={(e) => handleChange(e)}
                    >
                        {selectSubjectOptions.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
                {/*End Form-Slect */}
                {/* Form-Slect */}
                <div className="ms-5 m-2">
                    <div className="fs-5 fw-bold mb-2">
                        Select Question Type
                    </div>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        style={{ width: "95%" }}
                        onChange={(e) => handleChangeChoice(e)}
                    >
                        {selectQuestionType.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
                {/*End Form-Slect */}
                {/* Form-Slect */}
                <div className="ms-5 m-2">
                    <div className="fs-5 fw-bold mb-2">Question Text</div>
                    <div className="form-group mt-2">
                        <textarea
                            className="form-control"
                            id="questiontextarea"
                            rows="5"
                            placeholder="Enter Text Here"
                            style={{ width: "95%" }}
                            onChange={(e) => handleQuestion(e)}
                        ></textarea>
                    </div>
                </div>
                {/*End Form-Slect */}
                {/* Multiple Choice Section */}
                {choice && (
                    <div className="ms-5 m-2">
                        <div className="fs-5 fw-bold mb-2">
                            Select Number Of Options
                        </div>
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            style={{ width: "95%" }}
                            onChange={(e) => handleNumberOfChoices(e)}
                        >
                            {selectNumberOfChoices.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                        <div className="row">
                            {Array.from(
                                Array(parseInt(actualNumberOfChoices)),
                                (e, i) => {
                                    return (
                                        <>
                                            <div className="col-6">
                                                <div className="d-inline me-5 fs-4 fw-bold">
                                                    Option {i + 1}
                                                </div>
                                                <div className="form-check form-check-inline mt-5">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="inlineRadioOptions"
                                                        id={i}
                                                        value={i + 1}
                                                        onChange={(e) =>
                                                            setRadio(
                                                                e.target.value
                                                            )
                                                        }
                                                        required
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor={i}
                                                    >
                                                        select as correct option
                                                    </label>
                                                </div>
                                                <div className="form-group mt-2">
                                                    <textarea
                                                        className="form-control"
                                                        id="exampleFormControlTextarea1"
                                                        rows="5"
                                                        placeholder="Enter Text Here"
                                                        onChange={(e) => {
                                                            handleoption(e, i);
                                                        }}
                                                    ></textarea>
                                                </div>
                                            </div>
                                        </>
                                    );
                                }
                            )}
                        </div>
                    </div>
                )}
                {/*End Multiple Choice Section */}
                {/* Text Question */}
                {choice2 && (
                    <div className="ms-5 m-2">
                        <div className="fs-5 fw-bold mb-2">Answer Text</div>
                        <div className="form-group mt-2">
                            <textarea
                                className="form-control"
                                id="questiontextarea"
                                rows="5"
                                placeholder="Enter Text Here"
                                style={{ width: "95%" }}
                                onChange={(e) => handleQuestionAnswer(e)}
                            ></textarea>
                        </div>
                    </div>
                )}
                {/* End Text Question */}
                <div
                    className="me-5 "
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                    }}
                >
                    <button
                        type="submit"
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
            </div>
        </>
    );
};

export default AddQuestion;
