import React from 'react'
import './Section1.css'
import handimage from '../assets/handimage.png'
import watch from '../assets/watch.png'
import { motion } from "framer-motion"



function section1() {
    return (
        <div className='seccontainer-fluid'>
            <div className='row mt-5'>
                <div className='col col-md-6 text-white'>
                    <div className='sec1row1'>
                        <button type='button' className='btn text-white newbtn mb-3'><span className='new text-primary'>NEW</span> Coming to Etherum and Polygon!  <i className="bi bi-chevron-right text-white"></i> </button>

                        <h1 className='sec1h1'>A friendly crypto wallet</h1>

                        <p className='mt-5 mb-5  sec1intro'>
                            Phantom makes it safe & and easy for you to store, buy, send, receive, swap tokens and collect NFTs on the Solana blockchain.
                        </p>
                        <div className='mb-4'>
                            <motion.button
                                whileHover={{
                                    scale: 1.3,
                                }}
                                type='button' className='btn btn-lg bg-secondary text-white me-4 sec1download'>Download</motion.button>
                            <motion.button
                                whileHover={{
                                    scale: 1.3,
                                }}
                                type='button' className='btn btn-lg text-white sec1watch sec1watch'> <img src={watch} alt="watch" className='me-3' />Watch</motion.button>
                        </div>
                        <p className='sec1lastp'>Available on iOS, Android, Chrome, Brave, and more!
                        </p>

                    </div>
                </div>
                <div className='col col-md-6'>
                    <img src={handimage} alt='handimage' className='handimg' />
                </div>
            </div>
        </div>
    )
}

export default section1