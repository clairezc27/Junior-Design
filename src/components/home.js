import React from 'react';
import { Row, Col, Divider } from 'antd';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Header from './common/header.js'
import 'antd/dist/antd.css';

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <Row style={{marginTop: "50px"}}>
        <Col style={{paddingTop: "30px"}} flex={1}>About
          <br />
          <p>blah blah blah</p>
        </Col>
        <Col style={{ height: "80vh" }}>
          <Divider type="vertical" style={{height: "100%"}}/>
        </Col>
        <Col style={{paddingTop: "30px"}} flex={1}>
          <Link to="/signup">
            <Button type="primary" style={{ marginBottom: "20px" }}>Sign Up</Button>
          </Link>
          <br />
          <Link to="/login">
            <Button type="primary" style={{ marginTop: "20px" }}>Login</Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default Home;