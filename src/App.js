import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import Post from './components/Post';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="feed d-flex flex-column">
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default App;
