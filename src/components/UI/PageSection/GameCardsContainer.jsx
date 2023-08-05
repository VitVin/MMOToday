import { Button } from '../Button/Button'
import classes from './GameCardsContainer.module.css'


export const GameCardsContainer = ({ title, children }) => {

    return (
        <div className={classes.container}>
            <h1 className={classes.title}>{title}</h1>
            <div className={classes.gamesCardsContainer}>
                {children}
            </div>
        </div>

    )

}