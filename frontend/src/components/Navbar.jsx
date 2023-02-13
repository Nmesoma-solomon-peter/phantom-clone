import React from 'react'
import "./Navbar.css"
import logo from '../assets/logo.png'
import { motion } from "framer-motion"
import { Link } from "react-router-dom"


function Navbar() {
    return (
        <div className='header'>
            <nav className="navbar bg-primary navbar-expand-lg navbar-dark navcontainer-fluid">
                <div className="container-fluid">
                    <a className="navbar-brand me-5" href="/"><img src={logo} alt="logo" className='logo' /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item me-5">
                                <Link to='/' style={{ textDecoration: 'none' }} >
                                    <p className="nav-link active text-white" aria-current="page">Overview</p>
                                </Link>
                            </li>
                            {/* <link to="/">Overview</link> */}
                            <li className="nav-item me-5">
                                <Link to="/security" style={{ textDecoration: 'none' }}>
                                    <p className="nav-link" href="#">Security</p>
                                </Link>
                            </li>
                            <li className="nav-item me-5">
                                <Link to="/blog" style={{ textDecoration: 'none' }}>
                                    <p className="nav-link" href="#">Blog</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/support" style={{ textDecoration: 'none' }}>
                                    <p className="nav-link" href="#">Support</p>
                                </Link>
                            </li>
                        </ul>
                        <motion.button whileHover={{
                            scale: 1.3,
                        }} type="button" className="btn nav-btn bg-secondary ms-auto text-white btn-lg ">Download</motion.button>


                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar