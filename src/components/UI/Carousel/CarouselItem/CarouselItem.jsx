import classes from "./CarouselItem.module.css"



export const CarouselItem = ({ pictureURL, title }) => {

    return (
        <div className={classes.container}>
            <text className={classes.title}>{title}</text>
            <img className={classes.picture} alt="" src={pictureURL} />
        </div>
    )

}