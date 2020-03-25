import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Router, Link } from "@reach/router";


import Navbar from "./components/navbar.component";
import Home from "./components/home.component"
import Project from "./components/project.component"
import Issues from './components/Issues';
import Newissue from './components/Newissue';
import Markdown from './components/Markdown';


function App() {
  return (
    <div className="container">
      <Navbar />
      <Router>

        <Home path="/" />
        <Project path="project/*" />
        <Newissue path="new" />
        <Markdown path="markdown" />
      </Router>
    </div>


  );
}

export default App;