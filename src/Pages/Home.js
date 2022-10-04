import React, { Fragment } from "react";
import {Form} from "../components/Form";
import { Notes } from "../components/Notes";

const Home = () => {
    const notes = [
        {id: 1, title: "title 1"},
        {id: 2, title: "title 2"},
        {id: 3, title: "title 3"},
    ];
    return (
        <>
            <Form />
            <hr />
            <Notes notes={notes}/>
        </>
    );
};

export default Home;