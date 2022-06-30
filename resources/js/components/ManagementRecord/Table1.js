import React, { useEffect, useState } from "react";
const Table1 = (divheight) => {
    const tableRowHeight = divheight * (92 / 100) * (6.25 / 100);
    // const [data, setData] = useState(undefined);
    var rows = [];
    var arrayofrows = [];
    // if (data != null) {
    //     for (var i = 0; i < data.length; i++) {
    //         for (var j = 0; j < data[i].length; j++) {
    //             rows.push(data[i][j]);
    //         }
    //     }
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

    return (
        <div>
            <div
                style={{
                    width: "100%",
                    height: `${divheight}px`,
                    background: "white",
                }}
            >
                <div
                    style={{
                        width: "98%",
                        height: "92%",
                        margin: "1%",
                    }}
                >
                    <div>
                        <h3>Exams</h3>
                    </div>
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
                                                Title
                                            </th>
                                            <th
                                                scope="col"
                                                style={{
                                                    borderRight: "1px",
                                                    borderStyle: "solid",
                                                    borderColor: "white",
                                                }}
                                            >
                                                Date
                                            </th>
                                            <th
                                                scope="col"
                                                style={{
                                                    borderRight: "1px",
                                                    borderStyle: "solid",
                                                    borderColor: "white",
                                                }}
                                            >
                                                Time
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
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {rows.map((row, index) => (
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
                                                        borderStyle: "solid",
                                                        borderColor: "white",
                                                    }}
                                                >
                                                    {index}
                                                </th>
                                                <td
                                                    style={{
                                                        borderRight: "1px",
                                                        borderStyle: "solid",
                                                        borderColor: "white",
                                                    }}
                                                >
                                                    {row.text}
                                                </td>
                                                <td
                                                    style={{
                                                        borderRight: "1px",
                                                        borderStyle: "solid",
                                                        borderColor: "white",
                                                    }}
                                                >
                                                    {row.choices.map(
                                                        (mcq, index) => {
                                                            return (
                                                                <span
                                                                    key={index}
                                                                >
                                                                    {mcq},
                                                                </span>
                                                            );
                                                        }
                                                    )}
                                                </td>
                                                <td
                                                    style={{
                                                        borderRight: "1px",
                                                        borderStyle: "solid",
                                                        borderColor: "white",
                                                    }}
                                                >
                                                    {row.subject_title}
                                                </td>
                                                <td
                                                    style={{
                                                        borderRight: "1px",
                                                        borderStyle: "solid",
                                                        borderColor: "white",
                                                    }}
                                                >
                                                    {row.difficulty_level}
                                                </td>
                                                <td
                                                    style={{
                                                        borderRight: "1px",
                                                        borderStyle: "solid",
                                                        borderColor: "white",
                                                    }}
                                                >
                                                    {row.duration}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Table1;
