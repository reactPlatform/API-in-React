
import './App.css';
import {useState} from 'react';
function App() {
  const [movies,setMovies] = useState([]);
  const [isLoading,setLoading] = useState(false);
  async function fetchHandler() {
    setLoading(true);
    const response = await fetch('https://swapi.dev/api/films');
    const data = await response.json();
    setMovies(data.results);
    setLoading(false);
    
  }
  return (
    <div className="App">
      <button onClick={() => fetchHandler()}>Fetch Movies</button>
      <ul>
        {
          !isLoading && movies.map(item => <li>{item.title}</li>)
        }
        
      </ul>
      {
        isLoading  &&  <p>Loading....</p>
      }
      {
        isLoading && movies.length == 0 && <p>Found no movies</p>
      }
      
    </div>
  );
}

export default App;
