import React, { useEffect, useState } from 'react';
import {CardGroup,Card} from 'react-bootstrap'

export default function CardExample({text}) {



    return (
        <>
        {/* // <CardGroup> */}
            <Card className='h-100' border='dark'>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            {/* // </CardGroup> */}
            </>
    )
}
