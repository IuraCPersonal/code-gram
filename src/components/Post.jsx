import React, { Component } from 'react';
import { IoLocationSharp } from "react-icons/io5";
import {FaCircle} from "react-icons/fa";

class Post extends Component {
    render() {
        return (
            <div className="col-md-5">
                <div className="card flex-md-row mb-4 box-shadow h-md-250">
                    <div className="card-body d-flex flex-column align-items-start post">
                        <h3 className="mb-0">
                            <a className="text-decoration-none text-dark" href="#">Python Face Recognition AI</a>
                        </h3>
                        <h5>
                            <a>John Fisher</a>
                        </h5>
                        <div className="d-flex flex-row align-items-center">
                            <IoLocationSharp className="me-1 location-icon"/>
                            <div className="me-1 text-muted location">Moldova |</div>
                            <div className="me-1 text-muted date">Date</div>
                        </div>
                        <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <div className="d-flex justify-content-around">
                            <div className="d-flex align-items-center me-2">
                                <FaCircle className="me-1 tag css"/> 
                                <div>CSS</div>
                            </div>
                            <div className="d-flex align-items-center me-2">
                                <FaCircle className="me-1 tag python"/> 
                                <div>Python</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;