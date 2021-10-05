import React, { Component } from 'react';
import { Fa500Px } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light">
                <div className="container-fluid">
                    <a className="nav-item nav-link active" href="#">
                        {/* <img src="" alt="" width="30" height="24" class="d-inline-block align-text-top" /> */}
                        <span className="logo">&lt;code&gt;gram</span>
                    </a>
                    <div className="dropstart">
                        <a class="d-flex me-3 profile" id="profileDropDown" data-bs-toggle="dropdown" aria-expanded="false">
                            <FaUserAlt />
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="profleDropDown">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;