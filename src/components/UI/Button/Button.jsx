import classes from './Button.module.css'


export const Button = ({title, onClick, positioning})=>{

    return(
        <button className={classes.button+ ' ' + positioning} onClick={onClick}>{title}</button>

    )
}