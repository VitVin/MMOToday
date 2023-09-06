import { CSSTransition } from "react-transition-group"
import { MenuForFilter } from "../MenuForFilter/MenuForFilter"
import { TagForFilter } from "../TagForFilter/TagForFilter"
import classes from "./FilterBox.module.css"

export const FilterBox = ({ tagsList, selectedTags, setSelectedTags, platform, setPlatform, fetchGames, isOpened, setIsOpened }) => {





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



    return (
        <div className={classes.container}>

         

            <CSSTransition
                in={isOpened}
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