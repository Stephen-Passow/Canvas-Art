import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import "./App.css"
import axios from 'axios'
import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Canvas Art!</h1>
        <HomePage />
      </div>
    </Router>
  );
}

export default App;
