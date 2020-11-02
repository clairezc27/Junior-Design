import React, { cloneElement, useEffect } from 'react';
import { Row, Col } from 'antd';
import { Button } from 'react-bootstrap';
import Box from './common/box.js';
import Header from './common/header.js'
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBatches } from './../features/twitter';

const Dashboard = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const currUser = useSelector(state => state.auth.currUser);

  useEffect(() => {
    dispatch(fetchBatches(currUser))
  });

  const batches = useSelector(state => state.twitter.batches);
  console.log("js: " + batches);

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
          <Box txt="8/27/2020"/>
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