import classes from './NavLink.module.css'


export const NavLink = ({title, onClick}) => {
    return (
        <p className={classes.link} onClick={onClick}>{title}</p>
)

}