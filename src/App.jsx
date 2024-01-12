import React from 'react'
import Home from './pages/home/Home'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
      {/* </Routes> */}
      {/* <Routes> */}
        <Route path="/about" element={<About/>}/>
      {/* </Routes> */}
      {/* <Routes> */}
        <Route path="/user" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
