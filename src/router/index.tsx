/**
 * Create time: 2024 07 21  00:11:03
 * File name: styles.tsx
 * Path: src/router
 * About: router
 */
import Home from '../views/Home/Home.tsx'
import { createHashRouter, Navigate } from 'react-router-dom'
import ErrorPage from '../views/Error/ErrorPage.tsx'

const router = createHashRouter([
    {
        path: '/',
        element: <Navigate to={'/home'} />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/home',
        element: <Home />,
        children: [],
    },
])

export { router }
