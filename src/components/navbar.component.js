import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import {Link} from 'react-router-dom';
import './navbar.css';
import "bootstrap/dist/css/bootstrap.min.css";

export default class Navbar extends Component {

    
    render() {
        return (
            <div>
                <div className="cl_task">
            <nav className = "navbar">
                <button className="navbutton" data-toggle="dropdown" aria-expanded="true">Projects</button>
                <button className="navbutton" data-toggle="dropdown" aria-expanded="true">Groups</button>
                <button className="navbutton" data-toggle="dropdown" aria-expanded="true">More</button>
            </nav>
            </div><br />

</div>
            
        )
    }
}

