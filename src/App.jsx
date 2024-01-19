import React from 'react'
import Home from './pages/home/Home'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Project from './pages/projects/Project'
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/user" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
