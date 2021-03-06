import {
    POST_ALL,
    DELETE_POST,
    CREATE_POST,
    EDIT_POST,
    POST_PAGE
} from "../actions/types";

const initialState = [];

function postReducer(post = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case POST_ALL:
            return payload;
        case CREATE_POST:
            return [...post, payload];
        case POST_PAGE:
            if (post.length > 1) {
                let data = [];
                data.push(...post);
                payload.forEach(element => {
                    data.push(element);
                });
                return data;
            }
            return payload;
        case EDIT_POST:
            return post.map((post) => {
                if (post.post_uuid && post.post_uuid === payload.post_uuid) {
                    return {
                        ...post,
                        ...payload,
                    };
                } else {
                    return post;
                }
            });
        case DELETE_POST:
            return post.filter(({uuid}) => uuid !== payload.post_uuid);
        default:
            return post;
    }
}

export default postReducer;