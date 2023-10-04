import React from 'react';

const Comment = (props) => {
    const comment = props.comment

    return (
        <div className="post-comments-item" key={comment.id}>
            <h1>{comment.email}</h1>
            <h2>{comment.name}</h2>
            <h3>{comment.body}</h3>
        </div>
    );
};

export default Comment;