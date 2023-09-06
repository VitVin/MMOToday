import { useEffect, useState } from "react"
import classes from './BrowserGamesPage.module.css'
import { NavBar } from "../../components/UI/NavBar/NavBar"
import { GameCardsContainer } from "../../components/UI/PageSection/GameCardsContainer"
import { useFetching } from "../../components/hooks/useFetching"
import { RequestService } from "../../API/RequestService"
import { Loader } from "../../components/UI/Loader/Loader"


export const BrowserGamesPage = () => {

    const [gamesData, setGamesData] = useState([]);

    const [fetchGamesByPlatform, isLoadingGamesByPlatform, errorPlatformGames] = useFetching(async (platform) => {
        const response = await RequestService.getGamesByPlatform(platform)
        setGamesData(response.data)
        console.log(response.data)
    })



    useEffect(() => {
        fetchGamesByPlatform('browser')
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className={classes.container}>

            <NavBar positioning={classes.navBarPositioning} />

            {isLoadingGamesByPlatform ? <Loader /> :
                <GameCardsContainer title={'All Browser Games'} gamesData={gamesData} elementsPositioning={classes.gamesCardsPositioning} />
            }

        </div>
    )

}