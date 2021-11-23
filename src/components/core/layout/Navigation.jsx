import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb, Layout } from 'antd';
import { Link } from 'react-router-dom';
import NavigationAccount from '../NavigationAccount/NavigationAccount';
const { Header, Content, Footer, Sider } = Layout;

Navigation.propTypes = {
    
};

function Navigation(props) {
    return (
        <Header className="header" >
            <div className="web-title" style={{ paddingLeft:  15 }}>
                    <Link className="web-title-content" to='/' >
                        CRYPTO
                    </Link>
            </div>
                <NavigationAccount/>
        </Header>
    );
}

export default Navigation;