
import './App.css';
import {useState} from 'react';
function App() {
  const [movies,setMovies] = useState([]);
  const fetchHandler = () => {
    
    fetch('https://swapi.dev/api/films').then(response => {
      return response.json();
    }).then(data => {
      setMovies(data.results);
    })
    
  }
  return (
    <div className="App">
      <button onClick={() => fetchHandler()}>Fetch Movies</button>
      <ul>
        {
          movies.map(item => <li>{item.title}</li>)
        }
      </ul>
      
    </div>
  );
}

export default App;
