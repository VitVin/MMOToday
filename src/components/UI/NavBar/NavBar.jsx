import { Link } from "react-router-dom"
import { Logo } from "../Logo/Logo"
import classes from "./NavBar.module.css"

export const NavBar = ({positioning}) => {

  return (
    <div className={classes.container + ' ' + positioning}>
      <Link className={classes.link} to={'/BrowserGames'}>Browser Games</Link>
      <Link className={classes.link} to={'/PCGames'} >PC Games</Link>
      <Link to={'/Home'}>
        <Logo />
      </Link>
      <Link className={classes.link} to={'/AllGames'} >All Games</Link>
      <Link className={classes.link} to={'/Search'} >Search Games</Link>
    </div>
  )

}