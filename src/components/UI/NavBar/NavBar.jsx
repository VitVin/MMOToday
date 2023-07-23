
import { NavLink } from "../NavLink/NavLink"
import classes from "./NavBar.module.css"

export const NavBar = () => {

  return (
    <div className={classes.container}>
      <NavLink title={'News'}/>
      <NavLink title={'MMO games '}/>
      <NavLink title={'Popular games'}/>
      <NavLink title={'PC Games'}/>
    </div>
  )

}