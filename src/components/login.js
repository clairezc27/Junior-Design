import React from 'react';
import { Form, Input, Button } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const submit = () => {
      history.push('/dashboard');
  }

  return (
    <Form className="auth" name="normal_login"
      initialValues={{
        remember: true,
      }}
      onFinish={submit}
    >
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
        Log in
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Login;