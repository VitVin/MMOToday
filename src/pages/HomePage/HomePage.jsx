import { useEffect, useState } from "react"
import { Carousel } from "../../components/UI/Carousel/Carousel"
import { NavBar } from "../../components/UI/NavBar/NavBar"
import { WelcomeSection } from "../../components/UI/WelcomeSection/WelcomeSection"
import classes from "./HomePage.module.css"
import { RequestService } from "../../API/RequestService"
import { useFetching } from "../../components/hooks/useFetching"
import { GameCard } from "../../components/UI/GameCard/GameCard"
import { GameCardsContainer } from "../../components/UI/PageSection/GameCardsContainer"
import { Footer } from "../../components/UI/Footer/Footer"
import { Button } from "../../components/UI/Button/Button"
import { VisitCard } from "../../components/UI/VisitCard/VisitCard"

export const HomePage = () => {
    const [gamesData, setGamesData] = useState([]);
    const [PCgames, setPCGames] = useState([])
    const [browserGames, setBrowserGames] = useState([])


    const [fetchSortedGames, isLoading, error] = useFetching(async (sortBy) => {
        const response = await RequestService.getAllGames(sortBy)
        setGamesData(response.data.slice(0, 3))
    })

    const [fetchGamesByPlatform, isLoadingGamesByPlatform, errorPlatformGames] = useFetching(async (platform) => {
        const response = await RequestService.getGamesByPlatform(platform)
        platform === 'pc' ? setPCGames(response.data.slice(0, 6))
            : setBrowserGames(response.data.slice(0, 6))
    })



    useEffect(() => {
        fetchSortedGames('popularity')
        fetchGamesByPlatform('pc')
        fetchGamesByPlatform('browser')
    }, [])


    return (
        <>
            {isLoading ?
                <p>Loading</p>
                :
                <div className={classes.container}>
                    <WelcomeSection />
                    <NavBar />
                    <Carousel />
                    <GameCardsContainer title={'Most Played Today'} diarection={'row'} gamesData={gamesData} />
                    <GameCardsContainer title={'PC Games'} diarection={'row'} gamesData={PCgames} />
                    <GameCardsContainer title={'Browser Games'} diarection={'row'} gamesData={browserGames} />
                    <Button title={'Browse games using Filters'} />
                    
                    <div className={classes.visitCardConteiner}>
                        <VisitCard />
                    </div>

                    <Footer />
                </div>
            }
        </>
    )
}