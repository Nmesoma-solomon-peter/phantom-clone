import React from 'react'
import './Section4.css'
import sec4a from '../assets/sec4a.png'
import sec4b from '../assets/sec4b.png'
import sec4c from '../assets/sec4c.png'
import sec4d from '../assets/sec4d.png'
import avater1 from '../assets/avater1.png'
import avater2 from '../assets/avater2.png'
import avater3 from '../assets/avater3.png'
import avater4 from '../assets/avater4.png'
import avater5 from '../assets/avater5.png'
import twitterlogo from '../assets/twitterlogo.png'
import chrome from '../assets/chrome.png'
import brave from '../assets/brave.png'
import edge from '../assets/edge.png'
import firefox from '../assets/firefox.png'
import { motion } from "framer-motion"


function Section4() {
    return (
        <div className='seccontainer-fluid'>
            <div className='sec4introdiv'>
                <h3 className='text-white sec3h3 '>We’ve got you covered</h3>
                <p className='sec4__introp'>Phantom has everything you need to traverse the Solana ecosystem</p>
            </div>

            {/*card section */}
            <div className='row  sec4row'>
                <motion.div
                    whileHover={{
                        scale: 0.9,
                    }}
                    className='col col-md-5 sec4card__col'>
                    <img src={sec4a} alt='sec4a' className='mt-5 mb-5 ' />
                    <h5 className='sec4h5'>Non-Custodial</h5>
                    <p className='sec4p'>We never have access to any of your data or funds. Ever.</p>
                </motion.div>
                <motion.div
                    whileHover={{
                        scale: 0.9,
                    }}
                    className='col col-md-5 sec4card__col'>
                    <img src={sec4b} alt='sec4b' className='mt-5 mb-5 ' />
                    <h5 className='sec4h5'>Ledger Support</h5>
                    <p className='sec4p'>For additional security you can connect your hardware wallet.</p>
                </motion.div>
            </div>
            {/* sec card 2 */}
            <div className='row mt-3 sec4row'>
                <motion.div
                    whileHover={{
                        scale: 0.9,
                    }}
                    className='col col-md-5 sec4card__col'>
                    <img src={sec4c} alt='sec4a' className='mt-5 mb-5 ' />
                    <h5 className='sec4h5'>Privacy</h5>
                    <p className='sec4p'>Phantom doesn’t track any personal identifiable information, your account addresses, or asset balances.</p>
                </motion.div>
                <motion.div
                    whileHover={{
                        scale: 0.9,
                    }}
                    className='col col-md-5 sec4card__col'>
                    <img src={sec4d} alt='sec4a' className='mt-5 mb-5 ' />
                    <h5 className='sec4h5'>Biometric authentication</h5>
                    <p className='sec4p'>Protect your assets on the go with the convenience you expect.</p>
                </motion.div>
            </div>

            <div className='sec4introdiv'>
                <h3 className='text-white sec3h3 '>People love using Phantom</h3>
                <p className='sec4__introp'>Here are some nice things our users have said about us</p>
            </div>

            {/* second card row */}

            {/* <div className='row'>
                <div className='col col-md-4'></div>
                <div className='col col-md-4'></div>
                <div className='col col-md-4'></div>
            </div> */}

            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 mb-5'>
                <motion.div
                    whileHover={{
                        scale: 1.1,
                    }}
                    className='colum me-4 mb-4'>
                    <div className='columhead'>
                        <img src={avater1} alt='avater1' className='avater1' />
                        <div className='cheadinner mt-3'>
                            <h5 className='text-white'>Rooter <span>2</span></h5>
                            <p className='sec4cardp'>@0xrooter</p>
                        </div>
                        <img src={twitterlogo} alt="twitterlogo" className='twitlogo ' />
                    </div>
                    <div>
                        <p className='text-white'>.@phantom is everything I’ve ever wanted from a web wallet. If it’s a sign of what’s to come, Solana UX will dwarf Ethereum.</p>

                        <p className='columbodyp mt-5'>7:54 AM . Jul 13, 2021 </p>
                    </div>
                </motion.div>

                <motion.div
                    whileHover={{
                        scale: 1.1,
                    }}
                    className='colum me-4 mb-4'>
                    <div className='columhead'>
                        <img src={avater2} alt='avater1' className='avater1' />
                        <div className='cheadinner mt-3'>
                            <h5 className='text-white'>tom <span>2</span></h5>
                            <p className='sec4cardp'>@muhnkee</p>
                        </div>
                        <img src={twitterlogo} alt="twitterlogo" className='twitlogo ' />
                    </div>
                    <div>
                        <p className='text-white'>A wallet can make or break a chain. Having spent some time w/ @phantom’s beta, I can say that it makes using @solana a lot more fun.</p>

                        <p className='columbodyp mt-5'>6:06 AM . Apr 16, 2021 </p>
                    </div>
                </motion.div>

                <motion.div

                    whileHover={{
                        scale: 1.1,
                    }} className='colum mb-4'>
                    <div className='columhead'>
                        <img src={avater3} alt='avater1' className='avater1' />
                        <div className='cheadinner mt-3'>
                            <h5 className='text-white'>nader  <span>2</span></h5>
                            <p className='sec4cardp'>@dabit3</p>
                        </div>
                        <img src={twitterlogo} alt="twitterlogo" className='twitlogo ' />
                    </div>
                    <div>
                        <p className='text-white'>As I’ll touch on later, relayers and dispatchers allow users to have seamless interactions as they would with any normal “web2” application. When i used @phantom for the first time I was blown away at how good it was, better than anything I’d used inside or outside of crypto.</p>

                        <p className='columbodyp'>4:56 PM . Sep 15, 2022 </p>
                    </div>
                </motion.div>

                <motion.div
                    whileHover={{
                        scale: 1.1,
                    }}
                    className='colum me-5'>
                    <div className='columhead'>
                        <img src={avater4} alt='avater1' className='avater1' />
                        <div className='cheadinner mt-3'>
                            <h5 className='text-white'>Dylan Macalinao </h5>
                            <p className='sec4cardp'>@DylanMacalinao</p>
                        </div>
                        <img src={twitterlogo} alt="twitterlogo" className='twitlogo ' />
                    </div>
                    <div>
                        <p className='text-white'>.@phantom is leading the charge for better crypto UX -- huge props to Chris Kelani @fragosti @BChilllman and the rest of the team! Now open to anyone:
                            https://t.co/Y3sK6rwkuN
                            https://t.co/ouGDLZg7Dh</p>

                        <p className='columbodyp mt-5'>11:20 AM . Jul 11, 2021  </p>
                    </div>
                </motion.div>

                <motion.div
                    whileHover={{
                        scale: 1.1,
                    }}
                    className='colum'>
                    <div className='columhead'>
                        <img src={avater5} alt='avater1' className='avater1' />
                        <div className='cheadinner mt-3'>
                            <h5 className='text-white'>Jason Smith </h5>
                            <p className='sec4cardp'>@Iwearahoodie</p>
                        </div>
                        <img src={twitterlogo} alt="twitterlogo" className='twitlogo ' />
                    </div>
                    <div>
                        <p className='text-white'>Absofriginlutely loving the @phantom wallet on Solana. Even got multiple hardware wallets connected, which is something even metamask hasn't been able to achieve yet. Great watching the solana defi ecosystem evolve bit by bit. $SOL

                        </p>

                        <p className='columbodyp mt-5'>9:47 AM . Apr 21, 2021  </p>
                    </div>
                </motion.div>
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
                    <button className='btn btn-lg text-white browser__btn'>Chrome</button>
                </motion.div>
                <motion.div
                    whileHover={{
                        scale: 0.9,
                    }}
                    className='browsericons'>
                    <img src={brave} alt='' className='browser_img' />
                    <button className='btn btn-lg text-white browser__btn'>brave</button>
                </motion.div>
                <motion.div
                    whileHover={{
                        scale: 0.9,
                    }}
                    className='browsericons'>
                    <img src={edge} alt='' className='browser_img' />
                    <button className='btn btn-lg text-white browser__btn'>Edge</button>
                </motion.div>
                <motion.div
                 whileHover={{
                        scale: 0.9,
                    }}
                 className='browsericons'>
                    <img src={firefox} alt='' className='browser_img' />
                    <button
                     className='btn btn-lg text-white browser__btn'>Firefox</button>
                </motion.div>
            </div>
        </div>
    )
}

export default Section4