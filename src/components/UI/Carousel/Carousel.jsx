import React from "react"
import { useState } from "react"
import classes from "./Carousel.module.css"
import { CarouselItem } from "./CarouselItem/CarouselItem"
import { RequestService } from "../../../API/RequestService"


export const Carousel = ({ data }) => {
    const [numberOfCurrentGame, setNumberOfCurrentGame] = useState(0)
    const [currentGameData, setCurrentGameData] = useState([])


    const getGameData = async () => {
        const response = RequestService.getSpecificGame(arrayOfGamesInCarousel)

    }

    let arrayOfGamesInCarousel = data.slice(0, 5)

    const nextVideoSwitcher = () => {
        if (numberOfCurrentGame < 4) { setNumberOfCurrentGame(numberOfCurrentGame + 1) }
        else { setNumberOfCurrentGame(0) }
    }


    return (
        <div className={classes.container}>

            <img className={classes.backgroundPicture} src={arrayOfGamesInCarousel[numberOfCurrentGame].thumbnail} />

            <video className={classes.video}
                poster={"https://www.mmobomb.com/g/1125/tower-of-fantasy-1.jpg"}
                src={"https://www.mmobomb.com/g/" + arrayOfGamesInCarousel[numberOfCurrentGame].id + "/videoplayback.webm"}
                preload="none"
                muted
                autoPlay
                onEnded={nextVideoSwitcher}
            />

            <div className={classes.carouselItemsSection}>
                {
                    arrayOfGamesInCarousel.map((item, index) =>
                        <CarouselItem title={item.title} pictureURL={item.thumbnail} key={item.id}
                        number={index}
                        numberOfCurrentGame={numberOfCurrentGame}
                        setNumberOfCurrentGame={setNumberOfCurrentGame}/>
                    )
                }
            </div>
        </div>
    )

}