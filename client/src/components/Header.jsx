import React, { Component } from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Header extends Component {
    render() {
        return (
            <div>

                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Art by Leidy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            {/* <Nav.Link href="#features">Features</Nav.Link> */}
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Categories" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Black and White</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Color</NavDropdown.Item>
                                {/* <NavDropdown.Item href="#action/3.3">Food</NavDropdown.Item>  */}
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">View All</NavDropdown.Item>
                            </NavDropdown> 
                        </Nav>
                        <Nav>
                            {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
                            <Nav.Link eventKey={2} href="#memes">Contact Me
      </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}