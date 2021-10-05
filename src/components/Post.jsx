import React, { Component } from 'react';

class Post extends Component {
    render() {
        return (
            <div className="col-md-5">
                <div className="card flex-md-row mb-4 box-shadow h-md-250 ">
                    <div className="card-body d-flex flex-column align-items-start">
                        <div className="d-flex justify-content-around">
                            <strong className="d-inline-block me-2 tag">CSS</strong>
                            <strong className="d-inline-block me-2 tag">Python</strong>
                        </div>
                        <h3 className="mb-0">
                            <a className="text-dark" href="#">Featured post</a>
                        </h3>
                        <div className="mb-1 text-muted">Nov 12</div>
                        <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <a href="#">Continue reading</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;