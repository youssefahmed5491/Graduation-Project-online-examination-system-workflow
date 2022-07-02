import React, { useEffect, useState } from "react";

import Pagination from "./Pagination";
import EditQuestions from "./EditQuestions";
import ViewAQuestion from "./ViewAQuestion";

import guiViewIcon from "./viewquestions/gui_view_icon_158340.png";
import edit from "./viewquestions/edit.png";
import Delete from "./viewquestions/Delete-Alt-256.png";
import axios from "axios";

const ViewQuestions = (divheight, professor) => {
    console.log(divheight.professor);
    useEffect(() => {
        axios
            .get(`/api/professors/${divheight.professor.id}`)
            .then((response) => {
                const data = response.data;
                if (data) {
                    setData(data);
                    console.log(data);
                }
                // Object.keys(data).map(function (key, index) {
                //     console.log(data[key]);
                // });
            });
    }, []);

    const [data, setData] = useState(undefined);

    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(13);
    const [selectedRow, setSelectedRow] = useState({});
    const [guiViewIconClicked, setGuiViewIconClicked] = useState(false);
    const [editClicked, setEditClicked] = useState(false);
    const [deleteClicked, setDeleteClicked] = useState(false);
    const tableRowHeight = divheight * (92 / 100) * (6.25 / 100);
    const displaynone = `${
        guiViewIconClicked || editClicked || deleteClicked ? "displaynone" : ""
    }`;
    var rows = [];
    if (data != null) {
        for (var i = 0; i < data.length; i++) {
            for (var j = 0; j < data[i].length; j++) {
                rows.push(data[i][j]);
            }
        }
    }
    // console.log(Array.isArray(rows), "llllllllllllllllllllllllllllllllll");
    // const row = {
    //     id: 1,
    //     Questions: "Lorem Epsium Lorem Epsium",
    //     Answer: "a",
    //     Subject: "Physics1",
    //     Difficulty: "Hard",
    //     Duration: "10 min",
    //     Status: "Active",
    //     QuestionType: "MCQ",
    //     Chapter: "10",
    //     // choices: 2,
    //     radio: "2",
    //     choices: ["a", "b", "c", "d"],
    // };
    // for (var i = 0; i < 20; i++) {
    //     rows.push(row);
    // }
    // for (var i = 0; i < 2; i++) {
    //     arrayofrows.push(rows);
    // }
    // rows = [];
    // for (var i = 0; i < arrayofrows.length; i++) {
    //     for (var j = 0; j < arrayofrows[i].length; j++) {
    //         rows.push(arrayofrows[i][j]);
    //     }
    // }

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
            <div className={displaynone}>
                <h3 className="fw-bold">Question Bank List</h3>
                <div
                    style={{
                        width: "81%",
                        height: `${divheight}px`,
                        background: "white",
                        position: "absolute",
                    }}
                >
                    <div
                        style={{
                            width: "98%",
                            height: "92%",
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
                                style={{ overflowY: "auto", height: "107%" }}
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

                                                <th scope="col">Actions</th>
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
                                                        {row.text}
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
                                                        {row.type === "mcq" &&
                                                            Array.from(
                                                                row.mcq_answers
                                                            ).map(
                                                                (
                                                                    mcq,
                                                                    index
                                                                ) => {
                                                                    return (
                                                                        <span
                                                                            key={
                                                                                index
                                                                            }
                                                                        >
                                                                            {
                                                                                mcq
                                                                            }
                                                                            ,
                                                                        </span>
                                                                    );
                                                                }
                                                            )}
                                                        {row.type ===
                                                            "written" &&
                                                            row.correct_answer}
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
                                                        {row.subject_title}
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
                                                        {row.difficulty_level ===
                                                            0 && "Easy"}
                                                        {row.difficulty_level ===
                                                            1 && "Medium"}
                                                        {row.difficulty_level ===
                                                            2 && "Hard"}
                                                    </td>

                                                    <td
                                                        style={{ width: "10%" }}
                                                    >
                                                        <img
                                                            src={guiViewIcon}
                                                            onClick={() => {
                                                                setGuiViewIconClicked(
                                                                    true
                                                                );
                                                                setEditClicked(
                                                                    false
                                                                );
                                                                setDeleteClicked(
                                                                    false
                                                                );
                                                                setSelectedRow(
                                                                    row
                                                                );
                                                            }}
                                                            alt=""
                                                            style={{
                                                                width: "30%",
                                                                marginRight:
                                                                    "13%",
                                                            }}
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="bottom"
                                                            title="view"
                                                        />
                                                        <img
                                                            src={edit}
                                                            onClick={() => {
                                                                setGuiViewIconClicked(
                                                                    false
                                                                );
                                                                setEditClicked(
                                                                    true
                                                                );
                                                                setDeleteClicked(
                                                                    false
                                                                );
                                                                setSelectedRow(
                                                                    row
                                                                );
                                                            }}
                                                            alt=""
                                                            style={{
                                                                width: "25%",
                                                                marginRight:
                                                                    "10%",
                                                            }}
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="bottom"
                                                            title="edit"
                                                        />
                                                        <img
                                                            src={Delete}
                                                            onClick={() => {
                                                                setSelectedRow(
                                                                    row
                                                                );
                                                                axios.delete(
                                                                    `/api/QSBank/${row.id}`
                                                                );

                                                                setGuiViewIconClicked(
                                                                    false
                                                                );
                                                                setEditClicked(
                                                                    false
                                                                );
                                                                window.location.reload();
                                                            }}
                                                            alt=""
                                                            style={{
                                                                width: "20%",
                                                            }}
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="bottom"
                                                            title="delete"
                                                        />
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

            {guiViewIconClicked && !editClicked && !deleteClicked && (
                <div>
                    <ViewAQuestion
                        selectedRow={selectedRow}
                        divheight={divheight}
                    />
                </div>
            )}

            {!guiViewIconClicked && editClicked && !deleteClicked && (
                <div style={{ height: "100%", overflow: "auto" }}>
                    {console.log(selectedRow, "hashfshfa")}
                    <EditQuestions
                        selectedRow={selectedRow}
                        divheight={divheight}
                    />
                </div>
            )}
        </>
    );
};

export default ViewQuestions;
