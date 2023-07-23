import classes from './NavLink.module.css'


export const NavLink = ({title}) => {
    return (
        <text className={classes.link}>{title}</text>
)

}