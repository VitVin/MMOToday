import React, { useEffect } from "react"
import { useState } from "react"
import classes from "./Carousel.module.css"
import { CarouselItem } from "./CarouselItem/CarouselItem"

import CarouselBackgroundImage from "../../../images/CarouselBackgroundImage.jpg"
import { useFetching } from "../../hooks/useFetching"
import { RequestService } from "../../../API/RequestService"
import { VideoPlayer } from "../VideoPlayer/VideoPlayer"
import { Loader } from "../Loader/Loader"

export const Carousel = ({ positioning }) => {
    const [numberOfCurrentGame, setNumberOfCurrentGame] = useState(0);
    const [data, setData] = useState([]);




    const [fetchSortedGamesForCarousel, isLoading, error] = useFetching(async (sortBy) => {
        const response = await RequestService.getAllGames(sortBy)
        setData(response.data.slice(0, 5))
    })


    const nextVideoSwitcher = () => {
        if (numberOfCurrentGame < 4) { setNumberOfCurrentGame(numberOfCurrentGame + 1) }
        else { setNumberOfCurrentGame(0) }
    }


    useEffect(() => {
        fetchSortedGamesForCarousel('release-date');
    }, [])


    return (
        <>
            {isLoading ? <Loader /> :
                <div className={classes.container + ' ' + positioning}>

                    <img className={classes.backgroundPicture} alt="" src={CarouselBackgroundImage} />

                    <VideoPlayer positioning={classes.videoPlayerPositioning} id={data[numberOfCurrentGame].id} onEnded={nextVideoSwitcher} />

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


                </div>
            }</>
    )

}