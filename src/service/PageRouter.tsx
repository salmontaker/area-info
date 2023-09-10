import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainPage from '../pages/MainPage'
import NotFoundPage from '../pages/NotFoundPage'

function PageRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route element={<NotFoundPage />} path="*" />
      </Routes>
    </BrowserRouter>
  )
}

export default PageRouter
