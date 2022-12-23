import {Routes, Route} from "react-router-dom";
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path = "/" element = {<Home/>}  />
          <Route exact path = "/productos" element = {<Products />}/>
      </Routes>
    </div>
  );
}

export default App;
