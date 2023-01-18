import React from 'react'
import './Section2.css'
import card1img from '../assets/card1img.png'

function Section2() {
    return (
        <div className='seccontainer-fluid'>
            <div className='row bg-secondary text-white card1'>
                <div className='col col-md-6'>
                    <h1 className='card1text'>A beautiful home
                        for all your NFTs
                    </h1>
                </div>
                <div className='col col-md-6'>
                    <img src={card1img} alt="card1img" className='card1img' />
                </div>
            </div>

            {/* secondcard
            <div className='row text-white  mt-4 secondcard'>
                <div className='col col-md-6 bg-secondary me-5'>
                    <h3>Earn SOL with a couple clicks</h3>
                    <img />
                </div>
                <div className='col col-md-6 bg-secondary ms-5'>
                <h3>Earn SOL with a couple clicks</h3>
                    <img />
                </div>
            </div> */}

        </div>


    )
}

export default Section2