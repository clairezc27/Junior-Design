import React from 'react';
import { Row, Col } from 'antd';
import { Button } from 'react-bootstrap';
import Box from './common/box.js';
import Header from './common/header.js'

const Dashboard = () => {
  return (
    <div className="Home">
      <Header />
      <Button style={{margin: "20px 0px"}} type="primary" size="large">New Search</Button>
      <Row>
        <Col span={8}>Searches</Col>
        <Col span={8}>Twitter Handle</Col>
        <Col span={8}>Status</Col>
      </Row>
      <Row>
        <Col span={8}>
          <Box txt="9/1/2020"/>
        </Col>
        <Col span={8}>
          <Box txt="@claire"/>
        </Col>
        <Col span={8}>
          <Box txt="pending"/>
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          Box txt="8/27/2020"/>
        </Col>
        <Col span={8}>
          <Box txt="@brett"/>
        </Col>
        <Col span={8}>
          <Box txt="completed 8/31/2020"/>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;