import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col, Form,Nav,Navbar } from 'react-bootstrap';

export default class Navbar extends Component {


    render() {
        return (
            <div>
            <Navbar>
                <row>

                    <col><Nav.Link to="/projects">Projects</Nav.Link></col>
                    <col><Nav.Link to="/groups">Groups</Nav.Link></col>
                    <col><Nav.Link to="/more">More</Nav.Link></col>
                </row>
            </Navbar>
            {/* // <div>
            //     <div className="cl_task">
            // <nav className = "navbar">
            //     <button className="navbutton" data-toggle="dropdown" aria-expanded="true">Projects</button>
            //     <button className="navbutton" data-toggle="dropdown" aria-expanded="true">Groups</button>
            //     <button className="navbutton" data-toggle="dropdown" aria-expanded="true">More</button>
            // </nav>
            // </div><br /> */}

           

            </div >
            
        )
    }
}

