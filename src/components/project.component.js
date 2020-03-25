import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Accordion, Card } from 'react-bootstrap';

import './project.css';

import { Router, Link } from '@reach/router'

import Issues from './Issues';

export default class Project extends Component {




    render() {

        return (

            <div className="container">
                <div className="layout_page">
                    <div className="sidebar">
                        <div className="side_scroll">
                            <div className="side_header">
                                <a title="CL_task" href="/project" className="sidebar_a">
                                    <div className="avatar_container">
                                        <div className="avatar">C</div>
                                    </div>
                                    <div className="sidebar-context-title">
                                        CL_task
                           </div>
                                </a>
                            </div>
                            <Accordion defaultActiveKey="0">
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                        Project Overview
    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            <ul style={{ listStyleType: "none" }}>
                                                <li><Link to="#">Details</Link></li>
                                                <li><Link to="#">Activity</Link></li>
                                                <li><Link to="#">Release</Link></li>
                                            </ul></Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="1">
                                        <Link to="issues">Issues</Link>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body><ul style={{ listStyleType: "none" }}>
                                            <li><Link to="#">List</Link></li>
                                            <li><Link to="#">Boards</Link></li>
                                            <li><Link to="#">Labels</Link></li>
                                            <li><Link to="#">Service Desk</Link></li>
                                            <li><Link to="#">Milestones</Link></li>
                                        </ul></Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>

                        </div>

                    </div>
                </div>
                <Router>
                    <Issues path="issues" />
                </Router>
            </div>
        );

    }

}