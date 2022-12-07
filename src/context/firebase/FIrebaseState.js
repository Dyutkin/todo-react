import React, {useReducer} from "react";
import axios from "axios";
import { FirebaseContext } from "./fireBaseContext";
import { firebaseReducer } from "./firebaseReducer";
import { SHOW_LOADER, ADD_FETCHED_NOTES } from "../types";

// eslint-disable-next-line no-undef
const url = process.env.REACT_APP_DB_URL;
const initialState = {
    notes: [],
    loading: false,
};

// eslint-disable-next-line react/prop-types
const FirebaseState = ({children}) => {
    const [state, dispatch] = useReducer(firebaseReducer, initialState);
    const showLoader = () => dispatch({type: SHOW_LOADER});
    const  fetchNotes = async () => {
        showLoader();
        const res = await axios.get(`${url}/notes.json`);
        const result = Object.keys(res.data).map((key) => ({
            id: key,
            ...res.data[key]
        }));
        dispatch({type: ADD_FETCHED_NOTES, payload: result});
    };

    const addNote = async (title) => {
        const note = {
            title,
            date: new Date().toJSON(),
        };
        try{
            const response = await axios.post(`${url}/notes.json`, note);
            if (response.status === 200) {
                return;
            }
        } catch(e) {
            throw new Error();
            
        }
    };

    const removeNote = async (id) => {
        await axios.delete(`${url}/notes/${id}.json`);
        // dispatch({type: REMOVE_NOTE, payload: id});
    };
    
    return (
        <FirebaseContext.Provider value={{fetchNotes, addNote, removeNote, loading: state.loading, notes: state.notes}}>
            {children}
        </FirebaseContext.Provider>
    );
};

export default FirebaseState;