/**
 * Create time: 2024 07 20  23:7:8
 * File name: App.tsx
 * Path: src\App.tsx
 * About: App page
 */
import { router } from './router'
import { RouterProvider } from 'react-router-dom'
import Mock from 'mockjs'
import { shallowEqual, useSelector } from 'react-redux'

function App() {
    const { allUpdate } = useSelector(
        (state: any) => ({
            allUpdate: state.allUpdate,
        }),
        shallowEqual
    )
    console.log(`allUpdate.commonThingsList = ${allUpdate.commonThingsList}`)
    console.log(allUpdate.commonThingsList)
    Mock.mock('/class/data/', 'get', allUpdate)
    return <RouterProvider router={router}></RouterProvider>
}

export default App
// App
