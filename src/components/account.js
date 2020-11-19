import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'antd';
import { Button } from 'react-bootstrap';
import Header from './common/header.js'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteUser, resetUser } from  './../features/auth'
import { useHistory } from "react-router-dom";
import { clearStore } from './../features/twitter';

const Account = () => {

  const currUser = useSelector(state => state.auth.currUser);
  const dispatch = useDispatch();
  const history = useHistory();
  // state hooks
  const [password, setNewPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  
  // set the value of password
  const newPasswordFinish = (event) => {
    setNewPassword(event.target.value);
  }
  
  // set the value of confirmPassword
  const confirmPasswordFinish = (event) => {
    setConfirmPassword(event.target.value)
  }

  // upon clicking delete account button, dispatch and start delete account process
  const deleteClicked = () => {
    dispatch(deleteUser(currUser));
    dispatch(clearStore());
    history.push("/");
  }

  // upon clicking reset password button, dispatch and start reset process
  const resetClicked = () => {
    if (password != confirmPassword) {
      // if passwords mismatch, display appropriate error message
      const errorElement = <p>The passwords you entered did not match.</p>
      ReactDOM.render(errorElement, document.getElementsByClassName('reset-error')[0]);
    } else {
      // if passwords match, dispatch and start reset process
      dispatch(resetUser(currUser, password));
    }
  }

  return (
    <div className="Home">
      <Header />
      <h1 className="Home-header">My Account</h1>
      <Row style={{marginTop: "50px"}}>
        <Col style={{textAlign: "left", marginLeft: "20%"}} flex={2}>
					<p>Email:</p>
					<br />
					<p>Password:</p>
					<br />
					<br />
					<br />
					<br />
					<Button variant="danger" onClick={deleteClicked}>Delete Account</Button>
        </Col>
        <Col style={{textAlign: "left", marginRight: "25%"}} flex={3}>
					<p>{currUser}</p>
					<br />
					<p>******</p>
					<br />
					<InputGroup className="mb-3">
						<Form.Group>
							<Form.Control type="password" placeholder="New Password" onChange={newPasswordFinish}/> 
							<Form.Control type="password" placeholder="Confirm New Password" onChange={confirmPasswordFinish}/>
              <div className="reset-error"></div>
							<br />
							<Button type="primary" onClick={resetClicked}>Submit</Button>
						</Form.Group>
					</InputGroup>
        </Col>
      </Row>
    </div>
  );
};

export default Account;