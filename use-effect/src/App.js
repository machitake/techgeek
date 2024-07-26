import './App.css';
import StopWatch from './components/StopWatch';
import WindowResize from './components/WindowResize';
import MountAlert from './components/MountAlert';

function App() {
  return (
    <div className="App">
      <StopWatch />
      <hr />
      <h1>課題</h1>
      <WindowResize />
      <hr />
      <MountAlert />
    </div>
  );
}

export default App;
