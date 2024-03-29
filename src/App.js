
import './App.css';
import Header from "./components/Header.js"
import Shop from "./components/Shop"
import Cart from "./components/Cart"
import Error from "./components/Error"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App () {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Shop/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </Router>
    </div>
  );
};
export default App;
