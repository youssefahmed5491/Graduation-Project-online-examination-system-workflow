import React, { useEffect, useState } from "react";
import Select from "react-select";

const EditQuestions = ({ selectedRow, divheight }) => {
    const {
        id,
        Questions,
        Answer,
        Subject,
        Difficulty,
        Duration,
        Status,
        choices,
        QuestionType,
        Chapter,
        QuestionTextAnswer,
    } = selectedRow;
    const selectSubjectOptions = [
        "Math",
        "Graph",
        "Physics1",
        "Physics2",
        "Graph2",
    ];
    const selectDifficulty = ["Easy", "Medium", "Hard"];
    const selectDuration = ["1 min", "5 min", "10 min"];
    const selectExamType = ["MCQ", "Text Question"];
    const MCQAmount = [2, 3, 4, 5, 6];

    const [choosenSubject, setChoosenSubject] = useState("");
    const [choosenChapter, setChoosenChapter] = useState("");
    const [choosenDifficulty, setChoosenDifficulty] = useState("");
    const [choosenDuration, setChoosenDuration] = useState("");
    const [choosenQuestionType, setChoosenQuestionType] = useState("");
    const [choosenMCQAmount, setChoosenMCQAmount] = useState(0);
    const [choosenQuestionText, setChoosenQuestionText] = useState("");
    const [choosenQuestionTextAnswer, setChoosenQuestionTextAnswer] =
        useState("");

    const [indexOfAnswer, setIndexOfAnswer] = useState(0);
    const [toggleType, setToggleType] = useState(false);
    //console.log(indexOfAnswer);
    // console.log(choosenChapter);
    // console.log(choosenSubject);
    // console.log(choosenMCQAmount);

    console.log(choices);
    useEffect(() => {
        {
            choices.map((choice, i) => {
                if (Answer === choice) {
                    return <div key={i}>{setIndexOfAnswer(i)}</div>;
                }
            });
            setChoosenSubject(Subject);
            setChoosenChapter(Chapter);
            setChoosenDifficulty(Difficulty);
            setChoosenDuration(Duration);
            setChoosenQuestionType(QuestionType);
            if (QuestionType === "MCQ") {
                setToggleType(true);
            }
            setChoosenQuestionText(Questions);
            setChoosenQuestionTextAnswer(QuestionTextAnswer);
            setChoosenMCQAmount(choices.length);
        }
    }, []);
    console.log("hi");
    console.log(choosenQuestionTextAnswer);
    const DivHeight = divheight * (107 / 100);
    console.log("lol", selectedRow);
    console.log("lol", DivHeight);
    return (
        <div
            style={{
                overflowY: "auto",
                height: `${DivHeight}px`,
            }}
        >
            <div className="col">
                <div className="fs-1 fw-bold m-2">Edit Question</div>
            </div>
            <div
                className="ms-5"
                style={{
                    width: "90%",
                }}
            >
                <form id="nameForm" action="/login">
                    <div className="fs-5 fw-bold mb-2">Select Subject</div>

                    <select
                        className="form-select"
                        aria-label="Default select example"
                        style={{ width: "95%" }}
                        onChange={(e) => {
                            setChoosenSubject(e.target.value);
                        }}
                    >
                        {selectSubjectOptions.map((option, index) => (
                            <option
                                key={index}
                                value={option}
                                selected={option === choosenSubject}
                            >
                                {option}
                            </option>
                        ))}
                    </select>
                    <div className="fs-5 fw-bold mb-2">Enter Chapter</div>
                    <textarea
                        id="questiontextarea"
                        rows={1}
                        placeholder="Enter Text Here"
                        defaultValue={choosenChapter}
                        style={{ width: "95%" }}
                        onChange={(e) => {
                            setChoosenChapter(e.target.value);
                        }}
                    ></textarea>
                    <div className="fs-5 fw-bold mb-2">Select Difficulty</div>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        style={{ width: "95%" }}
                        onChange={(e) => {
                            setChoosenDifficulty(e.target.value);
                        }}
                    >
                        {selectDifficulty.map((option, index) => (
                            <option
                                key={index}
                                value={option}
                                selected={option === choosenDifficulty}
                            >
                                {option}
                            </option>
                        ))}
                    </select>
                    <div className="fs-5 fw-bold mb-2">Select Duration</div>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        style={{ width: "95%" }}
                        onChange={(e) => {
                            setChoosenDuration(e.target.value);
                        }}
                    >
                        {selectDuration.map((option, index) => (
                            <option
                                key={index}
                                value={option}
                                selected={option === choosenDuration}
                            >
                                {option}
                            </option>
                        ))}
                    </select>
                    <div className="fs-5 fw-bold mb-2">
                        Select Question Type
                    </div>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        style={{ width: "95%" }}
                        onChange={(e) => {
                            setChoosenQuestionType(e.target.value);
                            if (e.target.value === "MCQ") {
                                setToggleType(true);
                            } else {
                                setToggleType(false);
                            }
                        }}
                    >
                        {selectExamType.map((option, index) => (
                            <option
                                key={index}
                                value={option}
                                selected={option === choosenQuestionType}
                            >
                                {option}
                            </option>
                        ))}
                    </select>
                    <div className="fs-5 fw-bold mb-2">Question Text</div>
                    <textarea
                        id="questiontextarea"
                        rows={5}
                        placeholder="Enter Text Here"
                        defaultValue={choosenQuestionText}
                        style={{ width: "95%" }}
                        onChange={(e) => {
                            setChoosenQuestionText(e.target.value);
                        }}
                    ></textarea>
                    {toggleType && (
                        <>
                            <div className="fs-5 fw-bold mb-2">
                                Select Number Of Options
                            </div>
                            <select
                                className="form-select"
                                aria-label="Default select example"
                                style={{ width: "95%" }}
                                onChange={(e) => {
                                    setChoosenMCQAmount(
                                        parseInt(e.target.value)
                                    );
                                }}
                            >
                                {MCQAmount.map((option, index) => (
                                    <option
                                        key={index}
                                        value={option}
                                        selected={option === choosenMCQAmount}
                                    >
                                        {option}
                                    </option>
                                ))}
                            </select>
                            <div className="row" style={{ width: "97%" }}>
                                {Array.from(Array(choosenMCQAmount), (e, i) => {
                                    return (
                                        <div className="col-6" key={i}>
                                            <div className="d-inline me-5 fs-4 fw-bold">
                                                Option {i + 1}
                                            </div>
                                            <div className="form-check form-check-inline mt-5">
                                                <input
                                                    type="radio"
                                                    name="inlineRadioOptions"
                                                    id={i}
                                                    value={i + 1}
                                                    checked={
                                                        i === indexOfAnswer
                                                    }
                                                    onChange={() =>
                                                        setIndexOfAnswer(i)
                                                    }
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
                                                    id="questiontextarea"
                                                    rows={4}
                                                    placeholder="Enter Text Here"
                                                    defaultValue={choices[i]}
                                                    style={{ width: "95%" }}
                                                    onChange={(e) => {
                                                        choices[i] =
                                                            e.target.value;
                                                        console.log(choices);
                                                    }}
                                                ></textarea>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </>
                    )}
                    {!toggleType && (
                        <>
                            <div className="fs-5 fw-bold mb-2">
                                Question Answer
                            </div>
                            <textarea
                                id="questiontextarea"
                                rows={5}
                                placeholder="Enter Text Here"
                                defaultValue={choosenQuestionTextAnswer}
                                style={{ width: "95%" }}
                                onChange={(e) => {
                                    setChoosenQuestionTextAnswer(
                                        e.target.value
                                    );
                                }}
                            ></textarea>
                        </>
                    )}
                    <button
                        type="submit"
                        onClick={(e) => {
                            console.log(subject);
                        }}
                        className="btn float px-5 pt-1 resizeLoginSubmitButton mt-3 mb-2"
                        style={{
                            borderRadius: "25px",
                            fontSize: "25px",
                            backgroundColor: "#3dbfb6",
                            color: "white",
                            marginRight: "8%",
                        }}
                    >
                        Next
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditQuestions;
