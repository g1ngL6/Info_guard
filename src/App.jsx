import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import FactCheck from './pages/FactCheck'
import Result from './pages/Result'
import Learn from './pages/Learn'
import Community from './pages/Community'
import Profile from './pages/Profile'
import About from './pages/About'
import Navbar from './components/Navbar'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 p-6 md:p-10">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/fact-check" element={<FactCheck/>} />
          <Route path="/result" element={<Result/>} />
          <Route path="/learn" element={<Learn/>} />
          <Route path="/community" element={<Community/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </main>
    </div>
  )
}
