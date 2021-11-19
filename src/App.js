import "./App.css";
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Layouts from './components/core/layout/Layout'
import routes_core from "./routers/core/router";
import { BrowserRouter } from "react-router-dom";


function App() {


  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" component={Layouts} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;