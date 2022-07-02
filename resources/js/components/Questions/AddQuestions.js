import React, { useEffect, useState } from "react";
import Select from "react-select";
import axios from "axios";
import { isArray } from "lodash";

const AddQuestion = (divheight, professor) => {
    const [subject, setSubject] = useState();
    const [chapterNumber, setChapterNumber] = useState();
    const [difficulty, setDifficulty] = useState();
    const [duration, setDuration] = useState(); // deh kaman hatetshal
    const [questionType, setQuestionType] = useState();
    const [questionText, setQuestionText] = useState();
    const [answerText, setAnswerText] = useState();
    const [getarray, setGetArray] = useState([]);
    console.log(divheight.professor.id);

    useEffect(() => {
        axios
            .get(`/api/professors/${divheight.professor.id}/subjects`)
            .then((response) => {
                setGetArray(response.data);
            });
    }, []);
    //console.log(getarray);
    let wantedarray = [];
    const addvalue = (getarray) => {
        for (let index = 0; index < getarray.length; index++) {
            wantedarray.push({
                value: getarray[index].title,
                label: getarray[index].title,
            });
        }
        return wantedarray;
    };

    const howManyOptions = () => {
        if (actualNumberOfChoices === 2) {
            return option0 && option1;
        } else if (actualNumberOfChoices === 3) {
            return option0 && option1 && option2;
        } else if (actualNumberOfChoices === 4) {
            return option0 && option1 && option2 && option3;
        } else if (actualNumberOfChoices === 5) {
            return option0 && option1 && option2 && option3 && option4;
        } else {
            return (
                option0 && option1 && option2 && option3 && option4 && option5
            );
        }
    };
    const options = addvalue(getarray);
    const Mathoptions = [
        { value: "10", label: "ch 10" },
        { value: "2", label: "ch 2" },
        { value: "5", label: "ch 5" },
    ];
    const Physicsoptions = [
        { value: "12", label: "ch 12" },
        { value: "1", label: "ch 1" },
        { value: "6", label: "ch 6" },
    ];
    const DataStructureoptions = [
        { value: "11", label: "ch 11" },
        { value: "3", label: "ch 3" },
        { value: "4", label: "ch 4" },
    ];
    let whattochoose = [];
    if (subject === "Math") {
        whattochoose = Mathoptions;
    } else if (subject === "Physics1") {
        whattochoose = Physicsoptions;
    } else if (subject === "Physics2") {
        whattochoose = DataStructureoptions;
    }
    const [option0, setOption0] = useState("");
    const [option1, setOption1] = useState("");
    const [option2, setOption2] = useState("");
    const [option3, setOption3] = useState("");
    const [option4, setOption4] = useState("");
    const [option5, setOption5] = useState("");
    const [question, setQuestion] = useState("");
    const [ar, setAr] = useState([]);
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
    const [actualNumberOfChoices, setActualNumberOfChoices] = useState(0);
    const DivHeight = divheight.divheight * (107 / 100);

    const [subjectError, setSubjectError] = useState("");
    const [chapterNumberError, setChapterNumberError] = useState("");
    const [difficultyError, setDifficultyError] = useState("");
    const [questionTypeError, setQuestionTypeError] = useState("");
    const [questionTextError, setQuestionTextError] = useState("");
    const [answerTextError, setAnswerTextError] = useState("");
    const [actualNumberOfChoicesError, setActualNumberOfChoicesError] =
        useState("");
    const [answerOptionError0, setAnswerOptionError0] = useState("");
    const [answerOptionError1, setAnswerOptionError1] = useState("");
    const [answerOptionError2, setAnswerOptionError2] = useState("");
    const [answerOptionError3, setAnswerOptionError3] = useState("");
    const [answerOptionError4, setAnswerOptionError4] = useState("");
    const [answerOptionError5, setAnswerOptionError5] = useState("");
    const [radioError, setRadioError] = useState("");
    const setclassname = (i) => {
        if (i === 0) {
            return `form-control ${answerOptionError0}`;
        } else if (i === 1) {
            return `form-control ${answerOptionError1}`;
        } else if (i === 2) {
            return `form-control ${answerOptionError2}`;
        } else if (i === 3) {
            return `form-control ${answerOptionError3}`;
        } else if (i === 4) {
            return `form-control ${answerOptionError4}`;
        } else if (i === 5) {
            return `form-control ${answerOptionError5}`;
        }
    };
    ///// COMMENT ->       Select subject should be textfield to write the subject code bec we cant
    ///////////             handle all subject codes choises
    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            subject &&
            questionType &&
            chapterNumber &&
            difficulty &&
            questionText &&
            (answerText || (actualNumberOfChoices && radio && howManyOptions()))
        ) {
            var data = [actualNumberOfChoices];
            var i;
            for (i = 0; i < actualNumberOfChoices; i++) {
                data[i] = eval("option" + i);
            }
            var mcqcorrectans = data[radio - 1];
            const request = {
                subject: subject,
                chapterNumber: parseInt(chapterNumber),
                difficulty: difficulty,
                duration: parseInt(duration), //deh ely hatetshal
                questionText: questionText,
                answerText: answerText,
                actualNumberOfChoices: actualNumberOfChoices,
                answersarray: data,
                type: questionType,
                mcqcorrectans: mcqcorrectans,
            };

            // console.log(request.difficulty);
            axios.post("/api/QSBank", request).then((response) => {
                ({ response });
            });
            document.getElementById("nameForm").submit();
        } else {
            if (!subject) {
                setSubjectError("error");
            }
            if (!questionType) {
                setQuestionTypeError("error");
            }
            if (!chapterNumber) {
                setChapterNumberError("error");
            }
            if (!difficulty) {
                setDifficultyError("error");
            }

            if (!questionText) {
                setQuestionTextError("error");
            }
            if (!answerText) {
                setAnswerTextError("error");
            }
            if (!actualNumberOfChoices) {
                setActualNumberOfChoicesError("error");
            }
            if (!radio) {
                setRadioError("error");
            }
            if (!option0) {
                setAnswerOptionError0("error");
            }
            if (!option1) {
                setAnswerOptionError1("error");
            }
            if (!option2) {
                setAnswerOptionError2("error");
            }
            if (!option3) {
                setAnswerOptionError3("error");
            }
            if (!option4) {
                setAnswerOptionError4("error");
            }
            if (!option5) {
                setAnswerOptionError5("error");
            }
        }
    };

    return (
        <div
            style={{
                backgroundColor: "#ebebeb",
                overflowY: "auto",
                height: `${DivHeight}px`,
            }}
        >
            <div className="col">
                <div className="fs-1 fw-bold m-2">Add Question</div>
                {/*First Form-Slect */}

                <form
                    onSubmit={handleSubmit}
                    action={`/${divheight.username}-${divheight.radio}`}
                    id="nameForm"
                >
                    <div className="ms-5" style={{ width: "90%" }}>
                        <div className="fs-5 fw-bold mb-2">Select Subject</div>

                        <Select
                            id="validationCustom04"
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
                    {/* Form-Slect */}
                    <div className="ms-5 m-2" style={{ width: "90%" }}>
                        <div className="fs-5 fw-bold mb-2">Select Chapter</div>
                        <textarea
                            id="questiontextarea"
                            className={chapterNumberError}
                            rows={1}
                            placeholder={"eg:10"}
                            style={{ width: "100%" }}
                            onChange={(e) => {
                                setChapterNumber(e.target.value),
                                    setChapterNumberError("");
                            }}
                        ></textarea>
                        {chapterNumberError && (
                            <div className="emptyfield">must enter feiled</div>
                        )}
                    </div>
                    {/*End Form-Slect */}
                    {/* Form-Slect */}
                    <div className="ms-5 m-2" style={{ width: "90%" }}>
                        <div className="fs-5 fw-bold mb-2">
                            Select Difficulty
                        </div>
                        <Select
                            className={difficultyError}
                            options={[
                                { value: "0", label: "Easy" },
                                { value: "1", label: "Medium" },
                                { value: "2", label: "Hard" },
                            ]}
                            placeholder={"eg:easy"}
                            value={options.find(
                                (obj) => obj.value === difficulty
                            )}
                            onChange={(e) => {
                                setDifficulty(e.value), setDifficultyError("");
                            }}
                        />
                        {difficultyError && (
                            <div className="emptyfield">must enter feiled</div>
                        )}
                    </div>
                    {/*End Form-Slect */}

                    {/* Form-Slect */}
                    <div className="ms-5 m-2" style={{ width: "90%" }}>
                        <div className="fs-5 fw-bold mb-2">
                            Select Question Type
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
                                    setQuestionTypeError("");
                            }}
                            placeholder={"eg:MCQ"}
                        />
                        {questionTypeError && (
                            <div className="emptyfield">must enter feiled</div>
                        )}
                    </div>
                    {/*End Form-Slect */}
                    {/* Form-Slect */}
                    <div className="ms-5 m-2">
                        <div className="fs-5 fw-bold mb-2">Question Text</div>
                        <div className="form-group mt-2">
                            <textarea
                                className={`form-control ${questionTextError}`}
                                id="questiontextarea"
                                rows="5"
                                placeholder="Enter Text Here"
                                style={{ width: "95%" }}
                                onChange={(e) => {
                                    setQuestionText(e.target.value),
                                        setQuestionTextError("");
                                }}
                            ></textarea>
                        </div>
                        {questionTextError && (
                            <div className="emptyfield">must enter feiled</div>
                        )}
                    </div>
                    {/*End Form-Slect */}
                    {/* Multiple Choice Section */}
                    {questionType === "mcq" && (
                        <div className="ms-5 m-2">
                            <div className="fs-5 fw-bold mb-2">
                                Select Number Of Options
                            </div>
                            <div style={{ width: "95%" }}>
                                <Select
                                    className={actualNumberOfChoicesError}
                                    options={[
                                        { value: 2, label: "2" },
                                        { value: 3, label: "3" },
                                        { value: 4, label: "4" },
                                        { value: 5, label: "5" },
                                        { value: 6, label: "6" },
                                    ]}
                                    value={options.find(
                                        (obj) =>
                                            obj.value === actualNumberOfChoices
                                    )}
                                    onChange={(e) => {
                                        setActualNumberOfChoices(e.value),
                                            setActualNumberOfChoicesError("");
                                    }}
                                    placeholder={"eg:2"}
                                    menuPlacement="auto"
                                />
                                {actualNumberOfChoicesError && (
                                    <div className="emptyfield">
                                        must enter feiled
                                    </div>
                                )}
                            </div>

                            <div className="row" style={{ width: "97%" }}>
                                {Array.from(
                                    { length: actualNumberOfChoices },
                                    (_, i) => {
                                        return (
                                            <div className="col-6" key={i}>
                                                <div className="d-inline me-5 fs-4 fw-bold">
                                                    Option {i + 1}
                                                </div>
                                                <div className="form-check form-check-inline mt-5">
                                                    <input
                                                        className="form-check-input "
                                                        type="radio"
                                                        name="inlineRadioOptions"
                                                        id={i}
                                                        value={i + 1}
                                                        onChange={(e) => {
                                                            setRadio(
                                                                e.target.value
                                                            );
                                                            setRadioError("");
                                                        }}
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor={i}
                                                    >
                                                        select as correct option
                                                    </label>
                                                    {radioError && (
                                                        <div className="emptyfield">
                                                            must select one
                                                            correct answer
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="form-group mt-2">
                                                    <textarea
                                                        className={setclassname(
                                                            i
                                                        )}
                                                        id="exampleFormControlTextarea1"
                                                        rows="5"
                                                        placeholder="Enter Text Here"
                                                        onChange={(e) => {
                                                            handleoption(e, i);

                                                            if (i == 0) {
                                                                setAnswerOptionError0(
                                                                    ""
                                                                );
                                                            }
                                                            if (i == 1) {
                                                                setAnswerOptionError1(
                                                                    ""
                                                                );
                                                            }
                                                            if (i == 2) {
                                                                setAnswerOptionError2(
                                                                    ""
                                                                );
                                                            }
                                                            if (i == 3) {
                                                                setAnswerOptionError3(
                                                                    ""
                                                                );
                                                            }
                                                            if (i == 4) {
                                                                setAnswerOptionError4(
                                                                    ""
                                                                );
                                                            }
                                                            if (i == 5) {
                                                                setAnswerOptionError5(
                                                                    ""
                                                                );
                                                            }
                                                        }}
                                                    ></textarea>
                                                    {((i === 0 &&
                                                        answerOptionError0) ||
                                                        (i === 1 &&
                                                            answerOptionError1) ||
                                                        (i === 2 &&
                                                            answerOptionError2) ||
                                                        (i === 3 &&
                                                            answerOptionError3) ||
                                                        (i === 4 &&
                                                            answerOptionError4) ||
                                                        (i === 5 &&
                                                            answerOptionError5)) && (
                                                        <div className="emptyfield">
                                                            must enter feiled
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    }
                                )}
                            </div>
                        </div>
                    )}
                    {/*End Multiple Choice Section */}
                    {/* Text Question */}
                    {questionType === "written" && (
                        <div className="ms-5 m-2">
                            <div className="fs-5 fw-bold mb-2">Answer Text</div>
                            <div className="form-group mt-2">
                                <textarea
                                    className={`form-control ${answerTextError}`}
                                    id="questiontextarea"
                                    rows="5"
                                    placeholder="Enter Text Here"
                                    style={{ width: "95%" }}
                                    onChange={(e) => {
                                        setAnswerText(e.target.value),
                                            setAnswerTextError("");
                                    }}
                                ></textarea>
                                {answerTextError && (
                                    <div className="emptyfield">
                                        must enter feiled
                                    </div>
                                )}
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
                            onClick={(e) => {
                                console.log(subject);
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
        </div>
    );
};

export default AddQuestion;
