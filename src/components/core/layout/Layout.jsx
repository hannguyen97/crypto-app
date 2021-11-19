import React, { useState } from "react";
import PropTypes from "prop-types";
import { Layout, Breadcrumb } from "antd";
import MenuRight from "./MenuRight";
import Navigation from "./Navigation";
import { Switch, Route } from "react-router-dom";
import routers_core from "../../../routers/core/router";
const { Header, Content, Footer, Sider } = Layout;

Layout.propTypes = {};

function Layouts() {
  return (
    <Layout>
      <MenuRight />
      <Navigation />
      <Layout className="wrapper-content">
        <Content>
          <Layout style={{ overflow: "hidden" }}>
            <Content>
              <Switch>
                {routers_core?.map((route) => (
                  <Route path={route.path} exact component={route.main} />
                ))}
              </Switch>
            </Content>
          </Layout>
        </Content>
      </Layout>
    </Layout>
  );
}

export default Layouts;
