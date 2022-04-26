import React, { Component } from "react";
import Form from "./form";
import Home from "./home";
import Solutions from "./solutions";
import { Route, Routes, Navigate } from 'react-router-dom';




class Body extends Component {
    render() {

        return (
            <div>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="solutions" exact element={<Solutions />} />
                    <Route path="form" exact element={<Form />} />
                    <Route path="/home" element={<Navigate replace to="/" />} />
                </Routes>

            </div>
        );
    }
}

export default Body;