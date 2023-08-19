import classes from "./ColoredButton.module.css"

export const ColoredButton = ({ title, onClick, positioning }) => {

    return (
        <button className={classes.container + ' ' + positioning} onClick={onClick}>{title}</button>
    )
}