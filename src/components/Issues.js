import React from 'react'
import { Button, Container, Row, Col, DropdownButton, Dropdown} from 'react-bootstrap';
import { Router, Link } from '@reach/router'
import Issuecontent from './Issuecontent';

function Issues(props) {
    const issues=props.issues;
    console.log(issues);
    return (
        <Container>
            <Row>
                <Col sm="10"></Col>
                <Col sm="2">
                    <Link to="new"><Button variant="success" >New issue</Button></Link>
                </Col>
            </Row>
            <hr />
            <Row>
                <DropdownButton id="dropdown-basic-button" title="Recent Searches" variant="Secondary">
                    <Dropdown.Item href="#/action-1">No search</Dropdown.Item>
                </DropdownButton>
            </Row>
            <hr/>
            { issues.map((issue,index)=><Issuecontent key={index} issue={issue} index={index} />)}
            
        </Container>
    )
}

export default Issues
