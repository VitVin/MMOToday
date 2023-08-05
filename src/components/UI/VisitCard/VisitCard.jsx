import classes from './VisitCard.module.css'
import visitCardLogo from '../../../images/VisitCardLogo.png'

export const VisitCard = () => {

    return (
        <div className={classes.container}>
            <img className={classes.logo} src={visitCardLogo}/>
        </div>
    )

}