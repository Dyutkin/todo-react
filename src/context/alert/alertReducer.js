import {SHOW_ALERT, HIDE_ALERT} from "../types";

const handlers = {
    [SHOW_ALERT]: (state, {payload}) => {
        return {...payload, visible: true};
    },
    [HIDE_ALERT]: (state) => {
        return {...state, visible: false, text: "", type: ""};
    },
    DEFAULT: (state) => state,
};

export const AlertReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;

    return handle(state, action);
};