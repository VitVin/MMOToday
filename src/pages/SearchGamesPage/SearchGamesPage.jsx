import { CSSTransition } from 'react-transition-group'
import { FilterBox } from '../../components/UI/FilterBox/FilterBox'
import { NavBar } from '../../components/UI/NavBar/NavBar'
import { GameCardsContainer } from '../../components/UI/PageSection/GameCardsContainer'
import classes from './SearchGamesPage.module.css'
import { useEffect, useState } from 'react'
const AVAILABLE_TAGSDATA = require('../../constants/listOfTags.json')


export const SearchGamesPage = () => {
    const [selectedTags, setSelectedTags] = useState('')


    return (
        <div className={classes.container}>
            <NavBar positioning={classes.navBarPositioning} />
            <div className={classes.mainSection}>
                <FilterBox tagsList={AVAILABLE_TAGSDATA} selectedTags={selectedTags} setSelectedTags={setSelectedTags} />

                <GameCardsContainer title={'awdawd'} gamesData={[]} />
            </div>


        </div>
    )

}