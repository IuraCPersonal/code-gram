import React from 'react';
import { FaUserAlt } from "react-icons/fa";
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar sticky-top navbar-light">
            <div className="container-fluid">
                <a className="nav-item nav-link active" href="#">
                    <span className="logo"><span className="logo-code">&lt;code&gt;</span>gram</span>
                </a>
                <div className="dropstart">
                    <a className="d-flex me-3 profile" id="profileDropDown" data-bs-toggle="dropdown" aria-expanded="false">
                        <FaUserAlt />
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="profleDropDown">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Sign Out</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;