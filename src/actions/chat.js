import {
    CREATE_ROOM,
    OUTPUT_ROOM,
    JOIN_ROOM
    , SEND_MESSAGES
} from "./types";


export const useCreateRoom = (room) => (dispatch) => {
    try {
        dispatch({
            type: CREATE_ROOM,
            payload: room,
        });
    } catch (err) {
        return Promise.reject(err);
    }
}

export const useOutputRoom = (room) => (dispatch) => {
    try {
        dispatch({
            type: OUTPUT_ROOM,
            payload: room,
        });
    } catch (err) {
        return Promise.reject(err);
    }
}
export const useJoinRoom = (messages) => (dispatch) => {
    try {
        dispatch({
            type: JOIN_ROOM,
            payload: messages.data
        });
    } catch (err) {
        return Promise.reject(err);
    }
}
export const useSendMessages = (messages) =>  (dispatch) => {
    try {
            dispatch({
                type: SEND_MESSAGES,
                payload: messages.data
            });
    } catch (err) {
        return Promise.reject(err);
    }
}
