import React, { useState } from 'react';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import PostForm from './PostForm';
import './AddPost.css';

const AddPost = (props) => {
  const [toggleForm, setToggleForm] = useState(false);

  const formHandler = () => {
    setToggleForm(!toggleForm);
  }

   return (
        <div className="d-flex flex-column">
            <div className="add__post" onClick={formHandler}>
                <AiOutlineAppstoreAdd />
            </div>
            <div className="post__form">
                {toggleForm && (
                  <PostForm onAddPost={props.onAddPost}/>
                )}
            </div>
       </div>

   );
};

export default AddPost;
