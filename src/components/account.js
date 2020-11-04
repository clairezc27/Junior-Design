import React from 'react';
import { Row, Col } from 'antd';
import { Button } from 'react-bootstrap';
import Header from './common/header.js'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useSelector } from 'react-redux';

const Account = () => {

	const currUser = useSelector(state => state.auth.currUser);
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
					<Button variant="danger">Delete Account</Button>
        </Col>
        <Col style={{textAlign: "left", marginRight: "25%"}} flex={3}>
					<p>{currUser}</p>
					<br />
					<p>******</p>
					<br />
					<InputGroup className="mb-3">
						<Form.Group>
							<Form.Control type="password" placeholder="New password" /> 
							<Form.Control type="password" placeholder="Confirm password" />
							<br />
							<Button type="primary">Submit</Button>
						</Form.Group>
					</InputGroup>
        </Col>
      </Row>
    </div>
  );
};

export default Account;