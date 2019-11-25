import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css"

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Canvas Art!</h1>
        <div><Link to ="/" /> </div>
      </div>
    </Router>
  );
}

export default App;
