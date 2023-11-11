import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Expense from './Components/Expense';
// import Expense from './Components/Budget';
import BudgetCreate from './Components/BudgetCreate';
import Budget from './Components/Budget';
import Portfolio from './Components/Portfolio';
import Navbar from './Components/Navbar';
import './Navbar.css';

import Investment from './Components/Investment';
import Login from './Components/Login';

function App() {
  return (
    
    <BrowserRouter>
    <Navbar />
  
      {/* <Route path="/Users" element={<Users />} /> */}
      <Routes>
      {/* <Route path='/Budget' element={<Budget/>} /> */}
      <Route path='/Login' element={<Login/>} />
      <Route path='Budget' element={<Budget/>} />
      <Route path='BudgetCreate' element={<BudgetCreate/>}/>
      <Route path='Portfolio' element={<Portfolio/>} />
       <Route path='/Investment' element={<Investment/>} />
       <Route path='/Expense' element={<Expense/>} />


      </Routes>
      </BrowserRouter>
      
    
  );
}

export default App;
