import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb, Layout } from 'antd';
import { Link } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;

Navigation.propTypes = {
    
};

function Navigation(props) {
    return (
        <Header className="header" >
            <Link to="/">Home page</Link>
        </Header>
    );
}

export default Navigation;