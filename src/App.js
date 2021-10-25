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
    id: 'e0',
    title: 'What is Lorem Ipsum?',
    location: { value: 'France', label: 'France' },
    date: new Date(2021, 5, 12),
    bio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    tags: []
  },
  {
    id: 'e1',
    title: 'Python Camp',
    location: { value: 'Moldova', label: 'Moldova' },
    date: new Date(2021, 5, 12),
    bio: 'Welcome to the best...',
    tags: [{ value: "C++", label: "C++" }]
  },
  {
    id: 'e2',
    title: 'CVC',
    location: { value: 'Moldova', label: 'Moldova' },
    date: new Date(),
    bio: 'Looking for python developer...',
    tags: [{ value: "Python", label: "Python" }]
  },
  {
    id: 'e3',
    title: 'UI/UX Designer',
    location: { value: 'Moldova', label: 'Moldova' },
    date: new Date(),
    bio: `Collaborative. Respectful. A place to dream and do. These are just a few words that describe what life is like at Toyota. As one of the world's most admired brands, Toyota is growing and leading the future of mobility through innovative, high-quality solutions designed to enhance lives and delight those we serve. We're looking for diverse, talented team members who want to Dream. Do. Grow. with us.`,
    tags: [{ value: "CSS", label: "CSS" }]
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
      <Navbar />
      <AddPost onAddPost={addPostHandler} />
      {/* <div className="filters">
          <PostFilters />
        </div> */}
      <Posts posts={posts} />
    </div>
  );
}

export default App;
