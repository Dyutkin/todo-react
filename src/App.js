import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import AlertState from "./context/alert/AlertState";
import FirebaseState from "./context/firebase/FIrebaseState";

function App() {
    return (
        <FirebaseState>
            <AlertState>
                <Router>
                    <Navbar></Navbar>
                    <div className="container pt-4">
                        <Alert/>
                        <Routes>
                            <Route  path='/' exact element={<Home />} />
                            <Route  path='/about' element={<About />} />
                        </Routes>
                    </div>
                </Router>
            </AlertState>
        </FirebaseState>
    );
}

export default App;
