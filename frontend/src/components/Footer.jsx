import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='seccontainer-fluid'>
            <div className='row'>
                <div className='col col-md-6  col-sm-12 text-white'>
                    <h1>Phantom</h1>
                    <p>© Phantom Technologies, Inc.</p>
                </div>
                <div className='col col-md-6 col-sm-12'>
                    <div className='row'>
                        <div className='col col-md-4 col-sm-6'>
                            <h5 className='text-white'>Product</h5>
                            <a href='/' className='footer__links'>Overview</a>
                            <a href='/' className='footer__links'>Download </a>
                            <a href='/' className='footer__links'>Security </a>
                            <a href='/' className='footer__links'>Support </a>
                            <a href='/' className='footer__links'>Feature Requests</a>
                        </div>
                        <div className='col col-md-4 col-sm-6'>
                            <h5 className='text-white'>Resources</h5>
                            <a href='/' className='footer__links'>Blog</a>
                            <a href='/' className='footer__links'>Docs</a>
                            <a href='/' className='footer__links'>Status</a>
                            <a href='/' className='footer__links'>Taxes</a>
                            <a href='/' className='footer__links'>Terms</a>
                            <a href='/' className='footer__links'>Privacy</a>
                        </div>
                        <div className='col col-md-4 col-sm-6'>
                            <h5 className='text-white'>Company</h5>
                            <a href='/'  className='footer__links'>About </a>
                            <a href='/'  className='footer__links'>Jobs </a>
                            <a href='/'  className='footer__links'>Press Kit</a>
                            <a href='/'  className='footer__links'>Twitter</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer