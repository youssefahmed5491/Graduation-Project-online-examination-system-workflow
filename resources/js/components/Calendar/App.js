import { auto } from "@popperjs/core";
import React, { useEffect, useState } from "react";
import CalenderHeader from "./CalenderHeader";
import Day from "./Day";
import NewEventModal from "./NewEventModal";

const App = ({ profiledata, radio }) => {
    const [nav, setNav] = useState(0); //the mounth we are on
    const [days, setDays] = useState([]); //number of days in a mounth
    const [dateDispaly, setDateDisplay] = useState("");
    const [clicked, setClicked] = useState();
    const [events, setEvents] = useState([]);

    //  console.log(events);
    const eventForDate = (date) => {
        // console.log(events.filter((e) => e.date === date));
        return events.filter((e) => e.date === date);
    };
    const [height, setHeigt] = useState(window.innerHeight);

    const checkSize = () => {
        setHeigt(window.innerHeight);
    };
    let profiletype;
    if (radio === "Doctor") {
        profiletype = "professors";
    } else if (radio === "Student") {
        profiletype = "students";
    } else if (radio === "System Manager") {
        profiletype = "systemmanagers";
    } else if (radio === "Proctor") {
        profiletype = "proctors";
    } else if (radio === "Supervisor") {
        profiletype = "supervisors";
    }
    console.log(profiletype, "hjhjhjhjhjhjhjhjh");
    if (profiletype === "proctors") {
        useEffect(() => {
            axios
                .get(`/api/${profiletype}/${profiledata.id}`)
                .then((response) => {
                    setEvents(response.data);
                });
        }, []);
    } else {
        useEffect(() => {
            axios
                .get(`/api/${profiletype}/${profiledata.id}/subjects`)
                .then((response) => {
                    setEvents(response.data);
                });
        }, []);
    }
    console.log(events);
    useEffect(() => {
        window.addEventListener("resize", checkSize);

        return () => {
            window.removeEventListener("resize", checkSize);
        };
    }, [height]);
    var col = "";
    const divheight = (93 / 100) * height;

    //console.log(col, height, divheight);
    // console.log(events);
    useEffect(() => {
        localStorage.setItem("events", JSON.stringify(events));
    }, [events]);
    useEffect(() => {
        const dt = new Date();
        // window.localStorage.clear();
        const weekdays = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ];

        if (nav !== 0) {
            dt.setMonth(new Date().getMonth() + nav);
        }
        const day = dt.getDate();
        const month = dt.getMonth();
        const year = dt.getFullYear();

        const firstDayOfMonth = new Date(year, month, 1);
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        //const daysInpreviousMonth = new Date(year, month, 0).getDate();

        const dateString = firstDayOfMonth.toLocaleDateString("en-GB", {
            weekday: "long",
            year: "numeric",
            month: "numeric",
            day: "numeric",
        });
        setDateDisplay(
            `${dt.toLocaleDateString("en-GB", { month: "long" })} ${year}`
        );
        const paddingDays = weekdays.indexOf(dateString.split(", ")[0]);

        const daysArr = [];

        for (let i = 1; i <= paddingDays + daysInMonth; i++) {
            var dayString = "";
            if (month + 1 < 10 && i - paddingDays < 10) {
                dayString = `${year}-0${month + 1}-0${i - paddingDays}`;
            } else if (month + 1 >= 10 && i - paddingDays < 10) {
                dayString = `${year}-${month + 1}-0${i - paddingDays}`;
            } else if (month + 1 < 10 && i - paddingDays >= 10) {
                dayString = `${year}-0${month + 1}-${i - paddingDays}`;
            } else {
                dayString = `${year}-${month + 1}-${i - paddingDays}`;
            }
            if (i > paddingDays) {
                daysArr.push({
                    value: i - paddingDays,
                    event: eventForDate(dayString),
                    isCurrentDay: i - paddingDays === day && nav === 0,
                    date: dayString,
                });
            } else {
                daysArr.push({
                    value: "padding",
                    event: null,
                    isCurrentDay: false,
                    date: "",
                });
            }
        }
        setDays(daysArr);
    }, [events, nav]);
    // console.log(days);
    return (
        <>
            <div
                className="row"
                style={{
                    overflowY: "auto",
                    height: `${divheight}px`,
                }}
            >
                <div className="col">
                    <div id="container">
                        <CalenderHeader
                            dateDispaly={dateDispaly}
                            onClose={() => {
                                setClicked(null);
                            }}
                            onNext={() => setNav(nav + 1)}
                            onBack={() => setNav(nav - 1)}
                        />

                        <div id="weekdays">
                            <div>Sun</div>
                            <div style={{ paddingLeft: "5px" }}>Mon</div>
                            <div>Tue</div>
                            <div style={{ paddingLeft: "7px" }}>Wed</div>
                            <div>Thu</div>
                            <div style={{ paddingLeft: "15px" }}>Fri</div>
                            <div style={{ paddingLeft: "20px" }}>Sat</div>
                        </div>
                        <div id="calendar">
                            {days.map((day, index) => (
                                <Day
                                    key={index}
                                    day={day}
                                    onClick={() => setClicked(day.date)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                {clicked && (
                    <div>
                        <NewEventModal
                            onClose={() => {
                                setClicked(null);
                            }}
                            onSave={(title, time) => {
                                setEvents([
                                    ...events,
                                    { title, time, date: clicked },
                                ]);
                                setClicked(null);
                            }}
                            length={eventForDate(clicked).length}
                            onDelete={(index) => {
                                let lol = eventForDate(clicked);
                                let lool = lol.filter(
                                    (e) => e.title === lol[index].title
                                );
                                setEvents(events.filter((e) => e !== lool[0]));
                                setClicked(null);
                            }}
                            eventText={eventForDate(clicked)}
                            clicked={clicked}
                        />
                    </div>
                )}
            </div>
        </>
    );
};
export default App;
