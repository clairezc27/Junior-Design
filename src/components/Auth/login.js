import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const Login = () => {
    return (
        <Form
        name="normal_login"
        initialValues={{
            remember: true,
        }}
        >
        <Form.Item
            name="username"
            rules={[
            {
                required: true,
                message: 'Please input your Username!',
            },
            ]}>
            <Input
            autocomplete="username"
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
            />
        </Form.Item>

        <Form.Item
            name="password"
            rules={[
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
            <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
            Forgot password
            </a>
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