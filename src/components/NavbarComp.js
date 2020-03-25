import React, { Component } from 'react';
import { Button, Container, Row, Col, Form,Nav,Navbar} from 'react-bootstrap';

function NavbarComp (){
    return (
        <>
                <Navbar>  
                    <Nav.Link href="/projects">Projects</Nav.Link>
                    <Nav.Link href="/groups">Groups</Nav.Link>
                    <Nav.Link href="/more">More</Nav.Link>
                </Navbar>
        </>
    )
}

export default NavbarComp;