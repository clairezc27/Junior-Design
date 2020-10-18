import React from 'react';
import { Nav } from 'react-bootstrap';
import Header from './common/header.js'

const NewSearch = () => {
    return (
        <>
        <Header />
        <h1 className="Home-header">New Search</h1>
        <Nav variant="tabs" defaultActiveKey="1">
            <Nav.Item>
                <Nav.Link eventKey="1">Step 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="2">Step 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="3">Step 3</Nav.Link>
            </Nav.Item>
        </Nav>
        </>
    );
};

export default NewSearch;