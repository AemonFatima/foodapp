import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';


const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // For simplicity, check hardcoded credentials
    if (username === 'admin' && password === 'password') {
      onLogin(username);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Form onFinish={handleLogin}>
      <Form.Item label="Username" name="username" rules={[{ required: true }]}>
        <Input value={username} onChange={(e) => setUsername(e.target.value)} />
      </Form.Item>
      <Form.Item label="Password" name="password" rules={[{ required: true }]}>
        <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginPage;
