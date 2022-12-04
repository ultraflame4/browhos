import React from 'react'
import ReactDOM from 'react-dom/client'
import App, {AppMainContent} from './App'
import './index.css'
import {createHashRouter, RouterProvider} from "react-router-dom";
import SettingsPage from "@/components/Settings/SettingsPage";


const router = createHashRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <AppMainContent/>
            },
            {
                path: "/Settings",
                element: <SettingsPage/>
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

    <RouterProvider router={router}/>

)
