import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar/Navbar';
import PostFilters from './components/Posts/PostFilters';
import AddPost from './components/NewPost/AddPost';
import Posts from './components/Posts/Posts';
import NewPost from './components/NewPost/NewPost';
import './App.css';
import { useState } from 'react';

const initialPosts = [
  {
    id: 'e1',
    title: 'Python Camp',
    location: {value: 'Moldova', label: 'Moldova'},
    date: new Date(2021, 5, 12),
    bio: 'Welcome to the best...',
    tags: [{value: "C++", label: "C++"}]
  }
]

const App = () => {
  const [posts, setPosts] = useState(initialPosts);

  const addPostHandler = (post) => {
    setPosts((prevPosts) => {
      return [post, ...prevPosts];
    })
  }

  return (
    <div className="App">
      <Navbar className="navbar" />
      <div className="feed d-flex flex-column">
        <AddPost onAddPost={addPostHandler}/>
        <div className="filters">
          <PostFilters />
        </div>
        <Posts posts={posts} />
      </div>
    </div>
  );
}

export default App;
