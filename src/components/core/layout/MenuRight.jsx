import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Layout , Menu} from 'antd'
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

Menu.propTypes = {
    
};

function MenuRight(props) {
  const [collapsed, setCollapsed] = useState(false)

  const onCollapse =()=>{
    setCollapsed(!collapsed)
  }

    return (
        <Layout.Sider collapsible collapsed={collapsed} onCollapse={onCollapse} theme="dark" style={{position: "fixed" ,
         top: '60px',
          zIndex:5 , height : '100vh' ,
           left : 0,
           width: "200px"
           }}>
        <div className="logo-app" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/home" >Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<PieChartOutlined />}>
            <Link to="/cryptocurent" >Cryptocurrent</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <Menu.SubMenu key="sub1" icon={<UserOutlined />} title="User">
            <Menu.Item key="4">Tom</Menu.Item>
            <Menu.Item key="5">Bill</Menu.Item>
            <Menu.Item key="6">Alex</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="7">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />}>
            Files
          </Menu.Item>
        </Menu>
      </Layout.Sider>
    );
}

export default MenuRight;