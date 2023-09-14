import { Button } from '../Button/Button'
import { GameCard } from '../GameCard/GameCard'
import classes from './GameCardsContainer.module.css'


export const GameCardsContainer = ({ title, gamesData, positioning, elementsPositioning }) => {

    return (
        <div className={classes.container + ' ' + positioning}>
            <h1 className={classes.title}>{title}</h1>
            <div className={classes.gamesCardsContainer}>
                {gamesData.map(item =>
                    <GameCard positioning={elementsPositioning} id={item.id} pictureURL={item.thumbnail} title={item.title} shortDescription={item.short_description} tag={item.genre} key={item.id} />
                )}
            </div>
        </div>

    )

}