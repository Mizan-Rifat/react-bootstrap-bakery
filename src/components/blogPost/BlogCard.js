import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card'
import './style.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons'

export default function BlogCard({post}) {

    return (

        <Card>
            <Card.Img variant="top" src={post.image} />

            <Card.Body>

                <Card.Title>
                    <div className="name-tag justify-content-between d-flex py-1">
                        <div className="thumb">
                            <img src="img/blog/c1.jpg" />
                        </div>
                        <div className="d-flex align-items-center comments">

                            <span>13 Dec</span>
                            <FontAwesomeIcon
                                icon={faHeart}
                            />
                            <span>15</span>

                            <FontAwesomeIcon
                                icon={faComment}
                            />
                            <span>04</span>

                        </div>
                    </div>
                </Card.Title>

                <Card.Text>
                    <a href="">
                        <h5>STOCKING YOUR RESTAURANT KITCHEN FINDING RELIABLE SELLERS</h5>
                    </a>
                </Card.Text>

                <Card.Text>
                    
                    <p className="text-gray">
                        Saving money – is something we would all like to do. Whether you are struggling to manage day to day or earning a six figure salary, saving is something we all think about.
                    </p>
                </Card.Text>


            </Card.Body>
        </Card>

    )
}
