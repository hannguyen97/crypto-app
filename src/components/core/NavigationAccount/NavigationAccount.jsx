import React, { useState } from "react";
import PropTypes from "prop-types";
import { Menu, Avatar, Dropdown, Badge, Tooltip, Button } from "antd";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import avatar from "../../../images/avatar.jpg"

NavigationAccount.propTypes = {};

function NavigationAccount({ visible }) {
  const [accountDropDownVisible, setAccountDropDownVisible] = useState(true);
  const [authenticated, setAuthenticated] = useState(true);
  const history = useHistory();

  const handleLogout = () => {
    history.push("/login");
  };
  const renderAccountMenu = () => {
    return (
      <Menu
        className="account-menu"
        onClick={() => setAccountDropDownVisible(false)}
      >
        <Menu.Item>
          <p style={{ textAlign: "center" }}>
            <Avatar src={avatar} size={50}>
              hannguyencit@gmail.com
            </Avatar>
          </p>
          <div style={{ textAlign: "center" }}>
            <Link to="/profile">
              <b>hannguyencit@gmail.com</b>
            </Link>
          </div>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="account-profile">
          <Link to="/profile">
            <i className="fa fa-info-circle m-r-10" />
            Thông tin cá nhân {90 < 100 && <Badge dot />}
          </Link>
        </Menu.Item>
        <Menu.Item
          key="account-change-password"
          // onClick={onShowChangePassword}
        >
          <i className="fa fa-key m-r-10" />
          Đổi mật khẩu
        </Menu.Item>
        <Menu.Item
          key="account-change-setting"
          // onClick={onShowSetting}
        >
          <i className="fa fa-cogs m-r-10" />
          Cài đặt
        </Menu.Item>
        <Menu.Divider key="menu-divider-2" />
        <Menu.Item
          key="version"
          style={{ fontStyle: "italic" }}
          onClick={() => {
            setAccountDropDownVisible(false);
          }}
        >
          <div style={{ position: "relative", paddingRight: 20 }}>
            <small>
              <i className="fa fa-code-fork m-r-10" />
              Phiên bản @1.0
            </small>
            <Tooltip title="Thông tin phiên bản" placement="left">
              <i
                className="fa fa-info-circle c-pointer icon-success"
                style={{ position: "absolute", right: 0, top: 5 }}
              />
            </Tooltip>
          </div>
        </Menu.Item>
        <Menu.Divider key="menu-divider-3" />
        <Menu.Item key="account-sign-out" onClick={handleLogout}>
          <i className="fa fa-sign-out m-r-10" />
          Đăng xuất
        </Menu.Item>
      </Menu>
    );
  };
  return (
    <React.Fragment>
      {authenticated ? (
        <Dropdown
          overlay={renderAccountMenu()}
          trigger={["click"]}
          // visible='true'
          onVisibleChange={() => setAccountDropDownVisible(true)}
          className={`nav-action nav-account ${visible ? "active" : ""}`}
          overlayStyle={{ minWidth: 200 }}
        >
          {authenticated ? (
            <span className="avatar-item">
              <Badge count={1}>
                <Avatar shape="square" src={avatar}/>
              </Badge>
            </span>
          ) : (
            <Tooltip title="Tài khoản">
              <span>
                <i className="fa fa-user user-profile" />
              </span>
            </Tooltip>
          )}
        </Dropdown>
      ) : (
        <Tooltip title="Đăng nhập">
          <span className="nav-action nav-account">
            <Link to="login" className="">
              <i className="fa fa-sign-in" />
            </Link>
          </span>
        </Tooltip>
      )}
    </React.Fragment>
  );
}

export default NavigationAccount;
