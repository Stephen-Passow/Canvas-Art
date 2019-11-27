import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import "./App.css"
import axios from 'axios'
import HomePage from './components/HomePage';
import SinglePaintings from './components/SinglePaintings';
import Artist from './components/Artist';

function App() {
  return (
    <Router>
      {/* <NavBar /> */}

      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/paintings/:id' component={SinglePaintings} />
        <Route exact path='/Artist' component={Artist} />
        
      </Switch>

    </Router>
  );
}

export default App;