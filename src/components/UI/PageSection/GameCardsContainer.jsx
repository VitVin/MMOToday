import { Button } from '../Button/Button'
import { GameCard } from '../GameCard/GameCard'
import classes from './GameCardsContainer.module.css'


export const GameCardsContainer = ({ title, gamesData }) => {

    return (
        <div className={classes.container}>
            <h1 className={classes.title}>{title}</h1>
            <div className={classes.gamesCardsContainer}>
                {gamesData.map(item =>
                    <GameCard id={item.id} pictureURL={item.thumbnail} title={item.title} shortDescription={item.short_description} teg={item.genre} key={item.id} />
                )}
            </div>
        </div>

    )

}