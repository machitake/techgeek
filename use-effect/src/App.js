import './App.css';
import StopWatch from './components/StopWatch';
import WindowResize from './components/WindowResize';

function App() {
  return (
    <div className="App">
      <StopWatch />
      <hr />
      <h1>課題</h1>
      <WindowResize />
    </div>
  );
}

export default App;
