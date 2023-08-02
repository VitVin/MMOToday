import { useEffect, useState } from "react"
import { Carousel } from "../../components/UI/Carousel/Carousel"
import { NavBar } from "../../components/UI/NavBar/NavBar"
import { WelcomeSection } from "../../components/UI/WelcomeSection/WelcomeSection"
import classes from "./HomePage.module.css"
import { RequestService } from "../../API/RequestService"
import { useFetching } from "../../components/hooks/useFetching"
import { GameCard } from "../../components/UI/GameCard/GameCard"
import { GameCardsContainer } from "../../components/UI/PageSection/GameCardsContainer"

export const HomePage = () => {
    const [data, setData] = useState([]);


    const [fetchMostPlayedGames, isLoading, error] = useFetching(async (sortBy) => {
        const response = await RequestService.getSortedGames(sortBy)
        setData(response.data.slice(0, 3))
      
    })


    useEffect(() => {
        fetchMostPlayedGames('popularity')
        console.log(data)
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
                    <GameCardsContainer title={'Most Played Today'} diarection={'row'}>
                        {data.map((item, index) => 
                            <GameCard pictureURL={item.thumbnail} title={item.title} teg={item.genre} key={item.id} />
                        )

                        }

                    </GameCardsContainer>

                    <div className={classes.cont} />
                </div>

            }
        </>
    )
}