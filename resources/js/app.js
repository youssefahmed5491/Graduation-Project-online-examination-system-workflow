// /
//  * First we will load all of this project's JavaScript dependencies which
//  * includes React and other helpers. It's a great starting point while
//  * building robust, powerful web applications using React + Laravel.
//  */

require("./bootstrap");

// /
//  * Next, we will create a fresh React component instance and attach it to
//  * the page. Then, you may begin adding components to this application
//  * or customize the JavaScript scaffolding to fit your unique needs.
//  */

import ReactDOM from "react-dom";
import Login from "./components/LoginPage/Login";
import React from "react";
import App from "./components/HomePage/App";
import AllUsersHome from "./components/MainPage/AllUsersHome";
import ExamPaper from "./components/ExamPaper/ExamPaper";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

if (document.getElementById("app")) {
<<<<<<< HEAD
<<<<<<< HEAD
    ReactDOM.render(
        <React.StrictMode>
            <Router>
                <Routes>
                    <Route exact path="/" element={<App />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route
                        exact
                        path="/:username/exam"
                        element={<ExamPaper />}
                    />

                    <Route
                        exact
                        path="/:username-:radio"
                        element={<AllUsersHome />}
                    />
                </Routes>
            </Router>
        </React.StrictMode>,
=======
=======
>>>>>>> 5cbb207 (tony is here)
    ReactDOM.render( <
        React.StrictMode >
        <
        Router >
        <
        Routes >
        <
        Route exact path = "/"
        element = { < App / > }
        /> <
        Route exact path = "/login"
        element = { < Login / > }
        /> <
        Route exact path = "/:username-:radio"
        element = { < AllUsersHome / > }
        /> < /
        Routes > <
        /Router> < /
        React.StrictMode > ,
<<<<<<< HEAD
>>>>>>> 80a5fa3 (tony is here)
=======
>>>>>>> 5cbb207 (tony is here)

        document.getElementById("app")
    );
}