import React from "react";
import PropTypes from "prop-types";
import { Breadcrumb, Input, Layout } from "antd";
import { Link } from "react-router-dom";
import NavigationAccount from "../NavigationAccount/NavigationAccount";
import Search from "../../common/search";

const { Header, Content, Footer, Sider } = Layout;

Navigation.propTypes = {};

function Navigation(props) {

  const onSearch=(e)=>{
      console.log(e);
  }
  return (
    <Header className="header">
      <div className="web-title">
        <Link className="web-title-content" to="/home">
          CRYPTO
        </Link>
      </div>
      <div className="input">
          <Search/>
          <NavigationAccount />
          {/* <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} /> */}
          {/* <Search placeholder="input search text" onSearch={onSearch} enterButton /> */}
      </div>
    </Header>
  );
}

export default Navigation;
