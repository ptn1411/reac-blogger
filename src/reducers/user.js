import {
    GET_ALL,
    EDIT_USER,
    DELETE_USER,
    REGISTER_USER
} from "../actions/types";

const initialState = [];

function crudReducer(user = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case GET_ALL:
            return payload;
        case REGISTER_USER:
            return [...user,payload];
        case EDIT_USER:
            return user.map((user) => {
                if (user.uuid === payload.uuid) {
                    return {
                        ...user,
                        ...payload,
                    };
                } else {
                    return user;
                }
            });
        case DELETE_USER:
            return user.filter(({ uuid }) => uuid !== payload.uuid);
        default:
            return user;
    }
};

export default crudReducer;