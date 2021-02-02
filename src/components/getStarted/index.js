import React, { useEffect, useState } from 'react';
import Btn from '../customComponents/Btn'
import {Row,Col} from 'react-bootstrap'



export default function index() {

    return (
        <div className="my-5">
            <Row>
                <Col md={12} lg={8}>
                    <h6>Brand new app to blow your mind</h6>
                    <h2>We’ve baked every item from the core of our heart to serve you</h2>
                    <p className='subtitle'>We are here to listen from you deliver exellence by any means</p>
                    <p className='text-gray'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum in eveniet dignissimos natus, veritatis beatae voluptas numquam iure! Rem, eveniet explicabo optio! Dolores tempora, nostrum repellat illum atque ullam iste iusto accusantium totam assumenda exercitationem pariatur. Labore, qui. Cupiditate, sapiente.</p>
                    <Btn
                        label='Get Started Now'
                    />
                </Col>
                <Col md={12} lg={4} className='align-self-end'>
                    <img className='w-100' src="/img/about-img.png" />
                </Col>
                
            </Row>
        </div>
    )
}
