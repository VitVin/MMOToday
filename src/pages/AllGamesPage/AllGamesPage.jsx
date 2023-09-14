import { useEffect, useState } from 'react';
import { NavBar } from '../../components/UI/NavBar/NavBar';
import { GameCardsContainer } from '../../components/UI/GameCardsContainer/GameCardsContainer';
import { useFetching } from '../../components/hooks/useFetching';
import classes from './AllGamesPage.module.css'
import { RequestService } from '../../API/RequestService';
import { Loader } from '../../components/UI/Loader/Loader';


export const AllGamesPage = () => {

    const [gamesData, setGamesData] = useState([]);

    const [fetcAllhGames, isLoadingAllGames, errorAllGames] = useFetching(async (sortBy) => {
        const response = await RequestService.getAllGames(sortBy)
        setGamesData(response.data)
        console.log(response.data)
    })



    useEffect(() => {
        fetcAllhGames('popularity')
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className={classes.container}>

            <NavBar positioning={classes.navBarPositioning} />
            {isLoadingAllGames ? <Loader /> :
                <GameCardsContainer title={'All Games'} gamesData={gamesData} elementsPositioning={classes.gamesCardsPositioning} />
            }

        </div>
    )


}