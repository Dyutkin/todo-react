import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import AlertState from "./context/alert/AlertState";

function App() {
    return (
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
    );
}

export default App;
