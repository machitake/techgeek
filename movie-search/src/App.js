import './App.css';
import React, { useState, useEffect } from 'react';

function MovieSearch() {
  //検索キーワード
  const [query, setQuery] = useState('');
  //映画のリスト
  const [movies, setMovies] = useState([]);
  //現在のページ
  const [currentPage, setCurrentPage] = useState(1);
  //総ページ数
  const [totalPages, setTotalPages] = useState(0);


  //映画を検索する関数
  const searchMovies = (page) => {
    const apiKey = '66ca741d12821cf70b28923aef0fd81b';
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&language=ja-JP&page=${page}`)
      .then(res => res.json())
      .then(data => {
        setMovies(data.results);
        setTotalPages(data.total_pages);
      })
      .catch(error => console.error('Error:', error));
  };

  //currentPageが変更されたときに映画を検索
  useEffect(() => {
    searchMovies(currentPage);
  }, [currentPage]);

  //入力のたびにsetQueryを更新
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  
  //検索ボタンをクリックしたときにsearchMoviesを実行
  const handleSubmit = (event) => {
    event.preventDefault();
    setCurrentPage(1); // 検索ボタンをクリックした場合もページを1にリセット
    searchMovies(1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className='movie-search-container'>
      <div className="search-bar">
        <input 
          type="text" 
          value={query} 
          onChange={handleInputChange} 
          placeholder="映画を検索"
        />
        <button type="submit" onClick={handleSubmit}>検索</button>
      </div>
      <ul className="movie-list">
        {movies.map(movie => (
          <li className="movie-item" key={movie.id}>
            {movie.title}
            {/* リリース日 */}
            <p>{movie.release_date}</p>
            {/* 映画のバックドロップ画像 */}
            <img src={`https://image.tmdb.org/t/p/w200/${movie.backdrop_path}`} alt={movie.title} />
          </li>
        ))}
      </ul>
      <div>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>前へ</button>
        <span>ページ {currentPage} / {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>次へ</button>
      </div>
    </div>
  );
}

export default MovieSearch;