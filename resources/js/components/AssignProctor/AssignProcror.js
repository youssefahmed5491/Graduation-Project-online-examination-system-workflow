import React, { useState } from "react";
import Select from "react-select";

const AssignProcror = () => {
    const [subject, setSubject] = useState();
    const [proctoringMethod, setProctoringMethod] = useState();
    const [proctorAmount, setProctorAmount] = useState();
    const [proctorsList, setProctorsList] = useState([]);

    const [subjectError, setSubjectError] = useState("");
    const [proctorAmountError, setProctorAmountError] = useState("");
    const [proctoringMethodError, setProctoringMethodError] = useState("");
    const [proctorListError, setProctorListError] = useState("");

    const handle = (e) => {
        console.log(e.target.value);
        setProctorAmount(Number(e.target.value));
        setProctorsList(Array(Number(e.target.value)));
        setProctorAmountError("");
        console.log("h", proctorAmount);
        console.log(proctorsList);
    };

    const getarray = ["Math", "Graph", "Physics1", "Physics2", "Graph2", "lol"];
    const getarray1 = [
        "Ahmed",
        "Walid",
        "Mohamed",
        "Youssef",
        "Mahmoud",
        "Marwan",
    ];
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
    const ProctorOptions = addvalue(getarray1);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(subject, proctoringMethod, proctorsList, proctorAmount);
        if (
            subject &&
            (proctoringMethod === "Artificial Proctoring" ||
                (proctorAmount === "Manual Proctoring" &&
                    !proctorsList.includes(undefined)))
        ) {
            document.getElementById("nameForm").submit();
        } else {
            if (!subject) {
                setSubjectError("error");
            }
            if (!proctoringMethod) {
                setProctoringMethodError("error");
            }
            if (!proctorAmount) {
                setProctorAmountError("error");
            }
            if (proctorsList.includes(undefined)) {
                setProctorListError("error");
            }
        }
    };

    return (
        <>
            <div className="m-2">
                <h1>Assign Proctor</h1>
            </div>
            <form onSubmit={handleSubmit} id="nameForm" action="/login">
                <div className="me-5 ms-5 mt-5">
                    <div className="ms-5">
                        <div className="fs-5 fw-bold mb-2">Select Subject</div>
                        <Select
                            className={subjectError}
                            options={options}
                            name="lol"
                            placeholder={"eg:Math"}
                            // value={options.find((obj) => obj.value === subject)}
                            onChange={(e) => {
                                setSubject(e.value), setSubjectError("");
                            }}
                        />
                        {subjectError && (
                            <div className="emptyfield">must enter feiled</div>
                        )}
                    </div>
                    <div className="ms-5">
                        <div className="fs-5 fw-bold mb-2">
                            Select Proctoring Method
                        </div>
                        <Select
                            className={proctoringMethodError}
                            options={[
                                {
                                    value: "Manual Proctoring",
                                    label: "Manual Proctoring",
                                },
                                {
                                    value: "Artificial Proctoring",
                                    label: "Artificial Proctoring",
                                },
                            ]}
                            value={options.find(
                                (obj) => obj.value === proctoringMethod
                            )}
                            onChange={(e) => {
                                setProctoringMethod(e.value),
                                    setProctoringMethodError(""),
                                    console.log(proctoringMethod);
                            }}
                            placeholder={"eg:Manual Proctoring"}
                        />
                        {proctoringMethodError && (
                            <div className="emptyfield">must enter feiled</div>
                        )}
                    </div>
                    {proctoringMethod === "Manual Proctoring" && (
                        <div className="ms-5 m-2">
                            <div className="fs-5 fw-bold mb-2">
                                Enter Proctors Amount
                            </div>
                            <div className="form-group mt-2">
                                <input
                                    className={`form-control ${proctorAmountError}`}
                                    type="text"
                                    placeholder="Enter Text Here"
                                    aria-label="default input example"
                                    style={{ width: "101%" }}
                                    onChange={(e) => {
                                        handle(e);
                                    }}
                                />
                                {proctorAmountError && (
                                    <div className="emptyfield">
                                        must enter feiled
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                    <div className="ms-5">
                        {proctorsList.length > 0 && (
                            <div className="fs-5 fw-bold mb-2">
                                Enter number of proctors you want to assign
                            </div>
                        )}

                        <div className="row">
                            {Array.from(Array(proctorsList.length), (e, i) => {
                                return (
                                    <div key={i} className="col-6 mb-3">
                                        <Select
                                            options={ProctorOptions.filter(
                                                (op) =>
                                                    !proctorsList.includes(
                                                        op.value
                                                    )
                                            )}
                                            placeholder={"eg:Ahmed"}
                                            onChange={(e) => {
                                                setSubject(e.value);
                                                let temp = [...proctorsList];
                                                temp[i] = e.value;
                                                console.log("temp", temp);
                                                setProctorsList(temp);
                                            }}
                                        />
                                    </div>
                                );
                            })}
                            {proctorListError &&
                                proctorsList.includes(undefined) && (
                                    <div className="emptyfield">
                                        must select proctors
                                    </div>
                                )}
                        </div>
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
                                console.log("confirmed");
                            }}
                            className="btn  px-5 pt-1 resizeLoginSubmitButton mt-3 mb-2"
                            style={{
                                borderRadius: "25px",
                                fontSize: "25px",
                                backgroundColor: "#3dbfb6",
                                color: "white",
                            }}
                        >
                            Confirm
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default AssignProcror;
