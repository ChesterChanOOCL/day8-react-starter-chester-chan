import logo from './logo.svg';
import './App.css';
import ProductItem from "./components/ProductItem";
import counter from "./components/Counter";
import Counter from "./components/Counter";
function App() {
  return (
    <div className="App">
      <ProductItem></ProductItem>
        <div className="counterRow"> <Counter></Counter> </div>

    </div>
  );
}

export default App;
