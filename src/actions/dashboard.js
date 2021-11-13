import {
    CONNECT,
    USER_COUNT,
    POST_COUNT
} from "./types";

import Dashboard from "../services/dashboard.service";

import io from 'socket.io-client';

const socket = io(process.env.REACT_APP_WS, {
    withCredentials: true,
    transports: ['websocket']
});


export const useConnect = () => async (dispatch) => {
    try {
        socket.on('server connect', function (message) {
            const people = JSON.parse(message);
            dispatch({
                type: CONNECT,
                payload: people,
            });
            return Promise.resolve(people);
        });

    } catch (err) {
        return Promise.reject(err);
    }
}

export const useUserCount = () => async (dispatch) => {
    try {
        const res = await Dashboard.getUserCount();
        dispatch({
            type: USER_COUNT,
            payload: res.data.count,
        });
        return Promise.resolve(res.data.count);
    } catch (err) {
        return Promise.reject(err);
    }
}
export const usePostCount = () => async (dispatch) => {
    try {
        const res = await Dashboard.getPostCount();
        dispatch({
            type: POST_COUNT,
            payload: res.data.count,
        });
        return Promise.resolve(res.data.count);
    } catch (err) {
        return Promise.reject(err);
    }
}