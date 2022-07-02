import React, { useEffect, useState } from "react";
const Table1 = (divheight, username) => {
    const tableRowHeight = divheight.divheight * (92 / 100) * (6.25 / 100);
    const [subjectdetails, setSubjectDetails] = useState([]);
    // console.log(divheight.username, "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
    const req = {
        username: divheight.username,
    };
    useEffect(() => {
        axios.post("/api/supervisors ", req).then((response) => {
            setSubjectDetails(response.data);
            // console.log(response.data, "777777777777777777777777777");
        });
    }, []);
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
        subject: subjectdetails[0],
        assignedproctors: subjectdetails[1],
        examstatus: subjectdetails[2],
    };

    rows.push(row);

    return (
        <div>
            <div
                style={{
                    width: "100%",
                    height: `${divheight.divheight}px`,
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
                                                Exam Status
                                            </th>
                                            <th
                                                scope="col"
                                                style={{
                                                    borderRight: "1px",
                                                    borderStyle: "solid",
                                                    borderColor: "white",
                                                }}
                                            >
                                                Assigned Proctors
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
                                                <td
                                                    style={{
                                                        borderRight: "1px",
                                                        borderStyle: "solid",
                                                        borderColor: "white",
                                                    }}
                                                >
                                                    {row.subject}
                                                </td>
                                                <td
                                                    style={{
                                                        borderRight: "1px",
                                                        borderStyle: "solid",
                                                        borderColor: "white",
                                                    }}
                                                >
                                                    {row.examstatus}
                                                </td>
                                                <td
                                                    style={{
                                                        borderRight: "1px",
                                                        borderStyle: "solid",
                                                        borderColor: "white",
                                                    }}
                                                >
                                                    {row.assignedproctors}
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
