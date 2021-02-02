import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function NewsLetter() {

    return (
        <div className="newsletter">

            <h5>Newsletter</h5>
            <p>Stay update with our latest</p>
            <form className="d-flex nl-form">
                <input type="email" placeholder="Email Address" />
                <button className="nl-btn" type="submit">
                    <FontAwesomeIcon
                        icon={faArrowRight}
                        style={{color:'#fff'}}
                    />
                </button>
            </form>
        </div>

    )
}
