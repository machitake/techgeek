import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);

  function getUsers() {
    fetch(`https://reqres.in/api/users?per_page=3&page=${pageNumber}`)
    .then(res => res.json())
    .then(data => setUsers(data))
  }

  useEffect(() => {
    setLoading(true);
    getUsers();
  }, [pageNumber])

  return (
    <div className="App">
      <div className='container'>
        <div className='header'>
          <h2>React.jsでデータを取り扱う方法</h2>
        </div>
        <div className='content'>
          <ul>
            {users.data ? users.data.map((user) => (
              <li key={user.id} className='user-card'>
                <img src={user.avatar} alt={user.first_name} />
                <p>{user.first_name} {user.last_name}</p>
                <p>{user.email}</p>
              </li>
            )): <p>データを取得中です</p>
            }
          </ul>
        </div>
        <div className='pagination'>
          {pageNumber > 1 && <button onClick={() => setPageNumber(pageNumber - 1)}>前へ</button>}
          {pageNumber < users.total_pages && <button onClick={() => setPageNumber(pageNumber + 1)}>次へ</button>}
        </div>
      </div>
    </div>
  );
}

export default App;
