import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {getUserDataByUserID} from "../actions/posts";

import "./user.less"

const User = () => {
    const navigate = useNavigate();

    const {userID} = useParams()

    const [userData, setUserData] = useState({})

    useEffect( () => {
        getUserDataByUserID(userID, setUserData)
    }, [])


    return (
        <div>
            <button onClick={() => navigate(-1)} className="back-btn">Go back</button>
            <h1>User Profile</h1>
            <div className="user-info">
                <p><strong>Name:</strong> {userData.name}</p>
                <p><strong>Username:</strong> {userData.username}</p>
                <p><strong>Email:</strong> {userData.email}</p>
                <p><strong>Phone:</strong> {userData.phone}</p>
                <p><strong>Website:</strong> {userData.website}</p>
            </div>
            <div className="address">
                <h2>Address:</h2>
                <p><strong>Street:</strong> {userData.address?.street}</p>
                <p><strong>Suite:</strong> {userData.address?.suite}</p>
                <p><strong>City:</strong> {userData.address?.city}</p>
                <p><strong>Zipcode:</strong> {userData.address?.zipcode}</p>
            </div>
            <div className="geo">
                <h2>Geolocation:</h2>
                <p><strong>Latitude:</strong> {userData.address?.geo?.lat}</p>
                <p><strong>Longitude:</strong> {userData.address?.geo?.lng}</p>
            </div>
            <div className="company-info">
                <h2>Company:</h2>
                <p><strong>Name:</strong> {userData.company?.name}</p>
                <p><strong>Catch Phrase:</strong> {userData.company?.catchPhrase}</p>
                <p><strong>BS:</strong> {userData.company?.bs}</p>
            </div>
        </div>
    );
};

export default User;