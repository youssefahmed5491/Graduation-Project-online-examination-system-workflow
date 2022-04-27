import React from "react";
import { useParams } from "react-router-dom";
import logo from "../HomePage/2560px-Adidas_Logo.svg.png";

const ExamPaper = () => {
    const { username } = useParams();
    return (
        <div className="container-fluid vh-100 " style={{ overflow: "hidden" }}>
            {/* navbar section */}
            <div className="row bg-primary " style={{ height: "7%" }}>
                <div
                    className="  d-flex  align-items-center h-100 "
                    style={{ backgroundColor: "#6bfff5" }}
                >
                    <img
                        src={logo}
                        alt=""
                        style={{ width: "10%" }}
                        className="h-75  m-5"
                    />
                </div>
            </div>
            {/* navbar section */}
            <div className="row  " style={{ height: "93%" }}></div>
        </div>
    );
};

export default ExamPaper;
