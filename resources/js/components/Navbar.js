import React from "react";
import img from "./HomePage/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        /* new   w-100*/
        <div id="logo-navbar" className="h-25 w-100  row">
            <div
                id="logo"
                className="col "
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <img className="  h-50 w-50 " src={img} alt="" />
            </div>
            <div id="navbar" className="col  ">
                <h3 className="mt-3 resizeTextOfNavBar600">
                    <Link to={"/about"} className="bol" href="">
                        <span>About</span>
                        <span> I </span>
                    </Link>

                    <a className="bol" href="">
                        <span>Documentation</span>
                        <span> I </span>
                    </a>

                    <a className="bol" href="">
                        <span>Contacts</span>
                        <span> I </span>
                    </a>

                    <Link to={"/login"} className="bol" href="">
                        <span>Login</span>
                        <span> I </span>
                    </Link>
                </h3>
            </div>
        </div>
    );
};

export default Navbar;
