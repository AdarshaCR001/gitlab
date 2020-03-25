import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import './navbar.css';
import "bootstrap/dist/css/bootstrap.min.css";
import project from './project.component';
import { Link } from "@reach/router";
import Issues from './Issues';

export default class Home extends Component {
    render() {
        return (

            <div>
                <div className="container">
                    <div className="heading">
                        <h1 className="h1heading">Projects </h1>
                        <div className="headingnewproject">
                            <a className="headingnewbutton" href="#">New Project </a>
                        </div>
                    </div>
                    <div className="divtwo">
                        <div className="fade-left" >
                            <i className="fa-angle-left" aria-hidden="true" data-hidden="true"></i>
                        </div>
                        <div className="fade-right">
                            <i className="fa-angle-right" aria-hidden="true" data-hidden="true"></i>
                        </div>
                        <ul classname="divtwoele">
                            <li className="divtwoli">
                                <a className="shortcuts-activity" data-placemant="right" >
                                    Your projects
                        <span className="badge-pill"> 1</span>
                                </a>
                            </li>
                            {/* <li className="divtwoli">
                    <a className="shortcuts-activity" data-placemant="right" href="#">
                        Stared projects
                        <span className="badge-pill">0</span>
                    </a>
            </li>
            <li className="divtwoli">
                    <a className="shortcuts-activity" data-placemant="right" href="#">
                        Explored projects
                       
                    </a>
            </li> */}
                        </ul>
                        <div className="divtwotop">
                            <form className="divtwoform" method="get">
                                <input className="divtwoforminp" type="search" name="search" placeholder="Filter by name..." tabIndex="2" spellCheck="false" />
                            </form>
                            <div className="divtwodropdown">
                                <button className="drop-down-menu" type="button" data-toggle="dropdown">
                                    <span classname="drop-down-toggle-text">Last Updated</span>
                                    <i className="fa-chevron-down" aria-hidden="true" data-hidden="true">
                                    </i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="divtwo">

                        <div className="fade-left" >
                            <i className="fa-angle-left" aria-hidden="true" data-hidden="true"></i>
                        </div>
                        <div className="fade-right">
                            <i className="fa-angle-right" aria-hidden="true" data-hidden="true"></i>
                        </div>
                        <ul classname="divtwoele">
                            <li className="divtwoli">
                                <a className="shortcuts-activity" data-placemant="right" href="#">
                                    ALL
                    </a>
                            </li>
                            {/* 
            <li className="divtwoli">
                    <a className="shortcuts-activity" data-placemant="right" href="#">
                        Personal
                    </a>
            </li> */}
                        </ul>
                    </div>
                    <div className="divfour" data-qa-selector="project_list">
                        <ul className="project_list">
                            <li className="project_row">
                                <div className="project_container">
                                    <a className="project_icon" href="#">
                                        <div className="project_avatar" >R</div>
                                    </a>
                                </div>

                                <div className="project_item_container">
                                    <div className="project_list_container">
                                        <div className="pl_inner_container">
                                            <h2 className="pl_inner_h2">

                                                <a className="pl_inner_a">

                                                    <Link to="/project" >
                                                        <span className="pl_inner_span">
                                                            <span className="pl_inner_span2">
                                                                ranjithbiswas755/
                                    </span>
                                                            <span className="pl_inner_span2">
                                                                CL_task
                                    </span>
                                                        </span>
                                                    </Link>

                                                </a>

                                            </h2>
                                        </div>
                                    </div>
                                </div>

                            </li>
                        </ul>

                    </div>
                </div>
            </div>

        );
    }

}