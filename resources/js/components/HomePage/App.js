import "bootstrap/dist/css/bootstrap.css";
import img from "./2560px-Adidas_Logo.svg.png";
import img2 from "./mainimage blurred.png";
import img3 from "./vector-link-nodes-icon-symbol-flat-pictogram-isolated-white-background-designed-simple-style-139861986.jpg";
import img4 from "./question-mark-icon-vector-question-illustration-vector-symbol-question-mark-icon-vector-question-illustration-symbol-139902851.jpg";
import "../../style.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../Navbar";

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
    return (
        <>
            <section className="container-fluid">
                {/* ////////////First Screen///////////// */}

                <div
                    id="wrap-logo-navbar-photo"
                    className="container  "
                    style={{ height: "100vh" }}
                >
                    <Navbar />
                    <div id="photo" className="h-75 row ">
                        <img src={img2} className="w-100 h-100 p-0" alt="" />
                        <div
                            className="position-absolute  overflow-hidden  w-50  m-4"
                            style={{ height: "70%" }}
                        >
                            <h1
                                className="resizeTextOfPhoto600"
                                style={{ color: "#6bfff5" }}
                            >
                                Easiest Most Responsive Online Examination
                                Solution
                            </h1>
                            <button
                                className="m-5 rsizebutton rounded-pill"
                                style={{
                                    background: "#3dbfb6",
                                    color: "white",
                                    fontSize: "30px",
                                }}
                            >
                                Get Started
                            </button>
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
                        style={{ height: "50%" }}
                    >
                        <div id="about-write" className={col}>
                            <h1 className="">Who we are</h1>
                            <h3 className="">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Voluptate ipsa quis quaerat,
                                perferendis blanditiis deserunt quam doloremque
                                dolor deleniti fugiat ullam soluta, pariatur,
                                dolorum dicta porro explicabo inventore cum.
                                Enim.
                            </h3>
                            <span
                                style={{
                                    display: "flex",
                                    justifyContent: "right",
                                    fontSize: "30px",
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
                                style={{ maxWidth: "100%", height: "auto" }}
                                src={img3}
                                alt=""
                            />
                        </div>
                    </div>
                    <div
                        id="description-div"
                        className={row}
                        style={{ height: "50%" }}
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
                                style={{ maxWidth: "100%" }}
                                src={img4}
                                alt=""
                            />
                        </div>
                        <div id="description-write" className={col}>
                            <h1>Who we are</h1>
                            <h3>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Eveniet cupiditate ab id
                                libero unde voluptas eaque corrupti debitis quae
                                maxime repudiandae possimus animi error
                                voluptates exercitationem ea soluta, mollitia
                                asperiores.
                            </h3>
                            <span
                                style={{
                                    display: "flex",
                                    justifyContent: "right",
                                    fontSize: "30px",
                                }}
                            >
                                <a href="">read more ...</a>
                            </span>
                        </div>
                    </div>
                </div>
                {/* ////////////End Second Screen///////////// */}

                {/* //////////// Final Screen///////////// */}
                <div
                    className="container"
                    style={{ height: "57vh", backgroundColor: "#e1fffd" }}
                >
                    <div className="row h-100 pt-5">
                        <div
                            id="logobot"
                            className="col "
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <img
                                className="  resizeTextOfLogoPhoto "
                                src={img}
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
                    </div>
                </div>

                {/* ////////////End Final Screen///////////// */}
            </section>
        </>
    );
}

export default App;
