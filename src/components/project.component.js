import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Accordion, Card, Row, Col} from 'react-bootstrap';
import Avatar from 'react-avatar';

import './project.css';

import { Router, Link } from '@reach/router'

import Issues from './Issues';
import Newissue from './Newissue';

export default class Project extends Component {

constructor(props) {
    super(props)

    this.state = {
         issues:[{title:"first issue",author:"Ranjith", date:"03/24/20", hours:10}]
    };
    console.log(this.state.issues);
}

Addissue=(issue)=>{
    this.setState(prevState=>({
        issues:[...prevState.issues,issue]
    }));

    console.log(this.state.issues);

}



    render() {

        return (

            <Row>
                <Col sm="2" xs="2">
                    <Row>
                        <Col sm="1" />
                        <Avatar sm="5" name="C" size={"40px"} color="#afc8f0" />
                        <Col sm="1" />
                        <h5>cl_task</h5>
                    </Row>
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
                </Col>
                <Col sm="10" xs="10">
                    <Router>
                        <Issues path="issues" issues={this.state.issues} />
                        <Newissue path="issues/new" Addissue={this.Addissue} />
                    </Router>
                </Col>
            </Row>
        );

    }

}