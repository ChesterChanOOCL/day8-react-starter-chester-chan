import logo from './logo.svg';
import './App.css';
import Counter from "./components/Counter";
import MultipleCounter from "./components/MultipleCounter";
function App() {
  return (
      <div className="App">

          {/*<div className="counterRow"><Counter></Counter></div>*/}
          <div className="counterRow"><MultipleCounter></MultipleCounter></div>
      </div>
  );
}

export default App;
