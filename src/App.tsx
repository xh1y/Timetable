/**
 * Create time: 2024 07 20  23:7:8
 * File name: App.tsx
 * Path: src\App.tsx
 * About: App page
 */
import { router } from './router'
import { RouterProvider } from 'react-router-dom'
import { classDataRaw } from './data'
import Mock from 'mockjs'

function App() {
    Mock.mock('/class/data/', 'get', classDataRaw)
    return <RouterProvider router={router}></RouterProvider>
}

export default App
// App
