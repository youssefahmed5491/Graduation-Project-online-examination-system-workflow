import React from "react";
import img from "./HomePage/LOgodesign1.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div
            id="logo-navbar "
            className="  row"
            style={{ height: "10%", width: "100%" }}
        >
            <div
                id="logo"
                className="col "
                style={{
                    display: "flex",

                    justifyContent: "center",
                }}
            >
                <img
                    className="  "
                    style={{ height: "70%", width: "30%" }}
                    src={img}
                    alt=""
                />
            </div>
            <div id="navbar" className="col " style={{ paddingLeft: "15%" }}>
                <h3 className="mt-3 resizeTextOfNavBar600">
                    <Link to={"/about"} className="bol" href="">
                        <span
                            className="fw-normal"
                            style={{ fontSize: "21px" }}
                        >
                            About
                        </span>
                        <span
                            className="fw-normal"
                            style={{ fontSize: "21px" }}
                        >
                            {" "}
                            I{" "}
                        </span>
                    </Link>

                    <a className="bol" href="">
                        <span
                            className="fw-normal"
                            style={{ fontSize: "21px" }}
                        >
                            Documentation
                        </span>
                        <span
                            className="fw-normal"
                            style={{ fontSize: "21px" }}
                        >
                            {" "}
                            I{" "}
                        </span>
                    </a>

                    <a className="bol" href="">
                        <span
                            className="fw-normal"
                            style={{ fontSize: "21px" }}
                        >
                            Contacts
                        </span>
                        <span
                            className="fw-normal"
                            style={{ fontSize: "21px" }}
                        >
                            {" "}
                            I{" "}
                        </span>
                    </a>

                    <Link to={"/login"} className="bol" href="">
                        <span
                            className="fw-normal"
                            style={{ fontSize: "21px" }}
                        >
                            Login
                        </span>
                        <span
                            className="fw-normal"
                            style={{ fontSize: "21px" }}
                        >
                            {" "}
                            I{" "}
                        </span>
                    </Link>
                </h3>
            </div>
        </div>
    );
};

export default Navbar;
