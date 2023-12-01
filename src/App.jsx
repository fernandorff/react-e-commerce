import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/Home.page.jsx'
import { LoginPage } from './pages/Login.page.jsx'

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  )
}
