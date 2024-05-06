import React from "react";
import NavBar from "../components/NavBar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import RentPage from "./RentPage";

const ApplicationRoot = (customParams) => {

    return <div className="application-root-container">
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/cars" element={<RentPage />} />
                {/* <Route path="/contact" element={<Contact />} /> */}
            </Routes>
        </Router>
    </div>
}

export default ApplicationRoot;