import { left } from "@popperjs/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ProfileBackground from "./111.png";
import ProfilePicture from "./7oda.png";
const ProfilePage = ({ username, type }) => {
    let profiletype;
    if (type === "Doctor") {
        profiletype = "professors";
    } else if (type === "Student") {
        profiletype = "students";
    } else if (type === "System Manager") {
        profiletype = "systemmanagers";
    } else if (type === "Proctor") {
        profiletype = "proctors";
    } else if (type === "Supervisor") {
        profiletype = "supervisors";
    }
    console.log(username);
    const [profiledata, setProfiledata] = useState([]);
    useEffect(() => {
        axios.post(`/api/${profiletype}`, { username }).then((response) => {
            setProfiledata(response.data);
            console.log(response.data);
        });
    }, []);

    const user = {
        FirstName: profiledata.username,
        ID: profiledata.id,
        Email: profiledata.email,
        University: "Software engineering",
        College: "Engeneer",
        Departement: "Computer",
    };
    return (
        <>
            <div
                className="position-absolute "
                style={{
                    height: "25%",
                    top: "20%",
                    left: "50%",
                }}
            >
                <img
                    className="h-100 rounded-circle"
                    src={ProfilePicture}
                    alt=""
                    style={{ border: "solid 3px white" }}
                />
            </div>
            <div className="  " style={{ height: "20%" }}>
                <img className="h-100 w-100" src={ProfileBackground} alt="" />
            </div>
            <div className="row  h-100" style={{ marginTop: "20%" }}>
                <div className="col m-3 h-50">
                    <h2>Basic Information</h2>
                    <div className="h-50">
                        <div
                            className="row  mx-1 mb-1 d-flex align-items-center"
                            style={{
                                height: "33.33%",
                                backgroundColor: "white",
                            }}
                        >
                            <div className="col">First Name</div>
                            <div className="col">{user.FirstName}</div>
                        </div>
                        <div
                            className="row  mx-1 mb-1 d-flex align-items-center"
                            style={{
                                height: "33.33%",
                                backgroundColor: "white",
                            }}
                        >
                            <div className="col">ID</div>
                            <div className="col">{user.ID}</div>
                        </div>
                        <div
                            className="row  mx-1 mb-1 d-flex align-items-center"
                            style={{
                                height: "33.33%",
                                backgroundColor: "white",
                            }}
                        >
                            <div className="col">Email</div>
                            <div className="col">{user.Email}</div>
                        </div>
                    </div>
                </div>
                <div className="col m-3 h-50">
                    <h2>College Information</h2>
                    <div className="h-50">
                        <div
                            className="row  mx-1 mb-1 d-flex align-items-center"
                            style={{
                                height: "33.33%",
                                backgroundColor: "white",
                            }}
                        >
                            <div className="col">University</div>
                            <div className="col">{user.University}</div>
                        </div>
                        <div
                            className="row  mx-1 mb-1 d-flex align-items-center"
                            style={{
                                height: "33.33%",
                                backgroundColor: "white",
                            }}
                        >
                            <div className="col">College</div>
                            <div className="col">{user.College}</div>
                        </div>
                        <div
                            className="row  mx-1 mb-1 d-flex align-items-center"
                            style={{
                                height: "33.33%",
                                backgroundColor: "white",
                            }}
                        >
                            <div className="col">Departement</div>
                            <div className="col">{user.Departement}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfilePage;
