import classes from "./Logo.module.css"

export const Logo = () => {

    return (
        <button className={classes.logo} >
            <p className={classes.text}>MMOToday</p>
        </button>
    )

}