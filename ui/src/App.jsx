import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Projects from './pages/Projects'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/about-us' element={<About/>} />
      <Route path='/projects' element={<Projects/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/signin' element={<SignIn/>} />
    </Routes>
    </BrowserRouter>
  )
}
