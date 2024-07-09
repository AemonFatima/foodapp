// components/NavBar.js

import React from 'react';
import { Layout, Menu, Avatar } from 'antd';
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
//import AemonsKitchenLogo from '../assets/aemons-kitchen-logo.svg'; // Import the logo

const { Header } = Layout;

const NavBar = () => {
  return (
    <Header>
      <div className="logo">
        <span style={{ fontSize: '18px', fontWeight: 'bold', color: 'white' }}>Aemon's Kitchen</span>
      </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['aemons-kitchen']} style={{ float: 'right' }}>
        <Menu.Item key="profile">
          <Avatar size="large" icon={<UserOutlined />} />
        </Menu.Item>
        <Menu.Item key="cart">
          <ShoppingCartOutlined style={{ fontSize: '20px' }} />
        </Menu.Item>
      </Menu>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['deals']} style={{ float: 'left' }}>
        <Menu.Item key="deals">
          <NavLink to="/deals" activeClassName="active-link">Deals</NavLink>
        </Menu.Item>
        <Menu.Item key="pizza">
          <NavLink to="/pizza" activeClassName="active-link">Pizza</NavLink>
        </Menu.Item>
        <Menu.Item key="burger">
          <NavLink to="/burger" activeClassName="active-link">Burger</NavLink>
        </Menu.Item>
        <Menu.Item key="kabab">
          <NavLink to="/kabab" activeClassName="active-link">Kabab</NavLink>
        </Menu.Item>
        <Menu.Item key="curry">
          <NavLink to="/curry" activeClassName="active-link">Curry</NavLink>
        </Menu.Item>
        <Menu.Item key="drinks">
          <NavLink to="/drinks" activeClassName="active-link">Drinks</NavLink>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default NavBar;
