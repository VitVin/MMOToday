import { Button } from "../../Button/Button"
import classes from "./CarouselItem.module.css"



export const CarouselItem = ({ pictureURL, title, numberOfCurrentGame, setNumberOfCurrentGame, number }) => {

    return (
        <div onClick={() => setNumberOfCurrentGame(number)} className={numberOfCurrentGame === number ? classes.selectedContainer : classes.container}>
            <text className={classes.title}>{title}</text>
            <img className={classes.picture} alt="" src={pictureURL} />
        </div>
    )

}