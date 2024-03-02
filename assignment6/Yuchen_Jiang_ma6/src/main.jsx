import React from 'react'
import ReactDOM from 'react-dom/client'
import Grid from './Grid'
import GridClassProvider from './GridClassProvider'
import Count from './Counter'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GridClassProvider>
      <Count/>
      <Grid/>
    </GridClassProvider>
  </React.StrictMode>,
)
