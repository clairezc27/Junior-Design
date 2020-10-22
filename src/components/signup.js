import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';

const Signup = () => {
  return (
    <Form className="auth" name="register" scrollToFirstError >
      <Form.Item
        name="first"
        rules={[
        {
          required: true,
          message: 'Please input your first name!',
          whitespace: true,
        },
        ]}>
        <Input autocomplete="username" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="First name" />
      </Form.Item>

      <Form.Item
        name="last"
        rules={[
        {
          required: true,
          message: 'Please input your last name!',
          whitespace: true,
        },
        ]}>
        <Input autocomplete="username" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Last name" />
      </Form.Item>

      <Form.Item
        name="email"
        rules={[
        {
          type: 'email',
          message: 'The input is not a valid email!',
        },
        {
          required: true,
          message: 'Please input your email!',
        }
        ]}>
        <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
        {
          required: true,
          message: 'Please input your password!',
        }
        ]}
      >
        <Input.Password autocomplete="new-password" prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
      </Form.Item>

      <Form.Item
        name="confirm"
        dependencies={['password']}
        hasFeedback
        rules={[
        {
          required: true,
          message: 'Please confirm your password!',
        }
        ]}>
        <Input.Password autocomplete="new-password" prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Confirm Password" />
      </Form.Item>

      <Form.Item>
        <Button className="signup-form-button" type="primary" htmlType="submit">
        Register
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Signup;