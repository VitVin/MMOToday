import { Link } from "react-router-dom"
import { Logo } from "../Logo/Logo"
import classes from "./NavBar.module.css"
import { HiBars3 } from "react-icons/hi2"
import { useState } from "react"
import { CSSTransition } from "react-transition-group"

export const NavBar = ({ positioning }) => {
  const [isOpened, setIsOpened] = useState(false);


  return (<>

    <HiBars3 className={isOpened ? classes.burgerIcon : classes.burgerIconClosed} onClick={() => setIsOpened(!isOpened)} />

    <div className={classes.container + ' ' + positioning} onClick={()=>setIsOpened(false)}>

      <Link className={classes.link} to={'/BrowserGames'}>Browser Games</Link>
      <Link className={classes.link} to={'/PCGames'} >PC Games</Link>
      <Link to={'/Home'}>
        <Logo />
      </Link>
      <Link className={classes.linkAlternative} to={'/Home'}>Home</Link>
      <Link className={classes.link} to={'/AllGames'} >All Games</Link>
      <Link className={classes.link} to={'/Search'} >Search Games</Link>
    </div>

  </>
  )

}