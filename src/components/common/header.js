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
  const currUser = useSelector(state => state.auth.currUser);
  console.log("user: " + currUser)
  const logout = () => {
    dispatch(logOut());
    history.push("/");
  }

  const account = () => {
    history.push("/account")
  }
  
  const dashboard =() => {
    history.push("/dashboard")
  }

  return (
    <Navbar expand="xl" sticky="top" bg="primary" variant="dark" className="justify-content-between">
      <Navbar.Brand onClick={{dashboard}} style={{ fontSize: "36px"}}>
        <IconContext.Provider value={{ style: { fontSize: "20px", color: "white", marginRight: "15px" } }}>
          <FaFeatherAlt />
        </IconContext.Provider>Social Media Mistake Flagger
      </Navbar.Brand>
      {currUser &&
        <>
        <Button className="justify-content-end logout-btn" type="primary" onClick={logout}>Logout</Button>
        <Button className="justify-content-end" onClick={account}>
          <IconContext.Provider value={{ style: { fontSize: "20px" } }}>
            <FaUser />
          </IconContext.Provider>
        </Button>
        </>
      }
    </Navbar>
  );
};

export default Header;