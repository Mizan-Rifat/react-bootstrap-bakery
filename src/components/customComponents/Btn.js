import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button'
import styles from './style.scss'
import clsx from 'clsx'

export default function Btn({label,variant='tan'}) {

    return (

        <>

            <style>
                {
                    `
                    .textTan:hover {
                        color: #D1AB7E !important;
                    }
                    .textDark:hover {
                        color: #1D1F21 !important;
                    }
                    `
                }
            </style>

            <Button
                variant={variant}
                className={clsx({
                    textTan : variant === 'tan',
                    textDark : variant === 'dark',
                })}
            >
                {label}
            </Button>
        </>
    )
}
