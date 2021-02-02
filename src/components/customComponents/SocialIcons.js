import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare,faInstagramSquare,faPinterestSquare,faTwitterSquare } from "@fortawesome/free-brands-svg-icons"



export default function SocialIcons() {

    return (
        <div className="social-icons">
            <a href="#">
                <FontAwesomeIcon
                    icon={faFacebookSquare}
                />
            </a>
            <a href="#">
                <FontAwesomeIcon
                    icon={faTwitterSquare}
                />
            </a>
            <a href="#">
                <FontAwesomeIcon
                    icon={faInstagramSquare}
                />
            </a>
            <a href="#">
                <FontAwesomeIcon
                    icon={faPinterestSquare}
                />
            </a>
        </div>
    )
}
