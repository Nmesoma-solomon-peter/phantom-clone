import React from 'react'
import './Supheader.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'


function Supheader() {
    return (
        <div className='supheader text-white'>
            <div>
                <div className='logorow'>
                    <a className="navbar-brand me-5" href="/"><img src={logo} alt="logo" className='logo suplogo' /></a>
                    <Link to={'/'} style={{textDecoration: 'none',color:'#fff'}}>
                        <p>Home</p>

                    </Link>
                </div>
                <h1 className='supheadp mt-5'>How can we help you?
                </h1>
                <div className='input-group'>
                    <div className='input-field'>
                        <i class="bi bi-search"></i>
                        <input type='text' placeholder='Search for answers...' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Supheader