
import { Logo } from "../Logo/Logo"
import { NavLink } from "../NavLink/NavLink"
import classes from "./NavBar.module.css"

export const NavBar = () => {

  return (
    <div className={classes.container}>
      <NavLink title={'News'} />
      <NavLink title={'MMO Games'} />
      <Logo />
      <NavLink title={'Browser Games'} />
      <NavLink title={'PC Games'} />
    </div>
  )

}