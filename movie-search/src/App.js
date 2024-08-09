import './App.css';
import { useEffect, useState } from "react";
import SearchBar from './components/SearchBar';

function App() {
  const [movies, setMovies] = useState([]);

  const searchMovies = (query) => {
    const apiKey = '66ca741d12821cf70b28923aef0fd81b';
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&language=ja-JP`)
      .then(res => res.json())
      .then(data => {
        console.log(data.results);
        setMovies(data.results);
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className="App">
      <h1>映画検索アプリ</h1>
      <SearchBar onSearch={searchMovies} />

    </div>
  );
}

export default App;
