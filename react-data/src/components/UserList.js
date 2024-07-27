import { useContext, useState, useEffect } from 'react';
import { languageContext } from '../App';

export default function UserList({ }) {
  const language = useContext(languageContext);
  const [users, setUsers] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);

  function getUsers() {
    fetch('https://fakerapi.it/api/v1/users?_locale=' + language)
    .then(res => res.json())
    .then(data => setUsers(data))
  }
  useEffect(() => {
    setLoading(true);
    getUsers();
  }, [language])

  return (
    <div className='container'>
    <div className='header'>
      <h2>React.jsでデータを取り扱う方法</h2>
    </div>
    <div className='content'>
      <ul>
        {users.data ? users.data.map((user) => (
          <li key={user.id} className='user-card'>
            <img src={`https://picsum.photos/200/200?random=${user.id}`} alt={user.firstname} />
            <p>{user.firstname} {user.lastname}</p>
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
  );
}