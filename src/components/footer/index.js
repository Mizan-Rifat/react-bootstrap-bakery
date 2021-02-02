import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style.scss'
import NewsLetter from './NewsLetter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SocialIcons from '../customComponents/SocialIcons'

export default function Footer() {

    return (
        <div className="footer">
            <Container>

                <Row>
                    <Col md={4}>
                        <h5>About Us</h5>
                        <p>
                            If you own an Iphone, you’ve probably already worked out how much fun it is to use it to watch movies-it has that.
                        </p>
                    </Col>
                    <Col md={5}>
                        <NewsLetter />
                    </Col>
                    <Col md={3}>
                        <h5>Follow Us</h5>
                        <p>
                            Let us be social
                        </p>
                        <SocialIcons />
                    </Col>
                </Row>

                <div className="copyright d-flex justify-content-center text-center">
                    <p>Copyright ©2019 All rights reserved | This template is made by Mizan_Rifat</p>
                </div>


            </Container>
        </div>
    )
}
