import React from 'react';
import "./post.less"

const Post = (props) => {
    const post = props.post

    return (
        <div className="post">
            <div className="post-header">
                <p className="user-id">User #{post.userId}</p>
                <p className="post-id">Post #{post.id}</p>
            </div>
            <h1 className="post-title">{post.title}</h1>
            <p className="post-body">{post.body}</p>
        </div>
    );
};

export default Post;