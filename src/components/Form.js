import React, { useContext, useState } from "react";
import {AlertContext} from "../context/alert/alertContext";
import {FirebaseContext} from "../context/firebase/fireBaseContext";

export const Form = () => {
    const [value, setValue] = useState("");
    const alert = useContext(AlertContext);
    const firebase = useContext(FirebaseContext);

    const submitHandler = event => {
        event.preventDefault();
        if(value.trim()) {
            firebase.addNote(value.trim()).then(() => {
                firebase.fetchNotes();
                alert.showAlert("successfully add to base", "success");
            }).catch(() => {
                alert.showAlert("error while add to base", "danger");
            });
        } else {
            alert.showAlert("error - nothing to add", "warning");
        }
        setValue("");
    };     
    
    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="введите название заметки"
                    value={value}
                    onChange={e=>{setValue(e.target.value);}}
                />
            </div>
        </form> 
    );
};