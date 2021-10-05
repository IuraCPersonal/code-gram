import React, { Component } from 'react';
import { Fa500Px } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light">
                <div className="container-fluid">
                    <a className="nav-item nav-link active" href="#">
                        {/* <img src="" alt="" width="30" height="24" class="d-inline-block align-text-top" /> */}
                        <span className="logo">CodeGram</span>
                    </a>
                    <a class="d-flex me-3 profile">
                        <FaHome />
                    </a>
                </div>
            </nav>
        );
    }
}

export default Navbar;