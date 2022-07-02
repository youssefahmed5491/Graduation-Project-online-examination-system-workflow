import React from "react";
import { useCallback } from "react";
import { useTimer } from "react-timer-hook";
import { useNavigate } from "react-router-dom";

const Timer = ({ expiryTimestamp }) => {
    const navigate = useNavigate();
    const handleOnClick = useCallback(
        () => navigate("/", { replace: true }),
        [navigate]
    );
    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({
        expiryTimestamp,
        onExpire: () => handleOnClick(),
    });
    return (
        <div>
            <div style={{ fontSize: "30px" }}>
                <span>{hours}</span>:<span>{minutes}</span>:
                <span>{seconds}</span>
            </div>
        </div>
    );
};

export default Timer;
