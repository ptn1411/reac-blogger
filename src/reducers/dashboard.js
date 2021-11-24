import {
    CONNECT,
    USER_COUNT,
    POST_COUNT
} from "../actions/types";

const initialState ={
    connect:[],
    countuser:[],
    countpost:[]
};

function dashboardReducer(dashboard = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case CONNECT:
            return {
                ...dashboard,
                connect: payload
            }
        case USER_COUNT:
            return {
                ...dashboard,
                countuser: payload
            }
        case POST_COUNT:
            return {
                ...dashboard,
                countpost: payload
            }
        default:
            return dashboard;
    }
}

export default dashboardReducer;