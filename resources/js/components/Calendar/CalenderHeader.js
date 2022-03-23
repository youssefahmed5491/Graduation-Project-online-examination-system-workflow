import React from "react";

const CalenderHeader = ({ dateDispaly, onNext, onBack, onClose }) => {
    return (
        <div id="header">
            <div id="monthDisplay">{dateDispaly}</div>
            <div>
                <div>
                    <button
                        className="button"
                        onClick={onBack}
                        onClickCapture={onClose}
                        id="backButton"
                    >
                        Back
                    </button>
                    <span style={{ fontSize: "22px" }}>Month</span>
                    <button
                        className="button"
                        onClick={onNext}
                        onClickCapture={onClose}
                        id="nextButton"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CalenderHeader;
