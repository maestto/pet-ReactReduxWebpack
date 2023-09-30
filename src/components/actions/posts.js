import axios from "axios";
import {setPosts} from "../../reducers/postsReducer";

export const getPosts = () => {
    return async (dispatch) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
        dispatch(setPosts(response.data))
    }
}

export const getPostAuthorByUserID = async (userID, setUser) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userID}`)
    setUser(response.data)
}