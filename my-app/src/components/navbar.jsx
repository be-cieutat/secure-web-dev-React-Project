import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/navbar.css";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
//<Link to="/logout"><FontAwesomeIcon icon={faSignOutAlt} /></Link>

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-title">
                <Link to="/">LieuxDeTournage.com</Link>
            </div>
            <div className="navbar-right">
                <Link to="/logout"><p>Logout</p></Link>
            </div>
        </nav>
    );
}

export default Navbar;
