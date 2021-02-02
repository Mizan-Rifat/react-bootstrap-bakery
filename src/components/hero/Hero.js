import React, { useEffect, useState } from 'react';
import './hero.scss'
import Btn from '../customComponents/Btn'
import Appbar from '../appbar/Appbar';



export default function Hero() {

    return (
        <div 
            className="head-wrapper" 
            style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)),url('/img/banner-bg.jpg')`,
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                minHeight:'100vh',
            }}>

            

            <Appbar />


            <div className="container head-titles text-center">

                <div className="parent py-5">
                    <p className="htp">Whenever we bake, bake with our heart</p>
                    <hr />
                    <h1>Love with baking items </h1>
                    <hr />
                    <p>Since Americans in the South began roasting pigs publicly, Barbecues have been a staple of North American living. For many, grilling becomes a routine mealtime activity.</p>

                    <Btn label='CHECK OUR MENU'/>
                </div>

            </div>

        </div>
    )
}
