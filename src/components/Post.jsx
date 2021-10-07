import React, { Component, useState } from 'react';
import { IoLocationSharp } from "react-icons/io5";
import {FaCircle} from "react-icons/fa";

class Post extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            tags: Array.from(this.props.tags),
        }

        this.handleTags = this.handleTags.bind(this);
    }

    handleTags = () => {
        this.state.tags.map((item, index) => {
            {<div className="tag" key={index}>
                <FaCircle className="me-1 tag css"/>       
                {item}
            </div>}
        })
    }
    
    render() {
        return (
            <div className="col-md-5">
                <div className="card flex-md-row mb-4 box-shadow h-md-250">
                    <div className="card-body d-flex flex-column align-items-start post">
                        <h3 className="mb-0">
                            <a className="text-decoration-none text-dark" href="#">{this.props.title}</a>
                        </h3>
                        <h5>
                            <a>{this.props.user}</a>
                        </h5>
                        <div className="d-flex flex-row align-items-center">
                            <IoLocationSharp className="me-1 location-icon"/>
                            <div className="me-1 text-muted location">{this.props.location} |</div>
                            <div className="me-1 text-muted date">{this.props.date}</div>
                        </div>
                        <p className="card-text mb-auto">{this.props.description}</p>
                        <div className="d-flex justify-content-around">
                            {this.state.tags.map((item, index) => {
                                return (
                                    <div className="d-flex align-items-center me-2" key={index.toString()}>
                                        <FaCircle className={"me-1 tag " + item.toLowerCase()}/>       
                                        <div>{item}</div>
                                    </div> 
                                ) 
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;