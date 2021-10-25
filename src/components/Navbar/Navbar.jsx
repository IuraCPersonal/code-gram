import React from 'react';
import { FaUserAlt } from "react-icons/fa";
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="container navbar">
            <div className="item">
                <span className="navbar__logo">
                    <span className="navbar__logo__code">&lt;code&gt;</span>
                    <span className="navbar__logo__gram">gram</span>
                </span>
            </div>
            <div className="item">
                <a className="navbar__profile">
                    <FaUserAlt />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
