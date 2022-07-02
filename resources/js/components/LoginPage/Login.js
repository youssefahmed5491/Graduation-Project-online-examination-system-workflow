import React, { useEffect, useState } from "react";
import axios from "axios";
import img from "./image.png";
import eye from "./eye.png";
import hiddeneye from "./hidden eye.png";
import Select from "react-select";

const Login = () => {
    const [height, setHeigt] = useState(window.innerHeight);
    const [width, setWidth] = useState(window.innerWidth);
    const [toggle, setToggle] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [radio, setRadio] = useState("");
    const [userNameError, setUserNameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [radioError, setRadioError] = useState("");

    let size = 100;

    const checkSize = () => {
        setHeigt(window.innerHeight);
        setWidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener("resize", checkSize);

        return () => {
            window.removeEventListener("resize", checkSize);
        };
    }, [height]);
    let row = "row";
    let col = "col";

    if (height < 605) {
        row = "";
        col = "";
        size = 0;
    }
    if (width < 1100) {
        row = "";
        col = "";
        size = 0;
    }
    if (height < 605 && width < 1570) {
        row = "";
        col = "";
        size = 0;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const request = {
            username: username,
            password: password,
            type: radio,
        };

        if (username && password && radio) {
            axios.post("/api/login", request).then((response) => {
                if (response.data == "") {
                    alert("Invalid Username or Password");
                } else {
                    // localStorage.setItem(
                    //     "professor",
                    //     JSON.stringify(professor)
                    // );

                    document.getElementById("nameForm").submit();
                }
            });
        } else {
            if (!username) {
                setUserNameError("error");
            }
            if (!password) {
                setPasswordError("error");
            }
            if (!radio) {
                setRadioError("error");
            }
        }
    };
    const eyetoggle = (e) => {
        e.preventDefault();
        setToggle(!toggle);
    };
    return (
        <section
            className="container"
            style={{ height: "100vh", width: "100vw" }}
        >
            <div
                id="first-square"
                className="w-75 position-absolute top-0 end-0 me-5 opacity-50"
                style={{
                    backgroundColor: "#3dbfb6",
                    height: "33%",
                }}
            ></div>
            <div
                id="last-square"
                className="w-75 position-absolute bottom-0 opacity-50 start-0 ms-5"
                style={{
                    backgroundColor: "#c64200",
                    height: "33%",
                }}
            ></div>
            <div
                id="image-form"
                className={row}
                style={{
                    height: "75%",
                    width: "75%",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <div
                    className={col}
                    style={{ height: `${size}%`, padding: "0px" }}
                >
                    <img
                        src={img}
                        alt=""
                        className="w-100 h-100 "
                        style={{ objectFit: "cover" }}
                    />
                </div>
                <div
                    className={col}
                    style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "#F8F9FA",
                    }}
                >
                    <form
                        className="pt-5 "
                        id="nameForm"
                        action={`/${username}-${radio}`}
                        // ${radio === "Student" ? `/${username}-${radio}` : ""}`}
                        style={{
                            paddingLeft: "5%",
                        }}
                        onSubmit={handleSubmit}
                    >
                        <div>
                            <h1>Login</h1>
                        </div>
                        <div className="mb-3 mt-5">
                            <input
                                type="text"
                                className={`form-control ${userNameError}`}
                                id="inputUsername"
                                placeholder="UserName"
                                style={{
                                    borderStyle: "outset",
                                    borderLeft: "none",
                                    borderRight: "none",
                                    borderTop: "none",
                                    borderRadius: "0",
                                }}
                                onChange={(e) => {
                                    setUsername(e.target.value),
                                        setUserNameError("");
                                }}
                            />
                            {userNameError && (
                                <div className="emptyfield">
                                    Please enter username
                                </div>
                            )}
                        </div>
                        <div className="mb-3 mt-4 ">
                            <input
                                type={toggle ? "password" : "text"}
                                className={`form-control form-check-inline ${passwordError}`}
                                id="inputPassword"
                                placeholder="Password"
                                style={{
                                    borderStyle: "outset",
                                    borderLeft: "none",
                                    borderRight: "none",
                                    borderTop: "none",
                                    borderRadius: "0",
                                    width: "94%",
                                    margin: "0",
                                    padding: "0",
                                    height: "38px",
                                }}
                                onChange={(e) => {
                                    setPassword(e.target.value),
                                        setPasswordError("");
                                }}
                            />
                            <button
                                className="form-check-inline"
                                onClick={eyetoggle}
                                style={{
                                    border: "0",
                                    background: "white",
                                    margin: "0",
                                    padding: "0",
                                    height: "38px",
                                }}
                            >
                                {toggle ? (
                                    <img
                                        src={eye}
                                        alt=""
                                        style={{ width: "25px" }}
                                    />
                                ) : (
                                    <img
                                        src={hiddeneye}
                                        alt=""
                                        style={{
                                            width: "25px",
                                            height: "18px",
                                        }}
                                    />
                                )}
                            </button>
                            {passwordError && (
                                <div className="emptyfield">
                                    Please enter password
                                </div>
                            )}
                        </div>
                        <div className="mt-4">
                            <Select
                                className={radioError}
                                options={[
                                    { value: "Student", label: "Student" },
                                    { value: "Doctor", label: "Doctor" },
                                    {
                                        value: "System Manager",
                                        label: "System Manager",
                                    },
                                    { value: "Proctor", label: "Proctor" },
                                    {
                                        value: "Supervisor",
                                        label: "Supervisor",
                                    },
                                ]}
                                placeholder={"eg:Student"}
                                onChange={(e) => {
                                    setRadio(e.value), setRadioError("");
                                }}
                            />
                            {radioError && (
                                <div className="emptyfield">
                                    Please select one option
                                </div>
                            )}
                        </div>

                        <div className="mt-4 ">
                            <button
                                type="submit"
                                className="btn btn-primary px-5 pt-1"
                                style={{
                                    marginLeft: "35%",
                                    borderRadius: "16px",
                                    fontSize: "25px",
                                }}
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;
