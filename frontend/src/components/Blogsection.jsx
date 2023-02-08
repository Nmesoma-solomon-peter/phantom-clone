import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Blogintro from './Blogintro'
import Blogcard from './Blogcard'

function Blogsection() {
  return (
    <div>
      <Navbar />
      <Blogintro />
      <Blogcard />
      <Footer />
    </div>
  )
}

export default Blogsection