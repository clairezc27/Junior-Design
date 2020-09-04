import React from 'react';
import { Row, Col, Button, Tooltip } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Box from '../Common/box';

const Dashboard = () => {
    return (
        <div className="Home">
            <div className="Home-header">
                <Row justify="center">
                    Social Media Mistake Eraser
                    <Tooltip className="user-btn" title="User Profile">
                        <Button type="primary" shape="circle" size="large" icon={<UserOutlined />} />
                    </Tooltip>
                </Row>
            </div>
                <Button style={{marginBottom: "20px"}} type="primary" size="large">New Search</Button>
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