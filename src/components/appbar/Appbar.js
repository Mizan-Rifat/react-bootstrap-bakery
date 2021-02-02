import React, { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import './appbar.scss'
import SocialIcons from '../customComponents/SocialIcons'


export default function Appbar() {

    return (
        <Container>

            <div className="py-2">
                <SocialIcons />
            </div>   

            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">
                    <img src="/img/logo.png"/>

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">About</Nav.Link>
                        <Nav.Link href="#link">Menu</Nav.Link>
                        <Nav.Link href="#link">Team</Nav.Link>
                        <NavDropdown title="Blog" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>

        </Container>
    )
}
