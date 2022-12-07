import React, { Fragment, useContext, useEffect } from "react";
import Loader from "../components/Loader";
import {Form} from "../components/Form";
import { Notes } from "../components/Notes";
import {AlertContext} from "../context/alert/alertContext";
import { FirebaseContext } from "../context/firebase/fireBaseContext";

const Home = () => {
    //addNote, removeNote, loading
    const {fetchNotes, removeNote, notes, loading} = useContext(FirebaseContext);
    const alert = useContext(AlertContext);
    useEffect(() => {
        fetchNotes();
    },[]);


    const onRemove = (id) => {
        try {
            const removeNoteresult = removeNote(id);
            console.log("removeNoteresult", removeNoteresult);
        } catch (error)
        { 
            alert.showAlert("Error remove", "danger");
        }
        fetchNotes();
    };


    return (
        <>
            <Form />
            <hr />
            {loading && (<Loader/>) || (<Notes notes={notes} onRemove={onRemove} />)}
        </>
    );
};

export default Home;