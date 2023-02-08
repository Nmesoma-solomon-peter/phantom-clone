import React from 'react'
import './Security2.css'
import chrome from '../assets/chrome.png'
import brave from '../assets/brave.png'
import edge from '../assets/edge.png'
import firefox from '../assets/firefox.png'
import { motion } from "framer-motion"


function Security2() {
    return (
        <div className='container-fluidsec secu2'>
            <div className='row krow '>
                <div className='col col-md-6 kard '>
                    <h3 className='cardh3'>We never have access to your funds or private keys</h3>
                    <p className='cardp'>Phantom is a self-custodial wallet. Your private keys are encrypted on your device by your password and are never shared with anyone.</p>
                </div>
                <div className='col col-md-6 kard kardright'>
                    <h3 className='cardh3'>Independently audited</h3>
                    <p className='cardp'>Our code has been audited by Kudelski Security, a top software auditing firm trusted by technology companies worldwide.</p>
                    <h4 ><a href="https://phantom.app/Phantom_Security_Audit.pdf" className='cardlink'>Read the Report </a> <span><i class="bi bi-arrow-right"></i></span></h4>

                </div>
            </div>

            <div className='row mt-2 krow'>
                <div className='col col-md-6 kard '>
                    <h3 className='cardh3'>Your privacy is respected</h3>
                    <p className='cardp'>Phantom wallet doesn’t track any personal identifiable information, your account addresses or asset balances.</p>
                    <h4 ><a href="https://phantom.app/privacy" className='cardlink'>Go to Privacy Policy </a> <span><i class="bi bi-arrow-right"></i></span></h4>

                </div>
                <div className='col col-md-6 kard kardright'>
                    <h3 className='cardh3'>Check out our bug bounty</h3>
                    <p className='cardp'>White hat hackers can be rewarded up to $50,000 for finding vulnerabilities that may result in the loss of user funds.</p>
                    <h4 ><a href="https://phantom.app/bug-bounty" className='cardlink'>Go to Bug Bounty </a> <span><i class="bi bi-arrow-right"></i></span></h4>

                </div>
            </div>


            <div className='sec4introdiv lastintro'>
                <h3 className='text-white sec3h3'>Try Phantom now!</h3>
                <p className='sec4__introp'>Turn your favorite browser into a web3 enabled crypto wallet</p>
            </div>
            <div className='d-flex justify-content-center'>
                <motion.div
                    whileHover={{
                        scale: 0.9,
                    }}
                    className='browsericons'>
                    <img src={chrome} alt='' className='browser_img' />
                    <button className='btn btn-lg text-white secbrowser__btn'>Chrome</button>
                </motion.div>
                <motion.div
                    whileHover={{
                        scale: 0.9,
                    }}
                    className='browsericons'>
                    <img src={brave} alt='' className='browser_img' />
                    <button className='btn btn-lg text-white secbrowser__btn'>brave</button>
                </motion.div>
                <motion.div
                    whileHover={{
                        scale: 0.9,
                    }}
                    className='browsericons'>
                    <img src={edge} alt='' className='browser_img' />
                    <button className='btn btn-lg text-white secbrowser__btn'>Edge</button>
                </motion.div>
                <motion.div
                 whileHover={{
                        scale: 0.9,
                    }}
                 className='browsericons'>
                    <img src={firefox} alt='' className='browser_img' />
                    <button
                     className='btn btn-lg text-white secbrowser__btn'>Firefox</button>
                </motion.div>
            </div>

        </div>
    )
}

export default Security2