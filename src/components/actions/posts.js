import axios from "axios";
import {setPosts} from "../../reducers/postsReducer";

export const getPosts = () => {
    return async (dispatch) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
        dispatch(setPosts(response.data))
    }
}

export const getUserDataByUserID = async (userID, setUserData) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userID}`)
    setUserData(response.data)
}

export const getPostCommentsByPostID = async (postID, setComments) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postID}/comments`)
    setComments(response.data)
}