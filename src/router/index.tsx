/*
 * Create time: 2024 07 21  00:11:03
 */

import { Navigate } from 'react-router'
import ErrorPage from '../views/Error/ErrorPage.tsx'
import Home from '../views/Home/Home.tsx'
import AddDetail from '../views/Add-detail-information/AddDetail.tsx'
import Total from '../views/Total/Total.tsx'
import { createHashRouter } from 'react-router-dom'
import AddTitle from '../views/Add-title-page/AddTitle.tsx'

const router = createHashRouter([
    {
        path: '/',
        element: <Navigate to={'/home'} />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/home',
        element: <Home />,
    },
    {
        path: '/add/detail',
        element: <AddDetail />,
    },
    {
        path: '/add/title',
        element: <AddTitle />,
    },
    {
        path: '/add/total',
        element: <Total />,
    },
])

export { router }
