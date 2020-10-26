import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import { FaUser, FaFeatherAlt } from 'react-icons/fa';
import { IconContext } from "react-icons";
import { logOut } from  './../../features/auth';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';


const Header = () => {

const dispatch = useDispatch();
const history = useHistory();
const currentUser = localStorage.getItem('currentUser');

const logout = () => {
  dispatch(logOut());
  history.push("/");
}

  return (
    <Navbar expand="xl" sticky="top" bg="primary" variant="dark" className="justify-content-between">
      <Navbar.Brand href="/dashboard" style={{ fontSize: "36px"}}>
        <IconContext.Provider value={{ style: { fontSize: "20px", color: "white", marginRight: "15px" } }}>
          <FaFeatherAlt />
        </IconContext.Provider>Social Media Mistake Flagger
      </Navbar.Brand>
      {currentUser != null &&
        <Button className="justify-content-end logout-btn" type="primary" onClick={logout}>Logout</Button>
      }
      <Button className="justify-content-end">
        <IconContext.Provider value={{ style: { fontSize: "20px" } }}>
          <FaUser />
        </IconContext.Provider>
      </Button>
    </Navbar>
  );
};

export default Header;