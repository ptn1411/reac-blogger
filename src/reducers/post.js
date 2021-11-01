import {
    POST_ALL,
    DELETE_POST,
    CREATE_POST,
    EDIT_POST,
} from "../actions/types";

const initialState = [];

function postReducer(post = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case POST_ALL:
            return payload;
        case CREATE_POST:
            return [...post,payload];
        case EDIT_POST:
            return post.map((post) => {
                if (post.uuid === payload.uuid) {
                    return {
                        ...post,
                        ...payload,
                    };
                } else {
                    return post;
                }
            });
        case DELETE_POST:
            return post.filter(({ uuid }) => uuid !== payload.uuid);
        default:
            return post;
    }
};

export default postReducer;