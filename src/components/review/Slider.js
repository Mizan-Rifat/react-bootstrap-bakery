import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Slider from "react-slick";
import SingleReview from './SingleReview';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default function MSlider() {

    const [reviews, setreviews] = useState([
        {
            name:'Fannie Rowe',
            star:4,
            review:'Nulla consectetur minim minim aute ipsum eiusmod adipisicing et officia ex deserunt anim velit ut. Nisi reprehenderit labore eiusmod fugiat. Reprehenderit exercitation laborum id sunt irure ea velit ipsum.'
        },
        {
            name:'John Doe',
            star:5,
            review:'Nulla consectetur minim minim aute ipsum eiusmod adipisicing et officia ex deserunt anim velit ut. Nisi reprehenderit labore eiusmod fugiat. Reprehenderit exercitation laborum id sunt irure ea velit ipsum.'
        },
        {
            name:'Annie Row',
            star:4,
            review:'Nulla consectetur minim minim aute ipsum eiusmod adipisicing et officia ex deserunt anim velit ut. Nisi reprehenderit labore eiusmod fugiat. Reprehenderit exercitation laborum id sunt irure ea velit ipsum.'
        },
        {
            name:'Mizan Rifat',
            star:5,
            review:'Nulla consectetur minim minim aute ipsum eiusmod adipisicing et officia ex deserunt anim velit ut. Nisi reprehenderit labore eiusmod fugiat. Reprehenderit exercitation laborum id sunt irure ea velit ipsum.'
        },
        {
            name:'Rifat Mizan',
            star:4,
            review:'Nulla consectetur minim minim aute ipsum eiusmod adipisicing et officia ex deserunt anim velit ut. Nisi reprehenderit labore eiusmod fugiat. Reprehenderit exercitation laborum id sunt irure ea velit ipsum.'
        },
    ])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows:false,
        slidesToShow: 2,
        slidesToScroll: 2
      };

    return (
        <Slider {...settings}>
            {
                reviews.map(review=>(
                    <SingleReview
                        review={review}
                    />
                ))
            }
        </Slider>
    )
}
