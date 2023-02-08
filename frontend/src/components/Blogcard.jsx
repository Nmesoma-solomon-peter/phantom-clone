import React from 'react'
import './Blogcard.css'
import blog1 from '../assets/blog1.png'
import blog2 from '../assets/blog2.png'
import blog3 from '../assets/blog3.png'
import blog4 from '../assets/blog4.png'
import blog5 from '../assets/blog5.png'
import blog6 from '../assets/blog6.png'
import blog7 from '../assets/blog7.png'
import blog8 from '../assets/blog8.png'
import blog9 from '../assets/blog9.png'
import blog10 from '../assets/blog10.png'
import blog11 from '../assets/blog11.png'
import blog12 from '../assets/blog12.png'
import { motion } from "framer-motion"
import { Link } from "react-router-dom"


function Blogcard() {
    return (
        <div className='blogcontainer-fluid'>
            {/* first row */}
            <div className='row'>
                <motion.div
                    whileHover={{
                        scale: 0.8,
                    }}
                    className='col col-md-4 bcard'>
                    <a href='https://phantom.app/blog/why-i-decided-to-work-in-web3-at-phantom' style={{ textDecoration: 'none' }}>
                        <img src={blog1} alt='blog1' className='cardimg' />
                        <p className='cardp'>Why I decided to work in web3 at Phantom</p>
                    </a>
                </motion.div>
                <motion.div
                    whileHover={{
                        scale: 0.8,
                    }}
                    className='col col-md-4 bcard'>
                    <a href='https://phantom.app/blog/one-wallet-for-everything-adding-ethereum-and-polygon' style={{ textDecoration: 'none' }}>
                        <img src={blog2} alt='blog1' className='cardimg' />
                        <p className='cardp'>One Wallet for Everything: Adding Ethereum and Polygon</p>
                    </a>
                </motion.div>
                <motion.div
                    whileHover={{
                        scale: 0.8,
                    }}
                    className='col col-md-4 bcard'>
                    <a href='https://phantom.app/blog/the-complete-guide-to-phantom-deeplinks' style={{ textDecoration: 'none' }}>
                        <img src={blog3} alt='blog1' className='cardimg' />
                        <p className='cardp'>The Complete Guide to Phantom Deeplinks</p>
                    </a>

                </motion.div>
            </div>
            {/* second row */}
            <div className='row mt-5'>
                <motion.div
                    whileHover={{
                        scale: 0.8,
                    }}
                    className='col col-md-4'>
                    <a href='https://phantom.app/blog/introducing-burn-nfts' style={{ textDecoration: 'none' }} >
                        <img src={blog4} alt='blog1' className='cardimg' />
                        <p className='cardp'>Introducing Burn NFTs</p>
                    </a>

                </motion.div>
                <motion.div
                    whileHover={{
                        scale: 0.8,
                    }}
                    className='col col-md-4'>
                    <a href='https://phantom.app/blog/partnering-with-magic-eden' style={{ textDecoration: 'none' }}>
                        <img src={blog5} alt='blog1' className='cardimg' />
                        <p className='cardp'>Partnering with Magic Eden to Push NFTs Forward</p>
                    </a>

                </motion.div>
                <motion.div
                    whileHover={{
                        scale: 0.8,
                    }}
                    className='col col-md-4'>
                    <a href='https://phantom.app/blog/demonic-vulnerability'>
                        <img src={blog6} alt='blog1' className='cardimg' />
                        <p className='cardp'>Keeping Phantom safe from the "Demonic" critical vulnerability</p>

                    </a>

                </motion.div>
            </div>
            {/* 3rd row */}
            <div className='row mt-5'>
                <motion.div
                    whileHover={{
                        scale: 0.8,
                    }}
                    className='col col-md-4'>
                    <a href='https://phantom.app/blog/android-launch' style={{ textDecoration: 'none' }}>
                        <img src={blog7} alt='blog1' className='cardimg' />
                        <p className='cardp'>Phantom Launches on Android</p>
                    </a>
                </motion.div>
                <motion.div
                    whileHover={{
                        scale: 0.8,
                    }}
                    className='col col-md-4'>
                    <a href='https://phantom.app/blog/partnering-with-cointracker-for-solana-tax-help' style={{ textDecoration: 'none' }}>
                        <img src={blog8} alt='blog1' className='cardimg' />
                        <p className='cardp'>Partnering with CoinTracker for Solana tax support</p>
                    </a>

                </motion.div>
                <motion.div
                    whileHover={{
                        scale: 0.8,
                    }}
                    className='col col-md-4'>
                    <a href='https://phantom.app/blog/introducing-phantom-deeplinks' style={{ textDecoration: 'none' }}>
                        <img src={blog9} alt='blog1' className='cardimg' />
                        <p className='cardp'>Introducing Phantom Deeplinks</p>
                    </a>
                </motion.div>
            </div>

            {/* 4th row */}
            <div className='row mt-5'>
                <motion.div
                    whileHover={{
                        scale: 0.8,
                    }}
                    className='col col-md-4'>
                    <a href='https://phantom.app/blog/product-updates-recent-activity-notifications-performance-and-more' style={{ textDecoration: 'none' }}>
                        <img src={blog10} alt='blog1' className='cardimg' />
                        <p className='cardp'>Why I decided to work in web3 at Phantom</p>
                    </a>
                </motion.div>
                <motion.div
                    whileHover={{
                        scale: 0.8,
                    }}
                    className='col col-md-4'>
                    <a href='https://phantom.app/blog/android-beta' style={{ textDecoration: 'none' }}>
                        <img src={blog11} alt='blog1' className='cardimg' />
                        <p className='cardp'>One Wallet for Everything: Adding Ethereum and Polygon</p>
                    </a>

                </motion.div>
                <motion.div
                    whileHover={{
                        scale: 0.8,
                    }}
                    className='col col-md-4'>
                    <a href='https://phantom.app/blog/phantom-for-iphone-series-b' style={{ textDecoration: 'none' }}>
                        <img src={blog12} alt='blog1' className='cardimg' />
                        <p className='cardp'>The Complete Guide to Phantom Deeplinks</p>
                    </a>
                </motion.div>
            </div>
        </div>
    )
}

export default Blogcard