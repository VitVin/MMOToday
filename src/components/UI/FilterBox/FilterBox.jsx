import { CSSTransition } from "react-transition-group"
import { InputSearch } from "../InputSearch/InputSearch"
import { MenuForFilter } from "../MenuForFilter/MenuForFilter"
import { TagForFilter } from "../TagForFilter/TagForFilter"
import classes from "./FilterBox.module.css"
import { useState } from "react"
import { ColoredButton } from "../ColoredButton/ColoredButton"
import { HiAdjustmentsHorizontal, HiMiniMagnifyingGlass, HiOutlineArrowPath } from 'react-icons/hi2';
import { useEffect } from "react"

export const FilterBox = ({ tagsList, selectedTags, setSelectedTags, platform, setPlatform, fetchGames }) => {

    const [isFiltersOpened, setIsFiltersOpened] = useState(false)
    
    

    const platformSetter = (tag) => {
        platform.includes(tag) ?
            setPlatform(platform.replace(tag, ''))
            :
            setPlatform(platform + tag)
    };


    const removeOrAddSelectedTag = (tag) => {
        selectedTags.includes(tag) ?
            setSelectedTags(selectedTags.replace(tag + '.', ''))
            :
            setSelectedTags(selectedTags + tag + '.')
    };

    const checkIsTagSelected = (tag) => {
        return selectedTags.includes(tag) ? true : false || platform.includes(tag) ? true : false
    }

    const Tagsfiller = (tags, selectFunction = removeOrAddSelectedTag) => {
        return tags.map(item =>
            <TagForFilter key={item} checked={checkIsTagSelected(item)} title={item} selectTag={() => selectFunction(item)} />
        )
    }

    useEffect(() => {
        setIsFiltersOpened(true)
    }, [])

    return (
        <div className={classes.container}>

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
                <HiMiniMagnifyingGlass className={classes.icon} onClick={() => { fetchGames(); setIsFiltersOpened(false) }} />

            </div>

            <CSSTransition
                in={isFiltersOpened}
                timeout={2000}
                mountOnEnter
                unmountOnExit
                classNames={{
                    enter: classes.contentEnter,
                    enterActive: classes.contentEnterActive,
                    exit: classes.contentExit,
                    exitActive: classes.contentExitActive,
                }}
            >
                <div className={classes.menuSection}>

                    <MenuForFilter title={'Platform'}>
                        {Tagsfiller(tagsList.PLATFORM, platformSetter)}
                    </MenuForFilter>

                    <MenuForFilter title={'Graphics'}>
                        {Tagsfiller(tagsList.GRAPHICS)}
                    </MenuForFilter>

                    <MenuForFilter title={'Combat'}>
                        {Tagsfiller(tagsList.COMBAT)}
                    </MenuForFilter>

                    <MenuForFilter title={'Gameplay'}>
                        {Tagsfiller(tagsList.GAMEPLAY)}
                    </MenuForFilter>

                    <MenuForFilter title={'Style'}>
                        {Tagsfiller(tagsList.STYLE)}
                    </MenuForFilter>

                    <MenuForFilter title={'Genre'}>
                        {Tagsfiller(tagsList.GENRE)}
                    </MenuForFilter>

                    <MenuForFilter title={'Tags'}>
                        {Tagsfiller(tagsList.TAGS)}
                    </MenuForFilter>

                </div>
            </CSSTransition>



        </div>
    )

}