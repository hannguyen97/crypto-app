import React, { useState } from "react";
import PropTypes from "prop-types";
import { Layout, Breadcrumb } from "antd";
import MenuRight from "../MenuRight";
import Navigation from "../Navigation";
import { Switch, Route } from "react-router-dom";
import { Suspense } from "react";
import Loading from "../loading";
const { Header, Content, Footer, Sider } = Layout;

Layout.propTypes = {};

function ExtendTemp(routes = [],) {
  return (
    <Layout>
      {/* <MenuRight /> */}
      <Navigation />
      <Layout className="wrapper-content">
        <Content className="main-content">
          <Layout style={{ overflow: "hidden" }}>
            <Content>
              <Suspense fallback={<Loading/>}>
              <Switch>
                {routes.routes.map((route, index) => (
                  <Route key={index} path={route.path} exact component={route.main} />
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
