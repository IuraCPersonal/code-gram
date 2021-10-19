import React, { useState } from 'react';
import { MultiSelect } from 'react-multi-select-component';import './PostForm.css';

const PostForm = (props) => {
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [bio, setBio] = useState('');
    const [tags, setTags] = useState([]);

    const options = [
        {label: 'C++', value: 'C++'},
        {label: 'Python', value: 'Python'},
        {label: 'C#', value: 'C#'}
    ]

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    }

    const locationChangeHandler = (event) => {
        setLocation(event.target.value);
    }

    const bioChangeHandler = (event) => {
        setBio(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const newPostData = {
            title: title,
            location: location,
            date: new Date(),
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
                        required
                        type="text"
                        value={title}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="new-post__control">
                    <label>Location</label>
                    <select 
                        required
                        onChange={locationChangeHandler}
                        placeholder="Select.."
                        className="post__dropdown"
                    >
                        <option value="" disabled selected hidden>Select your option</option>
                        <option value="Moldova">Moldova</option>
                        <option value="France">France</option>
                        <option value="Italy">Italy</option>
                        
                    </select>
                </div>
                <div className="post__tags">
                    <label>Tags</label>
                    <MultiSelect 
                        className="post__multiselect"
                        options={options}
                        value={tags}
                        onChange={setTags}
                        labelledBy="Select"
                    />
                </div>
                <div className="new-post__control">
                    <label>About</label>
                    <input
                        required
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
