import { useEffect, useState } from "react"
import classes from './BrowserGamesPage.module.css'
import { NavBar } from "../../components/UI/NavBar/NavBar"
import { GameCardsContainer } from "../../components/UI/PageSection/GameCardsContainer"
import { useFetching } from "../../components/hooks/useFetching"
import { RequestService } from "../../API/RequestService"


export const BrowserGamesPage = () => {

    const [gamesData, setGamesData] = useState([]);

    const [fetchGamesByPlatform, isLoadingGamesByPlatform, errorPlatformGames] = useFetching(async (platform) => {
        const response = await RequestService.getGamesByPlatform(platform)
        setGamesData(response.data)
        console.log(response.data)
    })



    useEffect(() => {
        fetchGamesByPlatform('browser')
    },[])

    return (
        <div className={classes.container}>

            <NavBar positioning={classes.navBarPositioning} />

            <GameCardsContainer title={'All Browser Games'} gamesData={gamesData} elementsPositioning={classes.gamesCardsPositioning}/>


        </div>
    )

}