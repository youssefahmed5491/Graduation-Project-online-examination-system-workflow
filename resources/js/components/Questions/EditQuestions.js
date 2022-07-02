import React, { useEffect, useState } from "react";
import Select from "react-select";

const EditQuestions = ({ selectedRow, divheight }) => {
    const {
        id,
        text,
        Answer,
        subject_title,
        difficulty_level,

        Status,
        mcq_answers,
        type,
        chapter,
        correct_answer,
    } = selectedRow;
    console.log(id);
    const selectDifficulty = ["Easy", "Medium", "Hard"];

    const selectExamType = ["mcq", "written"];
    const MCQAmount = [2, 3, 4, 5, 6];

    const [choosenSubject, setChoosenSubject] = useState("");
    const [choosenChapter, setChoosenChapter] = useState("");
    const [choosenDifficulty, setChoosenDifficulty] = useState("");

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

    console.log(mcq_answers);
    useEffect(() => {
        {
            if (type === "mcq") {
                Array.from(mcq_answers).map((choice, i) => {
                    if (Answer === choice) {
                        return <div key={i}>{setIndexOfAnswer(i)}</div>;
                    }
                });
            }
            setChoosenSubject(subject_title);
            setChoosenChapter(chapter);
            if (difficulty_level === 0) {
                setChoosenDifficulty("Easy");
            }
            if (difficulty_level === 1) {
                setChoosenDifficulty("Medium");
            }
            if (difficulty_level === 2) {
                setChoosenDifficulty("Hard");
            }

            setChoosenQuestionType(type);
            if (type === "mcq") {
                setToggleType(true);
            }
            setChoosenQuestionText(text);
            setChoosenQuestionTextAnswer(correct_answer);
            if (type === "mcq") {
                setChoosenMCQAmount(mcq_answers.length);
            }
        }
    }, []);
    console.log("hi");
    let newrow = {
        text1: choosenQuestionText,
        mcq_answers1: mcq_answers,
        type1: choosenQuestionType,
        difficulty_level1: choosenDifficulty, //deh ely hatetshal
        correct_answer1: choosenQuestionTextAnswer,
        chapter1: choosenChapter,
    };
    console.log(choosenQuestionTextAnswer);
    const DivHeight = divheight * (107 / 100);
    console.log(newrow, "hiiiiiiiiiiiiiiiiiiiii");
    console.log(DivHeight);

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
                <form id="nameForm">
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
                                                    defaultValue={
                                                        mcq_answers[i]
                                                    }
                                                    style={{ width: "95%" }}
                                                    onChange={(e) => {
                                                        mcq_answers[i] =
                                                            e.target.value;
                                                        console.log(
                                                            mcq_answers
                                                        );
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
                            console.log(newrow);
                            axios.patch(`/api/QSBank/${id}`, newrow);
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
