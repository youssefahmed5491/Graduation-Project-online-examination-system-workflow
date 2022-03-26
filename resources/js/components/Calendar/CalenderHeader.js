import React from "react";
import blackTriangle from "./blackTriangle.png";
const CalenderHeader = ({ dateDispaly, onNext, onBack, onClose }) => {
    return (
        <div id="header">
            <div id="monthDisplay">{dateDispaly}</div>
            <div>
                <div>
                    <img
                        src={blackTriangle}
                        onClick={onBack}
                        onClickCapture={onClose}
                        alt=""
                        style={{
                            height: "30px",
                            width: "20px",
                            transform: "rotate(-90deg)",
                            marginRight: "60px",
                        }}
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Back 1 Month"
                    />
                    <img
                        src={blackTriangle}
                        onClick={onNext}
                        onClickCapture={onClose}
                        alt=""
                        style={{
                            height: "30px",
                            width: "20px",
                            transform: "rotate(90deg)",
                            marginRight: "75px",
                        }}
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Forward 1 Month"
                    />

                    {/* <button
                        className="button"
                        onClick={onNext}
                        onClickCapture={onClose}
                        id="nextButton"
                    >
                        Next
                    </button> */}
                </div>
            </div>
        </div>
    );
};

export default CalenderHeader;
