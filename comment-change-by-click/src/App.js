import logo from './logo.svg';
import './App.css';
import DoubbleButton from './components/DoubbleButton';
import ReactStars from './components/ReactStars';
import data from './data.json';

function App() {
  console.log(data);
  return (
    <div className='App'>
      {/* <DoubbleButton /> */}
      <h1>本の書評</h1>
      <div className='book-list'>
        {data.map((book) => (
          <div key={book.id} className='book-item'>
            <h2>{book.name}</h2>
            <ReactStars totalStars={5} count={book.evaluation} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
