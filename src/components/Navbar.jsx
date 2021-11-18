import React from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BuildOutlined,
  FundOutlined,
  MenuOutlined,
  BulbOutlined,
} from "@ant-design/icons/lib/icons";
import icon from "../images/icon.jpg";
import { Chart } from "chart.js";

var data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Dataset #1",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 2,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 20, 81, 56, 55, 40],
    },
  ],
};

var option = {
  responsive: false,
  scales: {
    y: {
      stacked: true,
      grid: {
        display: true,
        color: "rgba(255,99,132,0.2)",
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
};

new Chart("chart-bar", {
  type: "bar",
  options: option,
  data: data,
});

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className='logo-container'>
      <Avatar src={icon} size="large"/>
                <Typography.Title level={2} className='logo'>
                    <Link to="/"> Cryptoverse </Link>
                </Typography.Title>
      <Button className='menu-control-container'></Button>

      </div>
      <Menu theme="dark">
                <Menu.Item icon={<HomeOutlined/>}>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item icon={<FundOutlined/>}>
                    <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                </Menu.Item>
                <Menu.Item icon={<MoneyCollectOutlined/>}>
                    <Link to="/exchanges">Exchanges</Link>
                </Menu.Item>
                <Menu.Item icon={<BulbOutlined/>}>
                    <Link to="/news">News</Link>
                </Menu.Item>
            </Menu>

      
    </div>
  );
};

export default Navbar;
