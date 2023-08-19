import { Screenshot } from '../Screenshot/Screenshot'
import classes from './ScreenshotsList.module.css'

export const ScreenshotsList = ({ positioning, screenshotsPictures }) => {

    return (
        <div className={classes.container + ' ' + positioning}>
            {
                screenshotsPictures.map(item =>
                    <Screenshot className={classes.screenshot} src={item.image} />)
            }
        </div>
    )

}