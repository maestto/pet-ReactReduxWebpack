import React from 'react';
import {useNavigate} from "react-router-dom";

const Error = () => {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => navigate("/")}>GO TO MAIN PAGE</button>
            ERROR
        </div>
    );
};

export default Error;