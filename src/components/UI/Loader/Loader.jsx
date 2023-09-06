import { useState } from 'react'
import classes from './Loader.module.css'
import { useNavigate } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'



export const Loader = () => {


    return (
            <span className={classes.loader}></span>
    )

}