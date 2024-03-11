import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Grid from './GridGenerator.jsx'
import { GameIntro } from "./GameIntro.jsx"
import NavBar from './NavBar.jsx'
import Credit from './Credit.jsx'

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar/>}>
          <Route index element={<GameIntro/>} />
          <Route path="/grid" element={<Grid/>} />
          <Route path="/credit" element={<Credit/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
