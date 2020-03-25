import React from 'react'
import { Button, Container, Row, Col, DropdownButton, Dropdown, Form } from 'react-bootstrap'
import { Router, Link } from '@reach/router'

function Issuecontent({ issue }) {
    var today = new Date();
    var res = today.getHours() - issue.date.getHours();
    return (
        <div>
            <Link to={issue.id}><h4 style={{ color: "#000" }}>{issue.title}</h4></Link>
            <Row>
                <Col sm="6">
                    <p style={{ color: "#777" }}><span>#{issue.id} . </span>Opened {(res == 0) ? <span>just now</span> : <span>{res} hours ago</span>} by <b>{issue.author}</b> <span>{issue.date.toLocaleDateString()}</span></p>
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
