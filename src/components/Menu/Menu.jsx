import React from 'react';
import { Link } from 'react-router-dom';
import {Nav, Navbar} from 'react-bootstrap';

const Menu = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <div className="container">
                    <Navbar.Brand>TO-DO App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/new-task">Nueva tarea</Nav.Link>   
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </>
    );
}

export default Menu;
