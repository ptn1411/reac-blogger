import {
    GET_ALL,
    EDIT_USER,
    DELETE_USER,
    REGISTER_USER
} from "../actions/types";

const initialState = [];

function crudReducer(crud = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case GET_ALL:
            return payload;
        case REGISTER_USER:
            return [...crud,payload];
        case EDIT_USER:
            return crud.map((crud) => {
                if (crud.uuid === payload.uuid) {
                    return {
                        ...crud,
                        ...payload,
                    };
                } else {
                    return crud;
                }
            });
        case DELETE_USER:
            return crud.filter(({ uuid }) => uuid !== payload.uuid);
        default:
            return crud;
    }
};

export default crudReducer;