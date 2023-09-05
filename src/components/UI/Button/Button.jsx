import classes from './Button.module.css'


export const Button = ({title, onClick})=>{

    return(
        <button className={classes.button} onClick={onClick}>{title}</button>

    )
}