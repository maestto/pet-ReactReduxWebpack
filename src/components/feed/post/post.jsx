import React, {useEffect, useState} from 'react';
import "./post.less"
import {getPostAuthorByUserID} from "../../actions/posts";

const Post = (props) => {
    const post = props.post

    const [user, setUser] = useState({})

    useEffect( () => {
        getPostAuthorByUserID(post.userId, setUser)
    }, [])

    return (
        <div className="post">
            <div className="post-header">
                <p className="user-id">{user.name} @{user.username}</p>
                <p className="post-id">#{post.id}</p>
            </div>
            <h1 className="post-title">{post.title}</h1>
            <p className="post-body">{post.body}</p>
        </div>
    );
};

export default Post;