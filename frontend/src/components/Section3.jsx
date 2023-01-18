import React from 'react'
import './Section3.css';
import sec3img1 from '../assets/sec3img1.png'
import sec3img2 from '../assets/sec3img2.png'
import sec3img3 from '../assets/sec3img3.png'

function Section3() {
    return (
        <div className='seccontainer-fluid sec3'>
            <div className='row'>
                <div className='col col-md-5 bg-secondary sec3col '>
                    <h3 className='text-white sec3h3'>Earn SOL with a
                        couple clicks
                    </h3>
                    <img src={sec3img1} alt='sec3img1' className='sec3img mt-1' />
                </div>
                <div className='col col-md-5 bg-secondary sec3col sec3colright '>
                    <h3 className='text-white sec3h3'>Lightning fast swaps,
                        super low fees
                    </h3>
                    <img src={sec3img2} alt='sec3img2' className='sec3img mt-5' />
                </div>
            </div>

            <div className='row bg-secondary mt-3 sec3b'>
                <div className='col col-md-5'>
                    <h3 className='text-white sec3h3 sec3h3b'>Use all your favorite Solana apps</h3>
                </div>
                <div className='col col-md-5'>
                    <img src={sec3img3} alt='sec3img3' className='sec3img sec3img3 ' />
                </div>

            </div>
        </div>
    )
}

export default Section3