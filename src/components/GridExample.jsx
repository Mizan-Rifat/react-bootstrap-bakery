import React, { useEffect, useState } from 'react';
import { Container, Row,Col,Button} from 'react-bootstrap';
import CardExample from './CardExample';
import './style.scss';


export default function GridExample() {

    const [state, setstate] = useState([
        {
            text:'Reprehenderit non nisi consequat dolor non.'
        },
        {
            text:'Reprehenderit non nisi consequat dolor non.Elit ea irure laborum amet sit cupidatat est mollit excepteur reprehenderit aliqua veniam sint.'
        },
        {
            text:'Reprehenderit non nisi consequat dolor non.Pariatur veniam enim do ad do sint tempor fugiat commodo laborum.Eu ullamco incididunt laborum aliquip ullamco.'
        },
    ])

    const addNew = ()=>{
        setstate([...state,{text:'Fugiat deserunt esse labore nulla irure duis.'}])
    }


    return (
        <>
            {/* <style type="text/css">
                {`
                    .box {
                        border:1px solid
                    }
                `}
            </style> */}

            <Container>
                <Row>

                    {
                        state.map(item=>(
                            <Col xs={12} sm={6} md={4}>
                                <CardExample
                                    text={item.text}
                                />
                            </Col>
                        ))
                    }
                   
                    
                </Row>

                <Button onClick={addNew}>
                    Add
                </Button>

            </Container>
        </>
    )
}
