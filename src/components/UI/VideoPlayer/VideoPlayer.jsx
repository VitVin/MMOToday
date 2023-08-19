import classes from './VideoPlayer.module.css'
import VideoBackgroundImage from "../../../images/VideoBackgroundImage.jpg"



export const VideoPlayer = ({ id, onEnded, positioning }) => {

    return (
        <video className={classes.video + ' ' + positioning}
            poster={VideoBackgroundImage}
            src={"https://www.freetogame.com/g/" + id + "/videoplayback.webm"}
            preload="none"
            muted
            autoPlay
            onError={onEnded}
            onEnded={onEnded}
        />
    )



}