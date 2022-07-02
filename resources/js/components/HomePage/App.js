import "bootstrap/dist/css/bootstrap.css";
import img from "./LOgodesign1.png";
import img2 from "./herotest.png";
import img3 from "./vector-link-nodes-icon-symbol-flat-pictogram-isolated-white-background-designed-simple-style-139861986.jpg";
import img4 from "./question-mark-icon-vector-question-illustration-vector-symbol-question-mark-icon-vector-question-illustration-symbol-139902851.jpg";
import "../../style.css";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import Navbar from "../Navbar";

import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

function App() {
    const [height, setHeigt] = useState(window.innerHeight);
    const [width, setWidth] = useState(window.innerWidth);

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

    if (height < 605 || width < 1400) {
        row = "";
        col = "";
    }

    const pdfExportComponent = useRef(null);
    const handleE = (e) => {
        pdfExportComponent.current.save();
    };

    return (
        <>
            <section className="">
                {/* ////////////First Screen///////////// */}

                <div
                    id="wrap-logo-navbar-photo"
                    className="pt-4"
                    style={{ height: "100vh" }}
                >
                    <Navbar />
                    <div
                        id="photo"
                        className=" row"
                        style={{ height: "90%", width: "100%" }}
                    >
                        <div className=" d-flex justify-content-center align-items-center">
                            <img
                                src={img2}
                                className=" h-100 p-0 "
                                style={{ width: "60%" }}
                                alt=""
                            />
                        </div>

                        <div
                            className="position-absolute  overflow-hidden  w-50  m-4  "
                            style={{
                                height: "70%",
                                paddingLeft: "15%",
                                paddingTop: "10%",
                            }}
                        >
                            <h3
                                className="fw-bold resizeTextOfPhoto600 "
                                style={{ color: "#3dbfb6" }}
                            >
                                Easiest Most Responsive Online Examination
                                Solution
                            </h3>
                            <Link to={"/login"}>
                                <button
                                    className=" rsizebutton rounded-pill fw-bold"
                                    style={{
                                        background: "#3dbfb6",
                                        color: "white",
                                        fontSize: "30px",
                                        marginLeft: "15%",
                                        marginTop: "10%",
                                    }}
                                >
                                    Get Started
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* ////////////End First Screen///////////// */}

                {/* ////////////Second Screen///////////// */}
                <div
                    id="wrap-about-description-div"
                    className="container"
                    style={{ height: "100vh" }}
                >
                    <div
                        id="about-div"
                        className={row}
                        style={{
                            height: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <div id="about-write" className={col} style={{}}>
                            <h3
                                className="fw-bold"
                                style={{ fontSize: "34px" }}
                            >
                                Who we are
                            </h3>
                            <div className="" style={{ fontSize: "21px" }}>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Voluptate ipsa quis quaerat,
                                perferendis blanditiis deserunt quam doloremque
                                dolor deleniti fugiat ullam soluta, pariatur,
                                dolorum dicta porro explicabo inventore cum.
                                Enim.
                            </div>
                            <span
                                style={{
                                    display: "flex",
                                    justifyContent: "right",
                                    fontSize: "16px",
                                }}
                            >
                                <a href="" className="">
                                    read more ...
                                </a>
                            </span>
                        </div>
                        <div
                            id="about-logo "
                            className={col}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <img
                                className="h-50 w-50 hideat600"
                                style={{
                                    maxWidth: "100%",
                                    height: "auto",
                                    objectFit: "cover",
                                }}
                                src={img3}
                                alt=""
                            />
                        </div>
                    </div>
                    <div
                        id="description-div"
                        className={row}
                        style={{
                            height: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <div
                            id="description-logo"
                            className={col}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <img
                                className="h-50 w-50 hideat600"
                                style={{
                                    maxWidth: "100%",
                                    objectFit: "cover",
                                }}
                                src={img4}
                                alt=""
                            />
                        </div>
                        <div id="description-write" className={col}>
                            <h3
                                className="fw-bold"
                                style={{ fontSize: "34px" }}
                            >
                                Who we are
                            </h3>
                            <div className="" style={{ fontSize: "21px" }}>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Voluptate ipsa quis quaerat,
                                perferendis blanditiis deserunt quam doloremque
                                dolor deleniti fugiat ullam soluta, pariatur,
                                dolorum dicta porro explicabo inventore cum.
                                Enim.
                            </div>
                            <span
                                style={{
                                    display: "flex",
                                    justifyContent: "right",
                                    fontSize: "16px",
                                }}
                            >
                                <a href="" className="">
                                    read more ...
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
                {/* ////////////End Second Screen///////////// */}

                {/* //////////// Final Screen///////////// */}
                <div
                    className=""
                    style={{
                        height: "57vh",
                        width: "99 vw",
                        backgroundColor: "#e1fffd",
                        margin: "0px",
                    }}
                >
                    <div className="row h-100 pt-5 m-0">
                        <div
                            id="logobot"
                            className="col "
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <img
                                className="    resizeTextOfLogoPhoto "
                                src={img}
                                style={{ height: "50px", width: "150px" }}
                                alt=""
                            />
                        </div>

                        <div className="col pt-5 ">
                            <h4 className="pt-4 resizeTextOfLastSection">
                                Support
                            </h4>
                            <h4 className="pt-2 resizeTextOfLastSection">
                                Privacy
                            </h4>
                            <h4 className="pt-2 resizeTextOfLastSection">
                                Contact
                            </h4>
                            <h4 className="pt-2 resizeTextOfLastSection">
                                About
                            </h4>
                            <h4 className="pt-2 resizeTextOfLastSection">
                                TradeMark
                            </h4>
                        </div>
                        <div className="col pt-5">
                            <h4 className="pt-4 resizeTextOfLastSection">
                                Support
                            </h4>
                            <h4 className="pt-2 resizeTextOfLastSection">
                                Privacy
                            </h4>
                            <h4 className="pt-2 resizeTextOfLastSection">
                                Contact
                            </h4>
                            <h4 className="pt-2 resizeTextOfLastSection">
                                About
                            </h4>
                            <h4 className="pt-2 resizeTextOfLastSection">
                                TradeMark
                            </h4>
                        </div>
                        <div className="col pt-5 px-0 ">
                            <h4 className="pt-4 resizeTextOfLastSection">
                                Support
                            </h4>
                            <h4 className="pt-2 resizeTextOfLastSection">
                                Privacy
                            </h4>
                            <h4 className="pt-2 resizeTextOfLastSection">
                                Contact
                            </h4>
                            <h4 className="pt-2 resizeTextOfLastSection">
                                About
                            </h4>
                            <h4 className="pt-2 resizeTextOfLastSection">
                                TradeMark
                            </h4>
                        </div>
                    </div>
                </div>

                {/* ////////////End Final Screen///////////// */}
            </section>
        </>
    );
}

export default App;
