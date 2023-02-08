import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Security from './components/Security'
import Blogsection from './components/Blogsection'
import Support from './components/Support'



function App() {
  return (
    <div>
      <Routes>
        <Route path="/frontend" element={<Home />} />
        <Route path='/frontend/security' element={<Security />} />
        <Route path='/frontend/blog' element={<Blogsection />} />
        <Route path='/frontend/support' element={<Support />} />
      </Routes>

    </div>
  )
}

export default App