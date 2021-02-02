import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import clsx from 'clsx';



export default function SingleReview({review}) {
    let arr = [1,2,3,4,5];

    return (
        <>
            <style type='text/css'>

                {`
                    .checked{
                        color:yellow;
                    }
                    .not-checked{
                        color:#fff;
                    }
                
                `}
                
            </style>
            <div className="single-review">
                <img src="/img/r1.png" />
                <div className="title d-flex py-3">
                    <a href="#">
                        <h4 className='text-white'>{review.name}</h4>
                    </a>
                    <div className="star px-5">
                        {
                            arr.map((item,index)=>(
                                <FontAwesomeIcon 
                                    icon={faStar} 
                                    className={clsx({
                                        'text-warning' : index < review.star,
                                        'text-white' : index >= review.star
                                    })} 
                                />
                            ))
                        }
                    </div>
                </div>
                <p className='text-white'>{review.review}</p>
            </div>

        </>

    )
}
