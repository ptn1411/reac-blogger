import {
    OUTPUT_ROOM,
    CREATE_ROOM,
    SEND_MESSAGES,
    JOIN_ROOM
} from "../actions/types";

const initialState ={
    room:[],
    messages:[]
};

function chatReducer(chat = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case OUTPUT_ROOM:
            return {
                ...chat,
                room: payload
            }
        case CREATE_ROOM:
            return {
                ...chat,
                room: [...chat.room, payload]
            }
        case JOIN_ROOM:
            return {
                ...chat,
                messages: payload
            }
        case SEND_MESSAGES:
            return {
                ...chat,
                messages: [...chat.messages, payload]
            }

        default:
            return chat;
    }
}

export default chatReducer;