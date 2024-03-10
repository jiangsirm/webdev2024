import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Grid } from './GridGenerator.jsx'
import {GameIntro} from "./GameIntro.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Grid/>
    <GameIntro></GameIntro>
  </React.StrictMode>,
)
