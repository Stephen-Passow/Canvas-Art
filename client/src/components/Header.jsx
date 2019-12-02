import React, { Component } from 'react'
import { Navbar, Nav, NavItem, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import BlackAndWhiteCategory from './components/BlackAndWhiteCategory'
//import ColorCategory from './ColorCategory'

export default class Header extends Component {
    render() {
        return (
            <div>

                <Navbar fixed='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/">Art by Leidy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            {/* <Nav.Link href="#features">Features</Nav.Link> */}
                            <Nav.Link href="/pricing">Pricing</Nav.Link>
                            <NavDropdown title="Categories" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/">Black and White</NavDropdown.Item>
                                <NavDropdown.Item href="/">Color</NavDropdown.Item>
                                {/* <NavDropdown.Item href="#action/3.3">Food</NavDropdown.Item>  */}
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/">View All</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
                            <Nav.Link eventKey={2} href="/Artist">Contact Me
      </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}