import { NavBar } from "../../components/UI/NavBar/NavBar"
import { WelcomeSection } from "../../components/UI/WelcomeSection/WelcomeSection"
import classes from "./HomePage.module.css"

export const HomePage = () => {

    return (
        <div className={classes.container}>
            <NavBar />
            <WelcomeSection />
        </div>

    )
}