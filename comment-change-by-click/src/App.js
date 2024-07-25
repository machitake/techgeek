import logo from './logo.svg';
import './App.css';
import DoubbleButton from './components/DoubbleButton';
import ReactStars from './components/ReactStars';
import data from './data.json';
import CountUp from './components/CountUp';
import TextInput from './components/TextInput';

function App() {
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
    
      <h1>カウントアップ10でリセットされる</h1>
      <CountUp />

      <h1>テキスト入力フィールド</h1>
      <TextInput />
    </div>
  );
}

export default App;
