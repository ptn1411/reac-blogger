import {
    GET_ALL,
    REGISTER_USER,
    EDIT_USER,
    DELETE_USER
} from "./types";

import User from "../services/user.service";

export const getAllUser = () => async (dispatch) => {
    try {
        const res = await User.getAll();

        dispatch({
            type: GET_ALL,
            payload: res.data.data,
        });
        return Promise.resolve(res.data.data);
    } catch (err) {
        return Promise.reject(err);
    }
};
export const userRegister = (data) => async (dispatch) => {
    try {
        const res = await User.createUser(data);

        dispatch({
            type: REGISTER_USER,
            payload: res.data.data,
        });
        return Promise.resolve(res.data.data);
    } catch (err) {
        return Promise.reject(err);
    }
};
export const userEdit = (uuid,data) => async (dispatch) => {
    try {
        const res = await User.editUser(uuid,data);
        dispatch({
            type: EDIT_USER,
            payload: res.data.data,
        });
        return Promise.resolve(res.data.data);
    } catch (err) {
        return Promise.reject(err);
    }
};
export const userDelete = (uuid) => async (dispatch) => {
    try {
        const res = await User.deleteUser(uuid);
        dispatch({
            type: DELETE_USER,
            payload: res.data.data,
        });
        return Promise.resolve(res.data.data);
    } catch (err) {
        return Promise.reject(err);
    }
};
