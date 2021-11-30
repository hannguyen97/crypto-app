import React, { lazy } from "react";

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'))
const Cryptocurent = lazy(() => import('../../pages/Crytocurent/Cryptocurent'))
const Login = lazy(() => import('../../pages/core/Login'))
const Register = lazy(() => import('../../pages/core/Register'))
const Profile = lazy(() => import('../../pages/core/Profile'))

const routers_core = [
    {
        path: "/home",
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
    },
    {
        path: "/profile",
        exact: true,
        main: () => <Profile />,
        requireAuth: true,
        extendTemplate: true,
    }
]
export default routers_core;