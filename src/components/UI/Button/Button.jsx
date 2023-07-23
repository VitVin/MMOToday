import classes from './Button.module.css'


export const Button = ({title})=>{

    return(
        <button className={classes.button}>{title}</button>

    )
}