import {
    POST_ALL,
    DELETE_POST,
    CREATE_POST,
    EDIT_POST,
} from "./types";
import Post from "../services/post.service";


export const usecreatePost = (data) => async (dispatch) => {
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
export const useGetPostAll = () => async (dispatch) => {
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
export const usePostEdit = (uuid,data) => async (dispatch) => {
    try {
        const res = await Post.editPost(uuid,data);
        dispatch({
            type: EDIT_POST,
            payload: res.data.data,
        });
        return Promise.resolve(res.data.data);
    } catch (err) {
        return Promise.reject(err);
    }
}
export const userDelete = (uuid) => async (dispatch) => {
    try {
        const res = await Post.deletePost(uuid);
        dispatch({
            type: DELETE_POST,
            payload: res.data.data,
        });
        return Promise.resolve(res.data.data);
    } catch (err) {
        return Promise.reject(err);
    }
};
