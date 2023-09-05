import { FilterBox } from '../../components/UI/FilterBox/FilterBox'
import { NavBar } from '../../components/UI/NavBar/NavBar'
import { GameCardsContainer } from '../../components/UI/PageSection/GameCardsContainer'
import classes from './SearchGamesPage.module.css'
import { useState } from 'react'
import { useFetching } from '../../components/hooks/useFetching'
import { RequestService } from '../../API/RequestService'
const AVAILABLE_TAGSDATA = require('../../constants/listOfTags.json')


export const SearchGamesPage = () => {
    const [selectedTags, setSelectedTags] = useState('')
    const [platform, setPlatform] = useState('')
    const [limit, setLimit] = useState()
    const [gamesData, setGamesData] = useState([])



    console.log(platform)

    const [fetchFilteredGames, isLoadingFilteredGames, errorFilteredGames] = useFetching(async (tags) => {

        const response = await RequestService.getFilteredGames(tags, platform)
        setGamesData(response.data.slice(0, 50))
    })



    return (
        <div className={classes.container}>
            <NavBar positioning={classes.navBarPositioning} />

            <div className={classes.mainSection}>

                <FilterBox tagsList={AVAILABLE_TAGSDATA}
                    limit={limit}
                    setLimit={setLimit}
                    platform={platform}
                    setPlatform={setPlatform}
                    selectedTags={selectedTags}
                    setSelectedTags={setSelectedTags}
                    fetchGames={() => fetchFilteredGames(selectedTags)} />

                <GameCardsContainer gamesData={gamesData} elementsPositioning={classes.gameCardsPositioning} />
            </div>


        </div>
    )

}