import React from 'react';
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Project from './Projects';

function App() {
  return (
    <Router>
    <div className="App">
<Navbar></Navbar>
<Dashboard />
<Project />
    </div>
    </Router>
  );
}

export default App;
