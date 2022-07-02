import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from "react-select";

const AssignProcror = () => {
    const [subject, setSubject] = useState();
    const [proctoringMethod, setProctoringMethod] = useState();
    const [proctorAmount, setProctorAmount] = useState();
    const [proctorsList, setProctorsList] = useState([]);
    const [proctorListError, setProctorListError] = useState("");
    const [subjectError, setSubjectError] = useState("");
    const [proctorAmountError, setProctorAmountError] = useState("");
    const [proctoringMethodError, setProctoringMethodError] = useState("");
    const [getarray, setGetArray] = useState([]);
    const [getarray1, setGetArray1] = useState([]);
    const [subjectdata, setSubjectData] = useState([]);
    const handle = (e) => {
        //  console.log(e.target.value);
        setProctorAmount(Number(e.target.value));
        setProctorsList(Array(Number(e.target.value)));
        setProctorAmountError("");
        // console.log("h", proctorAmount);
        console.log(proctorsList);
    };

    console.log(subjectdata);
    useEffect(() => {
        axios.get("/api/subjects").then((response) => {
            const data = response.data;
            if (data) {
                setGetArray(data);
            }
        });
        axios.get("/api/proctors").then((response) => {
            const data = response.data;
            if (data) {
                setGetArray1(data);
            }
        });
    }, []);

    console.log(getarray);
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
    const addvalueproctors = (getarray) => {
        wantedarray = [];
        for (let index = 0; index < getarray.length; index++) {
            wantedarray.push({
                value: getarray[index].username,
                label: getarray[index].username,
            });
        }
        return wantedarray;
    };
    // const getarray1 = [
    //     "Ahmed",
    //     "Walid",
    //     "Mohamed",
    //     "Youssef",
    //     "Mahmoud",
    //     "Marwan",
    // ];

    const options = addvalue(getarray);
    const ProctorOptions = addvalueproctors(getarray1);
    let request = {
        //////////////////////////////////// 3ayzen nmskn al3dd w n3rf random wla bl asamy
        subjectid: subjectdata.id,
        proctorsList,
    };
    const handleSubmit = (e) => {
        axios.post(`/api/subjects/${subjectdata.id}/proctors`, request);
        e.preventDefault();
        console.log(subject, proctoringMethod, proctorsList, proctorAmount);
        if (
            subject &&
            (proctoringMethod === "Artificial Proctoring" ||
                (proctoringMethod === "Manual Proctoring" &&
                    proctorAmount != null &&
                    !proctorsList.includes(undefined)))
        ) {
            document.getElementById("nameForm").submit();
            window.location.reload();
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
            <form onSubmit={handleSubmit} id="nameForm">
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
                                axios
                                    .post("api/subjects", e)
                                    .then((response) => {
                                        setSubjectData(response.data);
                                    });
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
