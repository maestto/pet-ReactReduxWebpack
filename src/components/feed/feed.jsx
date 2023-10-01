import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../actions/posts";
import Post from "./post/post";

const Feed = () => {
    const { posts } = getData();

    return (
        <div>
            <h1>Post feed</h1>
            <div className="post-feed">
                {
                    posts.map(post => <Post post={post} key={post.id}/>)
                }
            </div>
        </div>
    );
};

function getData() {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.items)

    useEffect(()=> {
        dispatch(getPosts())
    }, [])

    return { posts }
}

export default Feed;