import React, { useCallback, lazy } from "react";

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'))
const Cryptocurent = lazy(() => import('../../pages/Crytocurent/Cryptocurent'))

const routers_core = [
    {
        path: "/",
        exact: true,
        main: () => <HomePage/>,
        requireAuth: true,
        extendTemplate: false,
    },
    {
        path: "/cryptocurent",
        exact: true,
        main: () => <Cryptocurent />,
        requireAuth: true,
        extendTemplate: false,
    }
]
export default routers_core;