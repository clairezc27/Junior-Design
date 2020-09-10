import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { IconContext } from "react-icons";

const Header = () => {
    return (
        <Navbar expand="xl" sticky="top" bg="primary" variant="dark" className="justify-content-between">
            <Navbar.Brand href="/dashboard" style={{ fontSize: "36px"}}>Don't fucking say bad shit on twitter</Navbar.Brand>
            <Button className="justify-content-end">
                <IconContext.Provider value={{ style: { fontSize: "20px" } }}>
                    <FaUser />
                </IconContext.Provider>
            </Button>
        </Navbar>
    );
};

export default Header;