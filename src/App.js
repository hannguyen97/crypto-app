import "./App.css";
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, Fragment } from 'react';
import TemplateRequired from './components/core/layout/required_auth/index'
import routes_core from "./routers/core/router";
import Layouts from './components/core/layout/Layout'


function App() {


  return (
    <Fragment>
      <Suspense fallback={<div>Loading .....</div>}>
        <Router  >
          <Switch>
            <Route path={routes_core.map(item => item.path)}>
              <TemplateRequired routes={routes_core} />
            </Route>
            {/* <Route path={routeNotRequireAuth.map(item => item.path)} key="route-2">
          <Switch>
            <TempNotRequireAuth routes={routeNotRequireAuth} />
          </Switch>
        </Route>
        <Route path='' key="route-404">
          <TempRequireAuth routes={[{ path: '', exact: true, main: () => <PageError404 />, extendTemplate: true, }]} />
        </Route> */}
          </Switch>
        </Router>
      </Suspense >
    </Fragment>
  );
}

export default App;