import React, { useState } from 'react';

export default function SearchBar() {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
      e.preventDefault();
      console.log(query);
    }

    return (
      <div className='search-bar'>
        <input type="text" placeholder="映画を検索" onChange={(e) => setQuery(e.target.value)}/>
        <button type="submit" onClick={handleSearch}>検索</button>
      </div>
    );
}