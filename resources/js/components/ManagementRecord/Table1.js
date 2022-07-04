import axios from "axios";
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
    const [subjects, setSubjects] = useState([]);
    // const [status, setStatus] = useState();
    const isToday = (someDate) => {
        const today = new Date();
        someDate = someDate.split("-");

        if (
            (someDate[2] < today.getDate() &&
                someDate[1] - 1 == today.getMonth() &&
                someDate[0] == today.getFullYear()) ||
            (someDate[1] - 1 < today.getMonth() &&
                someDate[0] == today.getFullYear()) ||
            someDate[0] < today.getFullYear()
        ) {
            return "finished";
        } else {
            return "unfinished";
        }
    };
    useEffect(() => {
        axios.get(`/api/subjects`).then((response) => {
            setSubjects(response.data);
            //  console.log(response.data);
        });
    }, []);

    const statusforsubject = (x) => {
        axios.get(`/api/status/${x}`).then((response) => {
            setStatus = response.data;
        });
    };
    //const today = new Date();
    let hmada = 0;
    if (subjects.length > 0) {
        for (let i = 0; i < subjects.length; i++) {
            const row = {
                id: subjects[i].id,
                title: subjects[i].title,
                code: subjects[i].uid,
                date: subjects[i].date,
                time: subjects[i].time,
                duration: subjects[i].duration,

                status: isToday(subjects[i].date),
                // Date :subjects[i]
                // Date :subjects[i]
            };

            //  console.log(statusforsubject(subjects[i].id), "5555555555555");
            console.log(isToday(row.date), "88888888888888888888888888888");
            rows.push(row);
        }
    }
    console.log(rows);
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
                                                Subject Code
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
                                                    {row.title}
                                                </td>
                                                <td
                                                    style={{
                                                        borderRight: "1px",
                                                        borderStyle: "solid",
                                                        borderColor: "white",
                                                    }}
                                                >
                                                    {row.code}
                                                </td>
                                                <td
                                                    style={{
                                                        borderRight: "1px",
                                                        borderStyle: "solid",
                                                        borderColor: "white",
                                                    }}
                                                >
                                                    {row.date}
                                                </td>
                                                <td
                                                    style={{
                                                        borderRight: "1px",
                                                        borderStyle: "solid",
                                                        borderColor: "white",
                                                    }}
                                                >
                                                    {row.time}
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
                                                <td
                                                    style={{
                                                        borderRight: "1px",
                                                        borderStyle: "solid",
                                                        borderColor: "white",
                                                    }}
                                                >
                                                    {row.status}
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
