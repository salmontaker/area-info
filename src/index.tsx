import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import DataProvider from './context/DataContext'
import reportWebVitals from './reportWebVitals'
import DataServiceImpl from './service/DataService'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const dataService = new DataServiceImpl()

root.render(
  <React.StrictMode>
    <DataProvider dataService={dataService}>
      <App />
    </DataProvider>
  </React.StrictMode>
)

reportWebVitals()
