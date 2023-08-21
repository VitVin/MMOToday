import { Screenshot } from '../Screenshot/Screenshot'
import classes from './ScreenshotsList.module.css'

export const ScreenshotsList = ({ positioning, screenshotsPictures, elementsPositioning }) => {

    return (
        <div className={classes.container + ' ' + positioning}>
            {
                screenshotsPictures.map(item =>
                    <Screenshot positioning={elementsPositioning} className={classes.screenshot} src={item.image} key={item.id} />)
            }
        </div>
    )

}