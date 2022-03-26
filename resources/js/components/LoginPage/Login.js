import React, { useEffect, useState } from "react";
import img from "./image.png";
import eye from "./eye.png";
import hiddeneye from "./hidden eye.png";
import { Link } from "react-router-dom";

const Login = () => {
    const [height, setHeigt] = useState(window.innerHeight);
    const [width, setWidth] = useState(window.innerWidth);
    const [toggle, setToggle] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [radio, setRadio] = useState("");
    console.log(username, password, radio);
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

        document.getElementById("nameForm").submit();
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
                                className="form-control"
                                id="inputUsername"
                                placeholder="UserName"
                                style={{
                                    borderStyle: "outset",
                                    borderLeft: "none",
                                    borderRight: "none",
                                    borderTop: "none",
                                    borderRadius: "0",
                                }}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3 mt-5 ">
                            <input
                                type={toggle ? "password" : "text"}
                                className="form-control form-check-inline"
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
                                onChange={(e) => setPassword(e.target.value)}
                                required
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
                        </div>
                        {/* <div className="form-check form-check-inline mt-5">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="Student"
                onChange={(e) => setRadio(e.target.value)}
              />
              <label className="form-check-label" htmlFor="inlineRadio1">
                Student
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="Doctor"
                onChange={(e) => setRadio(e.target.value)}
              />
              <label className="form-check-label" htmlFor="inlineRadio2">
                Doctor
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio3"
                value="System Manager"
                onChange={(e) => setRadio(e.target.value)}
              />
              <label className="form-check-label" htmlFor="inlineRadio3">
                System Manager
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input "
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio3"
                value="Proctor"
                onChange={(e) => setRadio(e.target.value)}
              />
              <label className="form-check-label" htmlFor="inlineRadio3">
                Proctor
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio3"
                value="Supervisor"
                onChange={(e) => setRadio(e.target.value)}
              />
              <label className="form-check-label" htmlFor="inlineRadio3">
                Supervisor
              </label>
            </div> */}

                        <select
                            className="form-select"
                            id="validationCustom04"
                            onChange={(e) => setRadio(e.target.value)}
                            required
                        >
                            <option selected disabled value="">
                                ...
                            </option>
                            <option value="Student">Student</option>
                            <option value="Doctor">Doctor</option>
                            <option value="System Manager">
                                System Manager
                            </option>
                            <option value="Proctor">Proctor</option>
                            <option value="Supervisor">Supervisor</option>
                        </select>

                        <div className="mt-5 ">
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
