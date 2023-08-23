import classes from "./Logo.module.css"

export const Logo = ({onClick}) => {

    return (
        <button className={classes.logo} onClick={()=>onClick}>
            <text className={classes.text}>MMOToday</text>
        </button>
    )

}