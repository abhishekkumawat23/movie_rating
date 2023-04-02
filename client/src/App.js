import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.js';
import MovieList from './components/MovieList/MovieList.js';
import Login from './components/Login/Login.js';
import Signup from './components/Signup/Signup.js';
import {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  var originalSetItem = localStorage.setItem; 
  localStorage.setItem = function(){
      document.createEvent('Event').initEvent('itemInserted', true, true);
      originalSetItem.apply(this, arguments);
  }

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<MovieList />} /> */}
          <Route path="/" element={<MovieList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;