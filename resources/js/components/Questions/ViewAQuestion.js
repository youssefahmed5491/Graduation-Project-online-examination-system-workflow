import React, { useEffect, useState } from "react";

const ViewAQuestion = ({ selectedRow, divheight }) => {
    const [toggle, setToggle] = useState(false);
    useEffect(() => {
        if (QuestionType === "MCQ") {
            setToggle(true);
        } else {
            setToggle(false);
        }
    }, []);
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
    console.log(Answer);
    const DivHeight = divheight * (107 / 100);
    return (
        <div
            style={{
                overflowY: "auto",
                height: `${DivHeight}px`,
            }}
        >
            <div className="col">
                <div className="fs-1 fw-bold m-2">View Question</div>
            </div>
            <div className="ms-5" style={{ width: "90%" }}>
                <div className="fs-5 fw-bold mb-2"> Subject</div>
                <div className="bg-white fw-bold" style={{ width: "90%" }}>
                    {Subject}
                </div>
                <div className="fs-5 fw-bold mb-2"> Chapter</div>
                <div className="bg-white fw-bold" style={{ width: "90%" }}>
                    {Chapter}
                </div>
                <div className="fs-5 fw-bold mb-2"> Difficulty</div>
                <div className="bg-white fw-bold" style={{ width: "90%" }}>
                    {Difficulty}
                </div>
                <div className="fs-5 fw-bold mb-2"> Duration</div>
                <div className="bg-white fw-bold" style={{ width: "90%" }}>
                    {Duration}
                </div>
                <div className="fs-5 fw-bold mb-2">Question Type</div>
                <div className="bg-white fw-bold" style={{ width: "90%" }}>
                    {QuestionType}
                </div>
                <div className="fs-5 fw-bold mb-2">Question</div>
                <div className="bg-white fw-bold" style={{ width: "90%" }}>
                    {Questions}
                </div>
                {toggle && (
                    <>
                        <div className="fs-5 fw-bold mb-2">
                            Number of Choices
                        </div>
                        <div
                            className="bg-white fw-bold"
                            style={{ width: "90%" }}
                        >
                            {choices.length}
                        </div>
                        <div className="row" style={{ width: "97%" }}>
                            {Array.from(Array(choices.length), (e, i) => {
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
                                                checked={choices[i] === Answer}
                                                disabled={true}
                                            />
                                            {choices[i] === Answer && (
                                                <label
                                                    className="form-check-label"
                                                    htmlFor={i}
                                                >
                                                    Correct Option
                                                </label>
                                            )}
                                        </div>
                                        <div>
                                            <div
                                                className="bg-white fw-bold "
                                                style={{
                                                    width: "90%",
                                                    height: "90px",
                                                    overflow: "auto",
                                                }}
                                            >
                                                {choices[i]}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </>
                )}
                {!toggle && (
                    <>
                        <div className="fs-5 fw-bold mb-2">Question Answer</div>
                        <div
                            className="bg-white fw-bold"
                            style={{ width: "90%" }}
                        >
                            {QuestionTextAnswer}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ViewAQuestion;
