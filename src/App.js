import React from 'react'
import { Route, BrowserRouter as Router, Routes, } from 'react-router-dom'
import Tab from './Tab'
import './App.css'
const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Tab/>}/>
      </Routes>
    </Router>
    </> 
)
}

export default App