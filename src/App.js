import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Data from './Data';
import Navbar from './Navbar';
import {useState } from 'react';

function App() {
  const [bejelenkezve, setBejelenkezve] = useState(false);

  return (
    <BrowserRouter>
        <Navbar bejelenkezve={bejelenkezve}/>
        <Routes>
          <Route path="/" element={<Home/>} exact />
          <Route path="/Login" element={<Login bejelenkezve={setBejelenkezve}/>} exact />
          <Route path="/Data" element={<Data/>} exact />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
