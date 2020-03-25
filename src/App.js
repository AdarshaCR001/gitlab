import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Router, Link } from "@reach/router";


import Navbar from './components/NavbarComp';
import Home from "./components/home.component"
import Project from "./components/project.component"
import Newissue from './components/Newissue';
import Issueslist from './components/Issueslist';


function App() {
  return (
    <div className="container">
      <Navbar />
      <Router>

        <Home path="/" />
        <Project path="project/*" />
        <Newissue path="new" />
        <Issueslist path="issueslist" />
      </Router>
    </div>


  );
}

export default App;