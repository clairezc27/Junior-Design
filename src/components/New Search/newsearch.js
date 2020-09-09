import React from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { IconContext } from "react-icons";

const NewSearch = () => {
    return (
        <>
        <Navbar  expand="xl" sticky="top" bg="primary" variant="dark" className="justify-content-between">
            <Navbar.Brand href="/dashboard" style={{ fontSize: "36px"}}>Social Media Mistake Eraser</Navbar.Brand>
            <Button className="justify-content-end">
                <IconContext.Provider value={{ style: { fontSize: "20px" } }}>
                    <FaUser />
                </IconContext.Provider>
            </Button>
        </Navbar>
        <Nav variant="tabs" defaultActiveKey="1">
            <Nav.Item>
                <Nav.Link eventKey="1">Step 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="2">Step 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="2">Step 2</Nav.Link>
            </Nav.Item>
        </Nav>
        </>
    );
};

export default NewSearch;