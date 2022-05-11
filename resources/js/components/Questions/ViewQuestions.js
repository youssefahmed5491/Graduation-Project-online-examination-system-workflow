import React, { useEffect, useState } from "react";

import Pagination from "./Pagination";
import EditQuestions from "./EditQuestions";
import AddQuestions from "./AddQuestions";

import guiViewIcon from "./viewquestions/gui_view_icon_158340.png";
import edit from "./viewquestions/edit.png";
import Delete from "./viewquestions/Delete-Alt-256.png";

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
    const [deleteClicked, setdeleteClicked] = useState(false);
    const tableRowHeight = divheight.divheight * (92 / 100) * (6.25 / 100);
    const displaynone = `${
        guiViewIconClicked || editClicked || deleteClicked ? "displaynone" : ""
    }`;
    const guiViewIconclassname = `${
        guiViewIconClicked ? "show" : "displaynone"
    }`;
    const editclassname = `${editClicked ? "show" : "displaynone"}`;
    const deletelassname = `${deleteClicked ? "show" : "displaynone"}`;

    var rows = [];
    const row = {
        id: 1,
        Questions: "Lorem Epsium Lorem Epsium",
        Answer: "Lorem Epsium",
        Subject: "Software engineering",
        Difficulty: "Hard",
        Duration: "10 min",
        Status: "Active",
    };
    for (var i = 0; i < 200; i++) {
        rows.push(row);
    }
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
                        height: `${divheight.divheight}px`,
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
                                                <th
                                                    scope="col"
                                                    style={{
                                                        borderRight: "1px",
                                                        borderStyle: "solid",
                                                        borderColor: "white",
                                                    }}
                                                >
                                                    Status
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
                                                    <td
                                                        style={{
                                                            borderRight: "1px",
                                                            borderStyle:
                                                                "solid",
                                                            borderColor:
                                                                "white",
                                                        }}
                                                    >
                                                        {row.Status}
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
                                                                setdeleteClicked(
                                                                    false
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
                                                                setdeleteClicked(
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
                                                                setGuiViewIconClicked(
                                                                    false
                                                                );
                                                                setEditClicked(
                                                                    false
                                                                );
                                                                setdeleteClicked(
                                                                    true
                                                                );
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
            <div className={guiViewIconclassname}>view clicked</div>
            <div className={editclassname}>
                <EditQuestions selectedRow={selectedRow} />
            </div>
            <div className={deletelassname}>delete clicked</div>
        </>
    );
};

export default ViewQuestions;
