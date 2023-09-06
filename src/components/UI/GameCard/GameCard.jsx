import { useState } from 'react'
import classes from './GameCard.module.css'
import { useNavigate } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'



export const GameCard = ({ title, pictureURL, shortDescription, id, tag, positioning }) => {
    const router = useNavigate()

    return (
                <div className={classes.container + ' ' + positioning} onClick={() => router('/game/' + id)}>
                    <img className={classes.picture} alt='' src={pictureURL} />
                    <p className={classes.description}>{shortDescription}</p>
                    <div className={classes.titleContainer}>
                        <h3 className={classes.title}>{title}</h3>
                        <p className={classes.tag}>{tag}</p>
                    </div>
                </div>

         
    )

}