import classes from './GameCardsContainer.module.css'


export const GameCardsContainer = ({title, diarection, children }) => {

    return (
        <div className={classes.container}>
            <h1 className={classes.title}>{title}</h1>
            <div className={classes.gamesCardsContainer} style={{ flexDirection: diarection }}>
                {children}
            </div>
        </div>

    )

}