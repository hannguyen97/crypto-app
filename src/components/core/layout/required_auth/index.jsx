import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route, Switch } from 'react-router-dom';
import RequireNotExtendTemp from "./not_extend_temp";
import RequireExtendTemp from "./extend_temp";
import { useLocation } from 'react-router-dom';


TemplateRequired.propTypes = {

};

function TemplateRequired({ routes = [] }) {
    const routeExtendTemp = routes.filter(route => route.extendTemplate !== false);
    const routeNotExtendTemp = routes.filter(route => route.extendTemplate === false);

    const [authenticated , setAuthenticated] = useState(true)

    const location = useLocation()
    return (
        <Fragment>
            <Switch>
            {!authenticated && location.pathname !== "/login" ? <Redirect to={{ pathname: "/login" }} /> : (location.pathname === "/" && location.pathname !== "/home") && <Redirect to="/home" />}
                <Route path={routeNotExtendTemp.map(item => item.path)}>
                    <RequireNotExtendTemp routes={routeNotExtendTemp} />
                </Route>
                <Route path={routeExtendTemp.map(item => item.path)}>
                    <RequireExtendTemp routes={routeExtendTemp} />
                </Route>
            </Switch>
        </Fragment>
    );
}

export default TemplateRequired;