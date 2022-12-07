import {SHOW_LOADER, ADD_NOTE, ADD_FETCHED_NOTES, REMOVE_NOTE} from "../types";

const handlers = {
    DEFAULT: state => state,
    [SHOW_LOADER]: (state) => ({
        ...state, loading: true
    }),
    [ADD_NOTE]: (state, data) => {
        const {payload} = data;
        return {...state, notes: [...state.notes, payload]};
    },
    [ADD_FETCHED_NOTES]: (state, data) => {
        const {payload} = data;
        return {...state, notes: payload, loading: false};

    },
    [REMOVE_NOTE]: (state, data) => {
        const {payload} = data;
        return {...state, notes: state.notes.filter((note) => note.id !== payload)};
    }
};

export const firebaseReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;

    return handle(state, action);
};