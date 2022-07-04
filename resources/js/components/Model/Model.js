import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Pagination from "../Questions/Pagination";

const Model = ({ divheight }) => {
    const { username, numberOfModels } = useParams();
    // const { fromDashboard } = useLocation().state;
    const location = useLocation();

    console.log(location.state);
    console.log(username, numberOfModels);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(17);
    const [selectedRow, setSelectedRow] = useState({});
    const [modeldata, setModelData] = useState([]);

    const tableRowHeight = divheight * (92 / 100) * (6.25 / 100);

    useEffect(() => {
        axios.get(`/api/examtemp/${numberOfModels}`).then((response) => {
            setModelData(response.data);
        });
    }, []);

    var rows = [];
    modeldata.map((data) => {
        console.log(data, "hiiiiiiiiiiiiii");
        for (var i = 0; i < data.length; i++) {
            rows.push(data[i]);
        }
    });

    //console.log(rows, "ay 7mada");
    // console.log(rows, "tonyyyyyyyyyyyyyyyyyyy");

    var arrayofrows = [];
    var howada = [];

    // for (var i = 0; i < 2; i++) {
    //     arrayofrows.push(rows);
    // }
    // rows = [];
    // for (var i = 0; i < arrayofrows.length; i++) {
    //     for (var j = 0; j < arrayofrows[i].length; j++) {
    //         rows.push(arrayofrows[i][j]);
    //     }
    // }
    // console.log(rows);
    // console.log("lol", howada);
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
                                                    Correct Answer
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
                                            {currentRows.length > 0 &&
                                                currentRows.map(
                                                    (row, index) => (
                                                        <tr
                                                            style={{
                                                                background: `${
                                                                    index % 2 ==
                                                                    0
                                                                        ? "#f7f7f7"
                                                                        : "#ebebeb"
                                                                }`,
                                                                height: `${tableRowHeight}px`,
                                                                lineHeight:
                                                                    "100%",
                                                            }}
                                                            key={index}
                                                        >
                                                            <th
                                                                scope="row"
                                                                style={{
                                                                    borderRight:
                                                                        "1px",
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
                                                                    borderRight:
                                                                        "1px",
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
                                                                    borderRight:
                                                                        "1px",
                                                                    borderStyle:
                                                                        "solid",
                                                                    borderColor:
                                                                        "white",
                                                                }}
                                                            >
                                                                {rows.length >
                                                                    0 &&
                                                                    row.mcq_answers &&
                                                                    row.mcq_answers.map(
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
                                                            </td>
                                                            <td
                                                                style={{
                                                                    borderRight:
                                                                        "1px",
                                                                    borderStyle:
                                                                        "solid",
                                                                    borderColor:
                                                                        "white",
                                                                }}
                                                            >
                                                                {
                                                                    row.correct_answer
                                                                }
                                                            </td>
                                                            <td
                                                                style={{
                                                                    borderRight:
                                                                        "1px",
                                                                    borderStyle:
                                                                        "solid",
                                                                    borderColor:
                                                                        "white",
                                                                }}
                                                            >
                                                                {
                                                                    row.difficulty_level
                                                                }
                                                            </td>
                                                            <td
                                                                style={{
                                                                    borderRight:
                                                                        "1px",
                                                                    borderStyle:
                                                                        "solid",
                                                                    borderColor:
                                                                        "white",
                                                                }}
                                                            >
                                                                {row.duration}
                                                            </td>
                                                        </tr>
                                                    )
                                                )}
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
