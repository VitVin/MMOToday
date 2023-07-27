import { useEffect, useState } from "react"
import { Carousel } from "../../components/UI/Carousel/Carousel"
import { NavBar } from "../../components/UI/NavBar/NavBar"
import { WelcomeSection } from "../../components/UI/WelcomeSection/WelcomeSection"
import classes from "./HomePage.module.css"
import { RequestService } from "../../API/RequestService"

export const HomePage = () => {
    const [data, setData] = useState([])
    const [check, setcheck] = useState(true)

    const fetchGames = async () => {
        const response = await RequestService.getAllGames()
        setData(response.data)
        setcheck(false)
    }


  


    useEffect(() => {
        fetchGames();
    }, [])




    return (
        <>
            {check ?
                <p>Loading</p>

                :
                <div className={classes.container}>
                    <WelcomeSection />
                    <NavBar />
                    <Carousel data={data} />
                    <div className={classes.cont} />
                </div>

            }
        </>
    )
}