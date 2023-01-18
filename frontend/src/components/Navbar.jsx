import React from 'react'
import "./Navbar.css"
import logo from '../assets/logo.png'
import { motion } from "framer-motion"

function Navbar() {
    return (
        <div className='header'>
            <nav className="navbar bg-primary navbar-expand-lg navbar-dark bg-body-primary navcontainer-fluid">
                <div className="container-fluid">
                    <a className="navbar-brand me-5" href="#"><img src={logo} alt="logo" className='logo' /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item me-5">
                                <a className="nav-link active text-white" aria-current="page" href="#">Overview</a>
                            </li>
                            <li className="nav-item me-5">
                                <a className="nav-link" href="#">Security</a>
                            </li>
                            <li className="nav-item me-5">
                                <a className="nav-link" href="#">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Support</a>
                            </li>
                        </ul>
                        <motion.button whileHover={{
                            scale: 1.3,
                        }} type="button" class="btn nav-btn bg-secondary ms-auto text-white btn-lg ">Download</motion.button>


                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar