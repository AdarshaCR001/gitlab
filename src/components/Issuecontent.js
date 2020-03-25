import React from 'react'
import { Button, Container, Row, Col, DropdownButton, Dropdown, Form } from 'react-bootstrap'
import { Router, Link } from '@reach/router'

function Issuecontent({ issue,index }) {
    var res=0;
    var count=index+1;
    if(issue.hours !=="" && issue.hours !== undefined)
    {
    var today = new Date();
    var res = today.getHours() - issue.hours;
    }
    return (
        <div>
            <Link to={count.toString()}><h4 style={{ color: "#000" }}>{issue.title}</h4></Link>
            <Row>
                <Col sm="6">
                    <p style={{ color: "#777" }}><span>#{count} . </span>Opened {(res == 0) ? <span>just now</span> : <span>{res} hours ago</span>} by <b>{issue.author}</b> <span>{issue.date}</span></p>
                </Col>
                <Col sm="3" />
                <Col>
                    <p>Updated {(res == 0) ? <span>just now</span> : <span>{res} hours ago</span>}</p>
                </Col>
            </Row>
        </div>
    )
}

export default Issuecontent
