import React, { useEffect, useState } from 'react';
import Slider from './Slider'
import './style.scss'


export default function Review() {

    return (
        <div 
            className='my-5' 
            style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)),url('/img/review-bg.jpg')`,
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                height:'auto',
                width: '100vw',
                position: 'relative',
                left: 'calc(-1* (100vw - 100%) / 2)',
                padding:'7.5rem 0'
                
            }}
        >
            <div className="container ">
                <div className="pb-5 text-center">
                    <h2 className="text-white">Enjoy our Client’s Review</h2>
                    <p className='subtitle text-white'>Who are in extremely love with eco friendly system. </p>
                </div>
                <Slider />
            </div>
        </div>
    )
}
