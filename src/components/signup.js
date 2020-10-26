import React from 'react';
import Header from './common/header.js';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { signUp } from './../features/auth';


const Signup = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const onFinish = (values) => {
    console.log(values.email);
    console.log(values.password);
    console.log("HELLO")
    dispatch(signUp(values.email, values.password));
    history.push("/dashboard");
  };

  return (
    <>
    <Header />
    <Form className="auth" name="register" onFinish={onFinish} scrollToFirstError >
      <h1 className="Home-header">Sign Up</h1>
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
        Sign Up
        </Button>
      </Form.Item>
    </Form>
    </>
  );
}

export default Signup;