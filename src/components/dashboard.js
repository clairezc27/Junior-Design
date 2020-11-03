import React from 'react';
import { Button } from 'react-bootstrap';
import { Row, Col } from 'antd';
import Box from './common/box.js';
import Header from './common/header.js'
import { useHistory } from 'react-router-dom';

const Dashboard = () => {
  const history = useHistory();

  const onClick = () => {
    console.log("pushed")
    history.push("/new-search");
  }

  return (
    <div className="Home">
      <Header />
      <h1 className="Home-header">Welcome Home!</h1>
      <Button className="new-search-btn" type="primary" size="large" onClick={onClick}>New Search</Button>
      <Row>
        <Col span={8}>Order Date</Col>
        <Col span={8}>Twitter Handle</Col>
        <Col span={8}>Status</Col>
      </Row>
      <Box />
    </div>
  );
};

export default Dashboard;