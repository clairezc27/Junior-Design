import React from 'react';
import { Row, Col, Button, Tooltip } from 'antd';
import { UserOutlined } from '@ant-design/icons';

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
        </div>
    );
};

export default Dashboard;