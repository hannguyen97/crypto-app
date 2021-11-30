import "./App.scss";
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, Fragment } from 'react';
import TemplateRequired from './components/core/layout/required_auth/index'
import routes_core from "./routers/core/router";
import Layouts from './components/core/layout/Layout'
import Loading from "./components/core/layout/loading";


function App() {


  return (
    <Fragment>
      <Suspense fallback={<Loading/>}>
        <Router  >
          <Switch>
            <Route path={routes_core.map(item => item.path)}>
              <TemplateRequired routes={routes_core} />
            </Route>
            {/* <Route path={routeNotRequireAuth.map(item => item.path)} key="route-2">
              <Switch>
                <TempNotRequireAuth routes={routeNotRequireAuth} />
              </Switch>
            </Route> */}
            <Route path='' key="route-404">
              <TemplateRequired routes={[{ path: '', exact: true, main: () => <Layouts />, extendTemplate: true, }]} />
            </Route>
          </Switch>
        </Router>
      </Suspense >
    </Fragment>
  );
}

export default App;