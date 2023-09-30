import React from 'react';
import "./app.less"
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Feed from "./feed/feed";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/feed" element={<Feed/>} />
                <Route path="*" element={<Navigate to="/feed" />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;