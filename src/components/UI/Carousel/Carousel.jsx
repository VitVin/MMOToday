import React, { useEffect } from "react"
import { useState } from "react"
import classes from "./Carousel.module.css"
import { CarouselItem } from "./CarouselItem/CarouselItem"
import CarouselBackgroundImage from "../../../images/CarouselBackgroundImage.jpg"
import { Button } from "../Button/Button"
import { useFetching } from "../../hooks/useFetching"
import { RequestService } from "../../../API/RequestService"

export const Carousel = () => {
    const [numberOfCurrentGame, setNumberOfCurrentGame] = useState(0);
    const [data, setData] = useState([]);




    const [fetchGamesForCarousel, isLoading, error] = useFetching(async (sortBy) => {
        const response = await RequestService.getSortedGames(sortBy)
        setData(response.data.slice(0, 5))
    })


    const nextVideoSwitcher = () => {
        if (numberOfCurrentGame < 4) { setNumberOfCurrentGame(numberOfCurrentGame + 1) }
        else { setNumberOfCurrentGame(0) }
    }


    useEffect(() => {
        fetchGamesForCarousel('release-date')
    }, [])


    return (

        <div className={classes.container}>

            {isLoading ? <></>
                :
                <>
                    <img className={classes.backgroundPicture} alt="" src={"https://www.mmobomb.com/g/1125/tower-of-fantasy-1.jpg"} />


                    <video className={classes.video}
                        poster={CarouselBackgroundImage}
                        src={"https://www.mmobomb.com/g/" + data[numberOfCurrentGame].id + "/videoplayback.webm"}
                        preload="none"
                        muted
                        
                        onEnded={nextVideoSwitcher}
                    />

                    <div className={classes.carouselItemsSection}>
                        {
                            data.map((item, index) =>
                                <CarouselItem title={item.title} pictureURL={item.thumbnail} key={item.id}
                                    number={index}
                                    numberOfCurrentGame={numberOfCurrentGame}
                                    setNumberOfCurrentGame={setNumberOfCurrentGame} />
                            )
                        }
                    </div>
                </>
            }
        </div>
    )

}