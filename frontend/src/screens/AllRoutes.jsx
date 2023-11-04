import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from './HomeScreen'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={HomeScreen} />
    </Routes>
  )
}

