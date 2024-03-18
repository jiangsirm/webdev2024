import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Grid from './Grid.jsx'
import { GameIntro } from "./GameIntro.jsx"
import NavBar from './NavBar.jsx'
import Credit from './Credit.jsx'
import GridProvider from './GridProvider.jsx'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <NavBar/>,
    children: [
      {
        path: "/",
        element: <GameIntro></GameIntro>
      },
      {
        path: "grid",
        element: <GridProvider><Grid/></GridProvider>
      },
      {
        path: "credit",
        element: <Credit></Credit>
      }
    ]
  }
]

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>,
)
