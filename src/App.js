import './App.css';
import ProgressBar from './component/ProgressBar';

function App() {
  return (
    <div className="App">
        <ProgressBar isRunning={true} background="red"/>
    </div>
  );
}

export default App;
