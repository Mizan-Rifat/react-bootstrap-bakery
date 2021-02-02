import React, { useEffect, useState } from 'react';
import { Row,Col} from 'react-bootstrap';
import './style.scss'


export default function Category() {

    const [items, setitems] = useState([
        {
            image:"/img/c1.jpg",
            label:'Pizza',
            details:'inappropriate behavior is often laughed off as “boys will be.'
        },
        {
            image:"/img/c2.jpg",
            label:'Bread',
            details:'inappropriate behavior is often laughed off as “boys will be.'
        },
        {
            image:"/img/c3.jpg",
            label:'Burger',
            details:'inappropriate behavior is often laughed off as “boys will be.'
        },
        {
            image:"/img/c4.jpg",
            label:'Chicken',
            details:'inappropriate behavior is often laughed off as “boys will be.'
        },
    ])

    return (
        <div className="category text-center my-5">

            <div className="pb-5">
                <h2>Category of available items</h2>
                <p className='subtitle'>They are grilling celebrities in their own right. </p>
            </div>
            <Row>
                {
                    items.map(item=>(
                        <Col md={6} lg={3} key={item.label}>
                            <img src={item.image} />
                            <h5 className="py-3">{item.label}</h5>
                            <p className='text-gray'>{item.details}</p>
                        </Col>
                    ))
                }
            </Row>
        </div>

    )
}
