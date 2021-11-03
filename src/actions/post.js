import {
    POST_ALL,
    DELETE_POST,
    CREATE_POST,
    EDIT_POST
} from "./types";
import Post from "../services/post.service";


export const createPostData = (data) => async (dispatch) => {
    try {
        const res = await Post.createPost(data);
        dispatch({
            type: CREATE_POST,
            payload: res.data.data,
        });
        return Promise.resolve(res.data.data);
    } catch (err) {
        return Promise.reject(err);
    }
}
export const getPostData = () => async (dispatch) => {
    try {
        const res = await Post.getAll();
        dispatch({
            type: POST_ALL,
            payload: res.data.data,
        });
        return Promise.resolve(res.data.data);
    } catch (err) {
        return Promise.reject(err);
    }
}
