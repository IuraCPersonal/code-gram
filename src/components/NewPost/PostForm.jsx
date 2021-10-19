import React, { useState } from 'react';
import './PostForm.css';

const PostForm = (props) => {
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [bio, setBio] = useState('');
    const [tags, setTags] = useState('');

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    }

    const locationChangeHandler = (event) => {
        setLocation(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    }

    const bioChangeHandler = (event) => {
        setBio(event.target.value);
    }

    const tagsChangeHandler = (event) => {
        setTags(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const newPostData = {
            title: title,
            location: location,
            date: new Date(date),
            bio: bio,
            tags: tags
        }

        props.onAddPost(newPostData);
        setTitle('');
        setLocation('');
        setDate('');
        setBio('');
        setTags('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-post__controls">
                <div className="new-post__control">
                    <label>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="new-post__control">
                    <label>Location</label>
                    <input
                        type="text"
                        value={location}
                        onChange={locationChangeHandler}
                    />
                </div>
                <div className="new-post__control">
                    <label>Date</label>
                    <input
                        type="date"
                        value={date}
                        onChange={dateChangeHandler}
                        min="2019-01-01" max="2022-12-31"
                    />
                </div>
                <div className="new-post__control">
                    <label>About</label>
                    <input
                        type="text"
                        value={bio}
                        onChange={bioChangeHandler}
                    />
                </div>
            </div>
            <div className="new-post__actions">
                <button type="submit">Add</button>
            </div>
        </form>
    )
}

export default PostForm;