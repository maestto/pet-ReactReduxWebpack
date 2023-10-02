import React from 'react';
import "./app.less"
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Feed from "./feed/feed";
import User from "./user/user";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/feed" element={<Feed/>} />
                <Route exact path="/user/:userID" element={<User/>} />
                <Route path="*" element={<Navigate to="/feed"/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;