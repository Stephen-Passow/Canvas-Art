import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import "./App.css"
import axios from 'axios'
import HomePage from './components/HomePage';
import SinglePaintings from './components/SinglePaintings';
import Artist from './components/Artist';
import Header from './components/Header';
import Pricing from './components/Pricing';



function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/paintings/:id' component={SinglePaintings} />
        <Route exact path='/Artist' component={Artist} />
        
      </Switch>

    </Router>
  );
}

export default App;