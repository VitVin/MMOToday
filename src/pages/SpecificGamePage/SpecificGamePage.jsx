import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useFetching } from "../../components/hooks/useFetching"
import { RequestService } from "../../API/RequestService"
import classes from "./SpecificGamePage.module.css"
import { VideoPlayer } from "../../components/UI/VideoPlayer/VideoPlayer"
import { DescriptionSection } from "../../components/UI/DescriptionSection/DescriptionSection"
import { ColoredButton } from "../../components/UI/ColoredButton/ColoredButton"
import { ScreenshotsList } from "../../components/UI/ScreenshotsList/ScreenshotsList"


export const SpecificGamePage = () => {
    const params = useParams()
    const [gameData, setGameData] = useState([])



    const [fetchGameData, isLoading, error] = useFetching(async (id) => {
        const response = await RequestService.getSpecificGame(id)
        setGameData(response.data)
    })


    useEffect(() => {
        fetchGameData(params.id)
    }, [])


    return (
        <>
            {isLoading ? <></> :

                <div className={classes.container}>

                    <div className={classes.sideSection}>
                        <img className={classes.poster} src={gameData.thumbnail} />
                        <ColoredButton positioning={classes.coloredButtonPositioning} title={'Play now'} />
                        <div>
                            <h2>Screenshots</h2>
                            <ScreenshotsList screenshotsPictures={gameData.screenshots}  positioning={classes.screenshotsListPositioning}/>
                        </div>
                    </div>


                    <div className={classes.mainSection}>
                        <h1>{gameData.title}</h1>

                        <div className={classes.videoPlayerSection}>
                            <VideoPlayer positioning={classes.videoPlayerPositioning} id={gameData.id} />
                            <div>
                                <p>Status: {gameData.status}</p>
                                <p>Genre: {gameData.genre}</p>
                                <p>Platform: {gameData.platform}</p>
                                <p>Release date: {gameData.release_date}</p>
                                <p>Developer: {gameData.developer}</p>
                                <p>Publisher: {gameData.publisher}</p>
                            </div>

                        </div>

                        <DescriptionSection title={'About Game'} >
                            <p>{gameData.description}</p>
                        </DescriptionSection>

                        {gameData.minimum_system_requirements !== undefined ?
                            <DescriptionSection title={'Minimum System Requirements'}>
                                <div className={classes.minSysReqContainer}>
                                    <div>
                                        <p>OS: <br /> <span>{gameData.minimum_system_requirements.os}</span></p>
                                        <p>Memory: <br /><span>{gameData.minimum_system_requirements.memory}</span></p>
                                        <p>Storage: <br /><span>{gameData.minimum_system_requirements.storage}</span></p>
                                    </div>
                                    <div>
                                        <p>Processor: <br /><span>{gameData.minimum_system_requirements.processor}</span></p>
                                        <p>Graphics: <br /><span>{gameData.minimum_system_requirements.graphics}</span></p>
                                    </div>
                                </div>
                            </DescriptionSection>
                            : <></>
                        }

                    </div>
                </div>

            }

        </>
    )

}