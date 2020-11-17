import React from 'react';
import Header from './common/header.js';
import { Form, Input, Button, message } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { login } from './../features/auth';
import 'antd/dist/antd.css';

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(login(values.email, values.password, loginSucceed, loginFailed))
  }

  const loginSucceed = () => {
    history.push("/dashboard");
  };
  
  const loginFailed = () => {
    message.error('Login failed');
  };

  return (
    <>
    <Header />
    <Form className="auth" name="normal_login"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <h1 className="Home-header">Login</h1>
      <Form.Item name="email"
        rules={[
        {
          required: true,
          message: 'Please input your email!',
        },
        ]}>
        <Input autocomplete="email" prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email"/>
      </Form.Item>

      <Form.Item name="password" rules={[
        {
          required: true,
          message: 'Please input your Password!',
        },
        ]}
      >
        <Input.Password
          autocomplete="current-password"
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <Button
        className="login-form-button"
        type="primary"
        htmlType="submit"
        >
        Login
        </Button>
      </Form.Item>
    </Form>
    </>
  );
}

export default Login;