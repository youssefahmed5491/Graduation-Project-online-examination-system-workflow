import React, { useEffect, useState } from "react";
import CalenderHeader from "./CalenderHeader";
import Day from "./Day";
import NewEventModal from "./NewEventModal";

const App = () => {
    const [nav, setNav] = useState(0); //the mounth we are on
    const [days, setDays] = useState([]); //number of days in a mounth
    const [dateDispaly, setDateDisplay] = useState("");
    const [clicked, setClicked] = useState();
    const [events, setEvents] = useState(
        localStorage.getItem("events")
            ? JSON.parse(localStorage.getItem("events"))
            : []
    );
    console.log(events);
    const eventForDate = (date) => {
        // console.log(events.filter((e) => e.date === date));
        return events.filter((e) => e.date === date);
    };
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
    var col = "";
    if (height < 775) {
        col = "col";
    }
    console.log(col, height);
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
            const dayString = `${i - paddingDays}/${month + 1}/${year}`;

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
    console.log(clicked);
    return (
        <>
            <div className="row">
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
                            <div style={{ paddingLeft: "17px" }}>Mon</div>
                            <div>Tue</div>
                            <div style={{ paddingLeft: "17px" }}>Wed</div>
                            <div>Thu</div>
                            <div style={{ paddingLeft: "25px" }}>Fri</div>
                            <div style={{ paddingLeft: "30px" }}>Sat</div>
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
                    <div className={col}>
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
