import { useEffect, useState } from "react"
import { Carousel } from "../../components/UI/Carousel/Carousel"
import { NavBar } from "../../components/UI/NavBar/NavBar"
import { WelcomeSection } from "../../components/UI/WelcomeSection/WelcomeSection"
import classes from "./HomePage.module.css"
import { RequestService } from "../../API/RequestService"
import { useFetching } from "../../components/hooks/useFetching"
import { GameCardsContainer } from "../../components/UI/GameCardsContainer/GameCardsContainer"
import { Button } from "../../components/UI/Button/Button"
import { VisitCard } from "../../components/UI/VisitCard/VisitCard"
import { useNavigate } from "react-router-dom"
import { Loader } from "../../components/UI/Loader/Loader"

export const HomePage = () => {
    const [gamesData, setGamesData] = useState([]);
    const [PCgames, setPCGames] = useState([])
    const [browserGames, setBrowserGames] = useState([])
    const router = useNavigate();

    const [fetchSortedGames, isLoading, error] = useFetching(async (sortBy) => {
        const response = await RequestService.getAllGames(sortBy)
        setGamesData(response.data.slice(0, 6))
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
        window.scrollTo(0, 0)
    }, [])


    return (
        <>

            <div className={classes.container}>
                <WelcomeSection positioning={classes.welcomeSection} buttonPositioning={classes.buttonPositioning} />
                <NavBar positioning={classes.navBarPositioning}/>
                <Carousel positioning={classes.carouselPositioning} />

                {isLoading ?

                    <Loader isLoading={isLoading} />


                    :
              
                        <GameCardsContainer positioning={classes.gameCardsContainerPositioning}
                            elementsPositioning={classes.elements}
                            title={'Most Played Today'}
                            gamesData={gamesData} />
                   
                }

                {isLoadingGamesByPlatform ? <Loader isLoading={isLoadingGamesByPlatform} /> :
                    <>
                        <GameCardsContainer positioning={classes.gameCardsContainerPositioning}
                            elementsPositioning={classes.elements}
                            title={'PC Games'}
                            gamesData={PCgames} />

                        <GameCardsContainer positioning={classes.gameCardsContainerPositioning}
                            elementsPositioning={classes.elements}
                            title={'Browser Games'}
                            gamesData={browserGames} />
                    </>
                }

                <Button positioning={classes.buttonPositioning} title={'Browse games using Filters'} onClick={() => router('/Search')} />

                <div className={classes.visitCardConteiner}>
                    <VisitCard positioning={classes.visitCardPositioning} />
                </div>
            </div>

        </>
    )
}