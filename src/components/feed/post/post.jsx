import React, {useEffect, useState} from 'react';
import "./post.less"
import {getUserDataByUserID, getPostCommentsByPostID} from "../../actions/posts";
import {NavLink} from "react-router-dom";

const Post = (props) => {
    const post = {
        id: props.post.id,
        userId: props.post.userId,
        title: props.post.title,
        body: props.post.body
    }

    const [userData, setUserData] = useState({})
    const [commentsData, setCommentsData] = useState()

    useEffect( () => {
        getUserDataByUserID(post.userId, setUserData)
        getPostCommentsByPostID(post.id, setCommentsData)
    }, [])

    return (
        <div className="post">
            <div className="post-header">
                <NavLink className="user-id" to={`/user/${userData.id}`}>{userData.name} @{userData.username}</NavLink>
                <p className="post-id">#{post.id}</p>
            </div>
            <h1 className="post-title">{post.title}</h1>
            <p className="post-body">{post.body}</p>
            <div className="post-comments">
                <h1 className="post-comments-header">Comments</h1>
                { renderComments(commentsData) }
            </div>
        </div>
    );
};

function renderComments(comments) {
    if (Array.isArray(comments)) {
        return comments.map((comment) => (
            <div className="post-comments-item" key={comment.id}>
                <h1>{comment.email}</h1>
                <h2>{comment.name}</h2>
                <h3>{comment.body}</h3>
            </div>
        ))
    }
}

export default Post;