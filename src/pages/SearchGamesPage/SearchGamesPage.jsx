import { FilterBox } from '../../components/UI/FilterBox/FilterBox'
import { NavBar } from '../../components/UI/NavBar/NavBar'
import { GameCardsContainer } from '../../components/UI/PageSection/GameCardsContainer'
import classes from './SearchGamesPage.module.css'
const AVAILABLE_TAGSDATA = require('../../constants/listOfTags.json')


export const SearchGamesPage = () => {

    return (
        <div className={classes.container}>
            <NavBar positioning={classes.navBarPositioning} />
            <div className={classes.mainSection}>

                <FilterBox tagsList={AVAILABLE_TAGSDATA.AVAILABLE_TAGS} />
                <GameCardsContainer title={'awdawd'} gamesData={[]}/>
            </div>


        </div>
    )

}