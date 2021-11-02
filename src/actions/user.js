import {
    GET_ALL,
    REGISTER_USER,
    EDIT_USER,
    DELETE_USER
} from "./types";

import Crud from "../services/crud.service";

export const getAllUser = () => async (dispatch) => {
    try {
        const res = await Crud.getAll();

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
        const res = await Crud.createUser(data);

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
        const res = await Crud.editUser(uuid,data);
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
        const res = await Crud.deleteUser(uuid);
        dispatch({
            type: DELETE_USER,
            payload: res.data.data,
        });
        return Promise.resolve(res.data.data);
    } catch (err) {
        return Promise.reject(err);
    }
};
