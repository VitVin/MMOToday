import { FilterBox } from '../../components/UI/FilterBox/FilterBox'
import { NavBar } from '../../components/UI/NavBar/NavBar'
import { GameCardsContainer } from '../../components/UI/PageSection/GameCardsContainer'
import classes from './SearchGamesPage.module.css'
import { useEffect, useState } from 'react'
import { useFetching } from '../../components/hooks/useFetching'
import { RequestService } from '../../API/RequestService'
import { Toaster, toast } from 'react-hot-toast'
import { InputSearch } from '../../components/UI/InputSearch/InputSearch'
import { HiAdjustmentsHorizontal, HiMiniMagnifyingGlass, HiOutlineArrowPath } from 'react-icons/hi2';
const AVAILABLE_TAGSDATA = require('../../constants/listOfTags.json')

export const SearchGamesPage = () => {
    const [selectedTags, setSelectedTags] = useState('')
    const [platform, setPlatform] = useState('')
    const [limit, setLimit] = useState()
    const [gamesData, setGamesData] = useState([])
    const [isFiltersOpened, setIsFiltersOpened] = useState(false)

    const [fetchFilteredGames, isLoadingFilteredGames, errorFilteredGames] = useFetching(async () => {
        let params = { tag: selectedTags, platform: platform }

        if ((platform === '' || platform === 'pcbrowser' || platform === 'browserpc') && selectedTags !== '') {
            params = { tag: selectedTags }
            const response = await RequestService.getFilteredGames(params)
            if (response.status === 201) {
                toast.error('No matches found, try other tags!', { duration: 5000, position: 'bottom-center' });
            } else {
                setIsFiltersOpened(false)
                setGamesData(response.data)
            }
            return
        }

        if ((platform === 'pc' || platform === 'browser') && selectedTags === '') {
            const response = await RequestService.getGamesByPlatform(platform)
            setGamesData(response.data)
            setIsFiltersOpened(false)
            return
        }

        if ((platform === 'pc' || platform === 'browser') && selectedTags !== '') {
            const response = await RequestService.getFilteredGames(params)
            if (response.status === 201) {
                toast.error('No matches found, try other tags!', { duration: 5000, position: 'bottom-center' });
            } else {
                setIsFiltersOpened(false)
                setGamesData(response.data)
            }
            return
        }

        if ((platform === '' || platform === 'pcbrowser' || platform === 'browserpc') && selectedTags === '') {
            const response = await RequestService.getAllGames()
            setIsFiltersOpened(false)
            setGamesData(response.data)

            return
        }
    })



    useEffect(() => { window.scrollTo(0, 0); setIsFiltersOpened(true) }, [])

    return (
        <div className={classes.container}>
            <Toaster toastOptions={{ className: classes.toast }} />
            <NavBar positioning={classes.navBarPositioning} />


            <div className={classes.mainSection}>

                <div className={classes.inputSection}>
                    <HiOutlineArrowPath className={classes.icon} onClick={() => {
                        setPlatform('')
                        setSelectedTags('')
                        if (isFiltersOpened) {
                            setIsFiltersOpened(false)
                            setTimeout(() => {
                                setIsFiltersOpened(true)
                            }, 2100);
                        }

                    }} />
                    <HiAdjustmentsHorizontal className={classes.icon} onClick={() => setIsFiltersOpened(!isFiltersOpened)} />
                    <InputSearch positioning={classes.input} />
                    <HiMiniMagnifyingGlass className={classes.icon} onClick={() => { fetchFilteredGames(); }} />
                </div>

                <FilterBox tagsList={AVAILABLE_TAGSDATA}
                    isOpened={isFiltersOpened}
                    setIsOpened={setIsFiltersOpened}
                    limit={limit}
                    setLimit={setLimit}
                    platform={platform}
                    setPlatform={setPlatform}
                    selectedTags={selectedTags}
                    setSelectedTags={setSelectedTags}
                    fetchGames={() => fetchFilteredGames()} />

                <GameCardsContainer gamesData={gamesData} elementsPositioning={classes.gameCardsPositioning} />
            </div>
        </div>
    )

}