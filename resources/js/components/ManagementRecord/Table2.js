import React, { useEffect, useState } from "react";
const Table2 = (divheight) => {
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
    const [professors, setProfessors] = useState([]);

    useEffect(() => {
        axios.get(`api/professors `).then((response) => {
            setProfessors(response.data);
            console.log(response.data, "777777777777777777777777777");
        });
    }, []);
    for (let i = 0; i < professors.length; i++) {
        const row = {
            id: 1,
            username: professors[i].username,
            email: professors[i].email,
            password: professors[i].password,
        };

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
                        <h3>Doctors</h3>
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
                                                Username
                                            </th>
                                            <th
                                                scope="col"
                                                style={{
                                                    borderRight: "1px",
                                                    borderStyle: "solid",
                                                    borderColor: "white",
                                                }}
                                            >
                                                Email
                                            </th>
                                            <th
                                                scope="col"
                                                style={{
                                                    borderRight: "1px",
                                                    borderStyle: "solid",
                                                    borderColor: "white",
                                                }}
                                            >
                                                Password
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
                                                    {row.username}
                                                </td>
                                                <td
                                                    style={{
                                                        borderRight: "1px",
                                                        borderStyle: "solid",
                                                        borderColor: "white",
                                                    }}
                                                >
                                                    {row.email}
                                                </td>
                                                <td
                                                    style={{
                                                        borderRight: "1px",
                                                        borderStyle: "solid",
                                                        borderColor: "white",
                                                    }}
                                                >
                                                    {row.password}
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

export default Table2;
