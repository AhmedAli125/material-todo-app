import React from 'react'
import {Typography} from '@material-ui/core'
import './header.css'

const Header = () => {
    return (
        <div className='header'>
            <Typography 
                variant='h4'
                align='center'
            >
                Todo Application
            </Typography>
        </div>
    )
}

export default Header
