import { Paper } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ applicationIcon }) => {

    return <Paper className="main-nav-bar" style={{ backgroundColor: "#2E4756" }}>
        <Link to="/">
            <div className="application-icon">{applicationIcon ?? "Logo"}Car App</div>
        </Link>
        <ul>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/cars">Cars</Link>
            {/* <Link to="/contact">Contact</Link> */}
        </ul>
    </Paper>
}

export default NavBar;