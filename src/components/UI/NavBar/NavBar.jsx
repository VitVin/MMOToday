
import { Logo } from "../Logo/Logo"
import { NavLink } from "../NavLink/NavLink"
import classes from "./NavBar.module.css"

export const NavBar = () => {

  return (
    <div className={classes.container}>
      <NavLink title={'Browser Games'} />
      <NavLink title={'PC Games'} />
      <Logo />
      <NavLink title={'All MMO Games'} />
      <NavLink title={'Search Games'} />
    </div>
  )

}