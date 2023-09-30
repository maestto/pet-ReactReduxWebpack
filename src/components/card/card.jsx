import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {getCurrentRepo} from "../actions/repos";

const Card = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };

    const {username, reponame} = useParams()
    const [repo, setRepo] = useState({owner: {}})
    const [fetching, setFetching] = useState(false)

    useEffect( () => {
        getCurrentRepo(username, reponame, setRepo, setFetching)
    }, [])

    return (
        <div>
            <button onClick={goBack} className="back-btn">BACK</button>
            {
                fetching === false
                    ?
                    <div className="card">
                        <img src={repo.owner.avatar_url} alt="" className="avatar"/>
                        <div className="name">{repo.name}</div>
                        <div className="stars">{repo.stargazers_count}</div>
                    </div>
                    :
                    <div className="fetching"/>
            }

        </div>
    );
};

export default Card;