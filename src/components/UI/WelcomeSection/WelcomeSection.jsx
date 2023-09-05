
import { useNavigate } from "react-router-dom"
import { Button } from "../Button/Button"
import classes from "./WelcomeSection.module.css"

export const WelcomeSection = ({positioning,buttonPositioning}) => {
    const router = useNavigate();

    return (
        <div className={classes.container + ' ' + positioning}>
            <h1 className={classes.title}>Discover the best MMO games! </h1>
            <text className={classes.text}> Track what you've played and search for what to play next!</text>
                <Button positioning={buttonPositioning} title={'Browse Games'} onClick={()=>{router('/Search')}}/>
        </div>
    )
}