import React, {useReducer} from "react";
import {AlertContext} from "./alertContext";
import {AlertReducer} from "./alertReducer";
import {SHOW_ALERT} from "../types";
import {HIDE_ALERT} from "../types";


// eslint-disable-next-line react/prop-types
const AlertState = ({children}) => {
    const [state, dispatch] = useReducer(AlertReducer, {visible: false});

    const showAlert = (text, type="warning") => {
        console.log("showAlert1", state);
        dispatch({type: SHOW_ALERT, payload: {text, type}});
        console.log("showAlert2", state);

    };

    const hideAlert = () => {
        console.log("hideAlert1", state);
        dispatch({type: HIDE_ALERT});
        console.log("hideAlert2", state);

    };

    return (
        <AlertContext.Provider value={{showAlert, hideAlert, alert: state}}>
            {children}
        </AlertContext.Provider>
    );
};

export default AlertState;
