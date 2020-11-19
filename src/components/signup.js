import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './common/header.js';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, message } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { signUp } from './../features/auth';
import 'antd/dist/antd.css';

const Signup = () => {
  
  const dispatch = useDispatch();
  const history = useHistory();
  // state hooks
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  // set the value of "password"
  const passwordFinish = (event) => {
    setPassword(event.target.value);
  }
  
  // set the value of "confirmPassword"
  const confirmPasswordFinish = (event) => {
    setConfirmPassword(event.target.value)
  }

  // upon submission of the form, dispatch and start sign up process
  const onFinish = (values) => {
    dispatch(signUp(values.email, values.password, signUpSucceed, signUpFailed));
  };

  // if sign up was successful, direct authenticated user to dashboard
  const signUpSucceed = () => {
    history.push("/dashboard");
  };
  
  // if sign up was unsuccessful, display appropriate error message
  const signUpFailed = () => {
    message.error('Signup failed');
    if (password != confirmPassword) {
      // if passwords mismatch
      const errorElement = <p>The passwords you entered did not match. Please double-check and try again.</p>
      ReactDOM.render(errorElement, document.getElementsByClassName('signup-error')[0]); 
    } else {
      // if email is taken 
      const errorElement = <p>An account already exists under the email you entered.</p>
      ReactDOM.render(errorElement, document.getElementsByClassName('signup-error')[0]); 
    }
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
        onChange={passwordFinish}
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
        onChange={confirmPasswordFinish}
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

      <div className="signup-error"></div>

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