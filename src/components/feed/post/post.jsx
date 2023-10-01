import React, {useEffect, useState} from 'react';
import "./post.less"
import {getPostAuthorByUserID, getPostCommentsByPostID} from "../../actions/posts";

const Post = (props) => {
    const post = {
        id: props.post.id,
        userId: props.post.userId,
        title: props.post.title,
        body: props.post.body
    }

    const [user, setUser] = useState({})
    const [comments, setComments] = useState()

    useEffect( () => {
        getPostAuthorByUserID(post.userId, setUser)
        getPostCommentsByPostID(post.id, setComments)
    }, [])

    return (
        <div className="post">
            <div className="post-header">
                <p className="user-id">{user.name} @{user.username}</p>
                <p className="post-id">#{post.id}</p>
            </div>
            <h1 className="post-title">{post.title}</h1>
            <p className="post-body">{post.body}</p>
            <div className="post-comments">
                <h1 className="post-comments-header">Comments</h1>
                { renderComments(comments) }
            </div>
        </div>
    );
};

function renderComments(comments) {
    if (Array.isArray(comments)) {
        return comments.map((comment) => (
            <p key={comment.id}>{comment.id}</p>
        ))
    }
}

export default Post;