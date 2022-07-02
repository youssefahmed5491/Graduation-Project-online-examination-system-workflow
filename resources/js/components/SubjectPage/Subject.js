import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import Chart from "./Chart";

import axios from "axios";
import { set } from "react-hook-form";
import { sum } from "lodash";

//axios.get(`/api/subjects/${subjects}`).then((response)=>{console.log(response.data)})
// defaults.global.tooltips.enabled = false;
// defaults.global.legend.position = "bottom";

const Subject = ({ username, professor }) => {
    const [subjectArray, setSubjectArray] = useState([]);
    const [subjectClicked, setSubjectClicked] = useState(false);
    const [subject, setSubject] = useState();
    const getsub = async () => {
        const { data } = await axios.get(
            `/api/professors/${professor.id}/subjects`
        );
        setSubjectArray(data);
    };

    useEffect(() => {
        getsub();
    }, [professor]);

    console.log(subjectArray);
    const displaynone = `${subjectClicked ? "displaynone" : ""}`;
    return (
        <div
            className="col"
            style={{
                paddingTop: "5px",
                paddingLeft: "1rem",
                background: "#ebebeb",
                height: "100%",
            }}
        >
            <div
                style={{
                    paddingTop: "5px",
                    paddingLeft: "1rem",
                    background: "#ebebeb",
                    height: "100%",
                }}
                className={`${displaynone} col`}
            >
                <h1>Subjects</h1>
                <div className="row me-5 ms-5 mt-5">
                    {Array.from(Array(subjectArray.length), (e, i) => {
                        return (
                            <div key={i} className="col-4">
                                <button
                                    style={{
                                        width: "100%",
                                        background: "white",
                                        borderRadius: "10px",
                                        marginBottom: "10px",
                                        paddingTop: "10px",
                                        paddingBottom: "10px",
                                        paddingLeft: "15px",
                                        border: "0",
                                    }}
                                    onClick={(e) => {
                                        setSubjectClicked(true);
                                        setSubject(subjectArray[i]);
                                    }}
                                >
                                    <div
                                        className="d-flex justify-content-center"
                                        style={{}}
                                    >
                                        {subjectArray[i].title}
                                    </div>
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
            {subjectClicked && (
                <div>
                    <Chart subject={subject} />
                    <button
                        onClick={(e) => {
                            setSubjectClicked(false);
                        }}
                    >
                        back
                    </button>
                </div>
            )}
        </div>
    );
};

export default Subject;