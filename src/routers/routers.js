import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Apply from '../components/apply'
import Candidates from '../components/candidates'
import Home from '../components/home'
export default function Routers() {
    return (
        <Routes>
            <Route path='/apply' element={<Apply />} />
            <Route path='/candidates' element={<Candidates />} />
            <Route path='/' element={<Home />} />
        </Routes>
    )
}
