import { RequestService } from "../../../API/RequestService"
import classes from "./Logo.module.css"

export const Logo = () => {


    const getgame = async () => {
        const response = await RequestService.getSpecificGame(452)
        console.log(response)
    }

    return (
        <button className={classes.logo} onClick={() => { getgame() }}>
            <text className={classes.text}>MMOToday</text>
        </button>
    )

}