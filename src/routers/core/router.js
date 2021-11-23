import React, { lazy } from "react";

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'))
const Cryptocurent = lazy(() => import('../../pages/Crytocurent/Cryptocurent'))
const Login = lazy(() => import('../../pages/core/Login'))
const Register = lazy(() => import('../../pages/core/Register'))

const routers_core = [
    {
        path: "/",
        exact: true,
        main: () => <HomePage/>,
        requireAuth: true,
        extendTemplate: true,
    },
    {
        path: "/cryptocurent",
        exact: true,
        main: () => <Cryptocurent />,
        requireAuth: true,
        extendTemplate: true,
    },
    {
        path: "/login",
        exact: true,
        main: () => <Login />,
        requireAuth: true,
        extendTemplate: false,
    },
    {
        path: "/register",
        exact: true,
        main: () => <Register />,
        requireAuth: true,
        extendTemplate: false,
    }
]
export default routers_core;