import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import Filters from './components/Filters';
import Post from './components/Post';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="feed d-flex flex-column">
        <div className="filters">
          <Filters />
        </div>
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default App;
