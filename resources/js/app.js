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
import Model from "./components/Model/Model";
// import AllModels from "./components/Model/AllModels";

if (document.getElementById("app")) {
    ReactDOM.render(
        <React.Fragment>
            <Router>
                <Routes>
                    <Route exact path="/" element={<App />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route
                        exact
                        path="/:username/:unfinishedSubjects"
                        element={<ExamPaper />}
                    />
                    <Route
                        exact
                        path="/:username/model:numberOfModels"
                        element={<Model />}
                    />
                    {/* <Route
                        exact
                        path="/:username/-:numberOfModels"
                        element={<AllModels />}
                    />
                    <Route
                        exact
                        path="/:username/-:numberOfModels/:i"
                        element={<Model />}
                    /> */}

                    <Route
                        exact
                        path="/:username-:radio"
                        element={<AllUsersHome />}
                    />
                </Routes>
            </Router>
        </React.Fragment>,

        document.getElementById("app")
    );
}
