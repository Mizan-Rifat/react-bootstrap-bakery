import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import { Row, Col } from 'react-bootstrap';


export default function BlogPost() {

    const [posts, setposts] = useState([
        {
            image: '/img/b1.jpg'
        },
        {
            image: '/img/b2.jpg'
        },
        {
            image: '/img/b3.jpg'
        },
    ])

    return (
        <div className="blogPost my-5">

            <div className="pb-5 text-center">
                <h2>Latest Posts From Our Blog</h2>
                <p className='subtitle'>
                    Do you want to share your love of cheese fondue with your children? Or did you just find out that one of your fondue party guests doesn’t drink alcohol. 
                </p>
            </div>

            <div className="">
                <Row>
                    {
                        posts.map(post => (
                            <Col sm={12} md={4}>
                                <BlogCard
                                    post={post}
                                />
                            </Col>
                        ))
                    }
                </Row>
            </div>

        </div>
    )
}
