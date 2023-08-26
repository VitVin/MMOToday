import { Button } from "../Button/Button"
import { ColoredButton } from "../ColoredButton/ColoredButton"
import { MenuForFilter } from "../MenuForFilter/MenuForFilter"
import { TagForFilter } from "../TagForFilter/TagForFilter"
import classes from "./FilterBox.module.css"

export const FilterBox = ({ tagsList, selectedTags, setSelectedTags }) => {

    const checkSelectedTag = (tag) => {
        selectedTags.includes(tag) ?
            setSelectedTags(selectedTags.replace(tag + '.', ''))
            :
            setSelectedTags(selectedTags + tag + '.')
    };

    const Tagsfiller = (tags) => {
        return tags.map(item =>
            <TagForFilter key={item} title={item} selectTag={() => checkSelectedTag(item)} />
        )
    }


    return (
        <div className={classes.container}>

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

            <ColoredButton onClick={() => console.log(selectedTags)} />

        </div>
    )

}