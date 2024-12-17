import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Prices from './pages/Prices';
import Products from './pages/Products';
import Login from './pages/Login';

function App() {
  
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/contacts' element={<Contacts/>}/>
          <Route path='/prices' element={<Prices/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </div>
    </Router>
  )
}
export default App
