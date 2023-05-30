
import './App.css';
import {useState,useEffect,useCallback} from 'react';
function App() {
  const [movies,setMovies] = useState([]);
  const [isLoading,setLoading] = useState(false);
  const [error,setError] = useState(null);
  
  const fetchHandler = useCallback(async () => {
    setLoading(true);
    setError(null);
    try{
    const response = await fetch('https://swapi.dev/api/films');
    if(!response.ok){
      throw new Error('Something went wrong!!');
    }
    const data = await response.json();
    
    setMovies(data.results);
    setLoading(false);
    } catch(error){
      setError(error.message);
    }
    setLoading(false); 
  },[]);
  
  useEffect(() => {
    fetchHandler();
  },[]);
  let content = <p>Found no movies</p>
  if(movies.length > 0){
    content = movies.map(item => <li>{item.title}</li>)
  }
  if(error){
    content = <p>{error}</p>
  }
  if(isLoading){
    content = <p>Loading...</p>
  }
  return (
    <div className="App">
      <button onClick={() => fetchHandler()}>Fetch Movies</button>
     {content}
      
      
    </div>
  );
}

export default App;
