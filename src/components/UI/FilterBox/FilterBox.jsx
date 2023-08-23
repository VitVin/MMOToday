import { TagForFilter } from "../TagForFilter/TagForFilter"
import classes from "./FilterBox.module.css"

export const FilterBox = ({ tagsList }) => {

    return (
        <div className={classes.container}>
            <table className={classes.table}>
                <tr>
                    <td>Tags</td>
                </tr>
                <tr className={classes.tags}>
                    {tagsList.map(item =>
                        <TagForFilter title={item} />)}
                </tr>
                <tr className={classes.selectors}>
                    <td>awdawd</td>
                    <td>awdawd</td>
                    <td>awdawd</td>
                    <td>awdawd</td>
                </tr>
            </table>

        </div>
    )

}