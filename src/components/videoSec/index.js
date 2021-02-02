import React, { useEffect, useState } from 'react';
import {Row,Col} from 'react-bootstrap'
import Btn from '../customComponents/Btn'



export default function VideoSec() {

    return (
        <>
            <div className='py-5'>
                
                <h6>Brand new app to blow your mind</h6>
                <Row>
                    <Col md={6}>
                        <h2>We’ve made a life that will change you</h2>
                        <p className='subtitle'>We are here to listen from you deliver exellence</p>
                        <p className='text-gray'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum in eveniet dignissimos natus, veritatis beatae voluptas numquam iure! Rem, eveniet explicabo optio! Dolores tempora, nostrum repellat illum atque ullam iste iusto accusantium totam assumenda exercitationem pariatur. Labore, qui. Cupiditate, sapiente.</p>
                        <Btn
                            label='Get Started Now'
                            variant='dark'
                        />
                    </Col>
                    <Col md={6}>
                        <iframe src='https://www.youtube.com/embed/uNT_AxXrUGs'
                            frameborder='0'
                            allow='autoplay; encrypted-media'
                            allowfullscreen
                            title='video'
                            style={{width:'100%',height:'100%'}}
                        />
                    </Col>
                </Row>
            </div>

        </>
    )
}
