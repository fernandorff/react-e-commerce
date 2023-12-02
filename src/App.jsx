import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/Home.page.jsx'

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
}