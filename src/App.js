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
        <Post 
          title="Python AI" 
          user="John Fish" 
          location="Moldova" 
          date="Nov 12"
          description="Face Recognition AI using CV."  
          tags={["CSS", "Python", "Go", "R", "Swift", "C#", "C++"]}
        />
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default App;
