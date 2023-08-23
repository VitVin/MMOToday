import { Link } from "react-router-dom"
import { Logo } from "../Logo/Logo"
import { NavLink } from "../NavLink/NavLink"
import classes from "./NavBar.module.css"

export const NavBar = ({positioning}) => {

  return (
    <div className={classes.container + ' ' + positioning}>
      <Link className={classes.link} to={'Browser Games'}>Browser Games</Link>
      <Link className={classes.link} to={'PC Games'} >PC Games</Link>
      <Link to={'/Home'}>
        <Logo />
      </Link>
      <Link className={classes.link} to={'All MMO Games'} >All Games</Link>
      <Link className={classes.link} to={'/Search'} >Search</Link>
    </div>
  )

}