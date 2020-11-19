import React from 'react';
import ReactDOM from 'react-dom';
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

  // upon submission of form, dispatch and start login process
  const onFinish = (values) => {
    dispatch(login(values.email, values.password, loginSucceed, loginFailed))
  }

  // if login was successful, direct authenticated user to dashboard
  const loginSucceed = () => {
    history.push("/dashboard");
  };
  
  // if login was unsuccessful, display approprioate error message
  const loginFailed = () => {
    message.error('Login failed');
    const errorElement = <p>The email and password you entered did not match our records. Please double-check and try again.</p>
    ReactDOM.render(errorElement, document.getElementsByClassName('login-error')[0]); 
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

      <div className="login-error"></div>

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