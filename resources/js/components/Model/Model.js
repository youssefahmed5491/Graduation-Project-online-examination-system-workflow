import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Pagination from "../Questions/Pagination";

const Model = ({ divheight }) => {
    const { username, numberOfModels } = useParams();
    // const { fromDashboard } = useLocation().state;
    const location = useLocation();
    const referrer = localStorage.getItem("referrer");
    console.log(referrer);
    console.log(username, numberOfModels);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(17);

    const tableRowHeight = divheight * (92 / 100) * (6.25 / 100);

    var rows = [];
    var arrayofrows = [];
    var howada = [];
    const row = {
        id: 1,
        Questions: "Lorem Epsium Lorem Epsium",
        Answer: "a",
        Subject: "Physics1",
        Difficulty: "Hard",
        Duration: "10 min",
        Status: "Active",
        QuestionType: "MCQ",
        Chapter: "10",
        // choices: 2,
        radio: "2",
        choices: ["a", "b", "c", "d"],
    };
    for (var i = 0; i < 20; i++) {
        rows.push(row);
    }
    for (var i = 0; i < 2; i++) {
        arrayofrows.push(rows);
    }
    rows = [];
    for (var i = 0; i < arrayofrows.length; i++) {
        for (var j = 0; j < arrayofrows[i].length; j++) {
            rows.push(arrayofrows[i][j]);
        }
    }
    console.log(rows);
    console.log("lol", howada);
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = rows.slice(indexOfFirstRow, indexOfLastRow);

    const paginate = (pageNumber) => {
        if (pageNumber != "...") {
            setCurrentPage(pageNumber);
        }
    };
    return (
        <>
            <div style={{ background: "#ebebeb" }}>
                <h3 className="fw-bold m-0">Question Bank List</h3>
                <div
                    style={{
                        width: "97%",
                        height: "90%",
                        background: "white",
                        position: "absolute",
                        margin: "0px",
                    }}
                >
                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                            margin: "1%",
                        }}
                    >
                        <div
                            className="col"
                            style={{
                                margin: "1%",
                                height: "100%",
                                width: "100%",
                            }}
                        >
                            <div
                                className="row w-100  "
                                style={{ overflowY: "auto", height: "100%" }}
                            >
                                <div>
                                    <table className="table table-borderless">
                                        <thead
                                            style={{
                                                height: `${tableRowHeight}px`,
                                                lineHeight: "100%",
                                                background: "#ebebeb",
                                            }}
                                        >
                                            <tr>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        borderRight: "1px",
                                                        borderStyle: "solid",
                                                        borderColor: "white",
                                                    }}
                                                >
                                                    #
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        borderRight: "1px",
                                                        borderStyle: "solid",
                                                        borderColor: "white",
                                                    }}
                                                >
                                                    Questions
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        borderRight: "1px",
                                                        borderStyle: "solid",
                                                        borderColor: "white",
                                                    }}
                                                >
                                                    Answer
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        borderRight: "1px",
                                                        borderStyle: "solid",
                                                        borderColor: "white",
                                                    }}
                                                >
                                                    Subject
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        borderRight: "1px",
                                                        borderStyle: "solid",
                                                        borderColor: "white",
                                                    }}
                                                >
                                                    Difficulty
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        borderRight: "1px",
                                                        borderStyle: "solid",
                                                        borderColor: "white",
                                                    }}
                                                >
                                                    Duration
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {currentRows.map((row, index) => (
                                                <tr
                                                    style={{
                                                        background: `${
                                                            index % 2 == 0
                                                                ? "#f7f7f7"
                                                                : "#ebebeb"
                                                        }`,
                                                        height: `${tableRowHeight}px`,
                                                        lineHeight: "100%",
                                                    }}
                                                    key={index}
                                                >
                                                    <th
                                                        scope="row"
                                                        style={{
                                                            borderRight: "1px",
                                                            borderStyle:
                                                                "solid",
                                                            borderColor:
                                                                "white",
                                                        }}
                                                    >
                                                        {index}
                                                    </th>
                                                    <td
                                                        style={{
                                                            borderRight: "1px",
                                                            borderStyle:
                                                                "solid",
                                                            borderColor:
                                                                "white",
                                                        }}
                                                    >
                                                        {row.Questions}
                                                    </td>
                                                    <td
                                                        style={{
                                                            borderRight: "1px",
                                                            borderStyle:
                                                                "solid",
                                                            borderColor:
                                                                "white",
                                                        }}
                                                    >
                                                        {row.Answer}
                                                    </td>
                                                    <td
                                                        style={{
                                                            borderRight: "1px",
                                                            borderStyle:
                                                                "solid",
                                                            borderColor:
                                                                "white",
                                                        }}
                                                    >
                                                        {row.Subject}
                                                    </td>
                                                    <td
                                                        style={{
                                                            borderRight: "1px",
                                                            borderStyle:
                                                                "solid",
                                                            borderColor:
                                                                "white",
                                                        }}
                                                    >
                                                        {row.Difficulty}
                                                    </td>
                                                    <td
                                                        style={{
                                                            borderRight: "1px",
                                                            borderStyle:
                                                                "solid",
                                                            borderColor:
                                                                "white",
                                                        }}
                                                    >
                                                        {row.Duration}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <Pagination
                                        rowsPerPage={rowsPerPage}
                                        totalRows={rows.length}
                                        paginate={paginate}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Model;
