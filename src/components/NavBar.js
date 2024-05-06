import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ applicationIcon }) => {

    return <nav className="main-nav-bar">
        <div className="application-icon">{applicationIcon ?? ""}Logo</div>
        <ul>
            <nl><Link to="/">Home</Link></nl>
            <nl><Link to="/about">About</Link></nl>
            <nl><Link to="/cars">Cars</Link></nl>
            <nl><Link to="/contact">Contact</Link></nl>
        </ul>
    </nav>
}

export default NavBar;