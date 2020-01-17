import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PageHello from './pages/PageHello';


function App() {
  return (
    <Router>
      <Route exact path="/" component={PageHello} />
    </Router>
  );
}

export default App;
