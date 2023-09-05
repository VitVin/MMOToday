import classes from './VisitCard.module.css'
import visitCardLogo from '../../../images/VisitCardLogo.png'

export const VisitCard = ({positioning}) => {

    return (
        <div className={classes.container + ' ' + positioning}>
            <img className={classes.logo} src={visitCardLogo} />
            <p>MMO Today is a space for finding fresh PC and browser games where you will find popular
                MMO-Games of various genres, as well as newcomers in the industry.</p>
        </div>
    )

}