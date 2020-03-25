import React from 'react'
import { Button, Container, Row, Col, DropdownButton, Dropdown, Form, Jumbotron } from 'react-bootstrap';
import { Router, Link } from '@reach/router'
import Issuecontent from './Issuecontent';

function Issueslist(props) {
    const issues=[{title:"Issue1",id:"1", author:"Adarsha C R",date:new Date()},{title:"Issue2",id:"2",author:"Adarsha C R",date:new Date("03/24/2020")}];
    return (
        <Container>
            <hr />
            <Row>
                <Col sm="10"></Col>
                <Col sm="2">
                    <Button variant="success" >New issue</Button>
                </Col>
            </Row>
            <hr />
            <Row>
                <DropdownButton id="dropdown-basic-button" title="Recent Searches" variant="Secondary">
                    <Dropdown.Item href="#/action-1">No search</Dropdown.Item>
                </DropdownButton>
            </Row>
            <hr/>
            {issues.map((issue)=><Issuecontent issue={issue} />)}
            
        </Container>
    )
}

export default Issueslist
