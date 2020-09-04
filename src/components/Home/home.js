import React from 'react';
import { Row, Col, Divider, Button } from 'antd';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="Home">
            <div className="Home-header">
                <Row justify="center">
                    Social Media Mistake Eraser
                </Row>
                <Row justify="center" style={{ fontSize: "24px" }}>
                    Clean up your feed!
                </Row>
            </div>
          <Divider/>
          <Row>
            <Col flex={1}>About
                <br />
                <p>blah blah blah</p>
            </Col>
            <Col style={{ height: "70vh" }}>
                <Divider type="vertical" style={{height: "100%"}}/>
            </Col>
            <Col flex={1}>
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
    )
}

export default Home;