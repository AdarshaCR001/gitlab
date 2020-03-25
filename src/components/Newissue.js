import React, { Component } from 'react'
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import Markdown from './Markdown';
import { Link } from '@reach/router';

class Newissue extends Component {

    constructor(props) {
        super(props)

        this.state = {
            title: "",
            description: "",
            checkbox: false,
            milestone: "",
            labels: "",
            weight: "",
            date: "",
            Addissue: props.Addissue
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleCheckbox = (event) => {
        this.setState({ checkbox: !this.state.checkbox });
    }

    handleSubmit = (event) => {
        //event.preventDefault();
        var hours= new Date();
        var issue = {
            title: this.state.title,
            checkbox: this.state.checkbox,
            milestone: this.state.milestone,
            labels: this.state.labels,
            weight: this.state.weight,
            date: this.state.date,
            hours: hours.getHours()
        }
        this.state.Addissue(issue);
    }


    render() {
        return (
            <Container>
                <Form>
                    <hr />
                    <Form.Group as={Row} >
                        <Form.Label column sm="2">
                            Title
                    </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" placeholder="Title" name="title" value={this.state.title} onChange={this.handleChange} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} >
                        <Form.Label column sm="2">Description</Form.Label>
                        <Col sm="10">
                            <Markdown />
                            {/* <Form.Control as="textarea" rows="5" placeholder="Write a comment" name="description" value={this.state.description} onChange={this.handleChange} /> */}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formBasicCheckbox">
                        <Col sm="2"></Col>
                        <Col sm="10">
                            <Form.Check type="checkbox" label="Check me out" name="checkbox" value={this.state.checkbox} onChange={this.handleCheckbox} />
                        </Col>
                    </Form.Group>
                    <hr />
                    <Row>
                        <Col sm="6">
                            <Form.Group as={Row} >
                                <Form.Label column sm="4">Assignee</Form.Label>
                                <Col sm="8">
                                    <Form.Control as="select" placeholder="Assignee" name="assignee" value={this.state.assignee} onChange={this.handleChange}>
                                        <option>Unassigned</option>
                                        <option>Ranjith</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} >
                                <Form.Label column sm="4">Milestone</Form.Label>
                                <Col sm="8">
                                    <Form.Control as="select" placeholder="Milestone" name="milestone" value={this.state.milestone} onChange={this.handleChange}>
                                        <option>No Milestones</option>
                                        <option>Milestones 1</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} >
                                <Form.Label column sm="4">Labels</Form.Label>
                                <Col sm="8">
                                    <Form.Control as="select" placeholder="Labels" name="labels" value={this.state.labels} onChange={this.handleChange}>
                                        <option>No Labels</option>
                                        <option>Labels 1</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} >
                                <Form.Label column sm="4">Weight</Form.Label>
                                <Col sm="8">
                                    <Form.Control type="text" placeholder="Enter a number" name="weight" value={this.state.Weight} onChange={this.handleChange} />
                                </Col>
                            </Form.Group>
                        </Col>
                        <Col sm="5">
                            <Form.Group as={Row} >
                                <Form.Label column sm="4">Assignee</Form.Label>
                                <Col sm="8">
                                    <Form.Control type="date" name="date" value={this.state.date} onChange={this.handleChange} />
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>
                    <hr />
                    <Link to="../"><Button variant="success" onClick={this.handleSubmit}>Submit issue</Button>
                    </Link>
                </Form>
            </Container>
        )
    }
}

export default Newissue
