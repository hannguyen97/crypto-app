import React, { useState } from "react";
import PropTypes from "prop-types";
import { Layout, Breadcrumb } from "antd";
import MenuRight from "../MenuRight";
import Navigation from "../Navigation";
import { Switch, Route } from "react-router-dom";
import { Suspense } from "react";
const { Header, Content, Footer, Sider } = Layout;

Layout.propTypes = {};

function ExtendTemp(routes = [],) {
  console.log(routes.routes, "router");
  return (
    <Layout>
      <MenuRight />
      <Navigation />
      <Layout className="wrapper-content">
        <Content className="main-content">
          <Layout style={{ overflow: "hidden" }}>
            <Content>
              <Suspense fallback={<div>loading...</div>}>
              <Switch>
                {routes.routes.map((route) => (
                  <Route path={route.path} exact component={route.main} />
                ))}
              </Switch>
              </Suspense>
            </Content>
          </Layout>
        </Content>
      </Layout>
    </Layout>
  );
}

export default ExtendTemp;
