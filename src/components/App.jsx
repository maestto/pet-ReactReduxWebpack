import React from 'react';
import "./app.less"
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Main from "./main/main";
import Card from "./card/card";
import Error from "./main/Error";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Main/>} />
                <Route path="/card/:username/:reponame" element={<Card/>} />
                <Route path="/error" element={<Error/>} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;