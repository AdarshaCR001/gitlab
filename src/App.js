import React from 'react';

import { Router, Link } from "@reach/router";


import Navbar from './components/NavbarComp';
import Home from "./components/home.component"
import Project from "./components/project.component"
import Issues from './components/Issues';


function App() {
  return (
    <div >
      <Navbar />
      <Router>

        <Home path="/" />
        <Project path="project/*" />
        <Issues path="issueslist" />
      </Router>
    </div>


  );
}

export default App;