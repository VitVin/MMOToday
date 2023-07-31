import { useEffect, useState } from "react"
import { Carousel } from "../../components/UI/Carousel/Carousel"
import { NavBar } from "../../components/UI/NavBar/NavBar"
import { WelcomeSection } from "../../components/UI/WelcomeSection/WelcomeSection"
import classes from "./HomePage.module.css"
import { RequestService } from "../../API/RequestService"
import { useFetching } from "../../components/hooks/useFetching"

export const HomePage = () => {
    const [GamesDataForCarousel, setGamesDataForCarousel] = useState([])

    const [fetchGamesForCarousel, isLoading, error] = useFetching(async (sortBy) => {
        const response = await RequestService.getSortedGames(sortBy)
        setGamesDataForCarousel(response.data)
    })



    useEffect(() => {
        fetchGamesForCarousel('release-date')
    }, [])




    return (
        <>
            {isLoading ?
                <p>Loading</p>
                :
                <div className={classes.container}>
                    <WelcomeSection />
                    <NavBar />
                    <Carousel data={GamesDataForCarousel} />
                    <div className={classes.cont} />
                </div>

            }
        </>
    )
}