import classes from './GameCard.module.css'


export const GameCard = ({ title, pictureURL, shortDescription, id, teg }) => {

    return (
        <div className={classes.container}>
            <img className={classes.picture} alt='' src={pictureURL} />
            <div className={classes.titleContainer}>
                <h3 className={classes.title}>{title}</h3>
                <p className={classes.teg}>{teg}</p>
            </div>


        </div>

    )

}