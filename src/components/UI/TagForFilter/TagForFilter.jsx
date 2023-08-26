


import { useState } from 'react'
import classes from './TagForFilter.module.css'



export const TagForFilter = ({ title, selectTag }) => {
    const [isChecked, setIsChecked] = useState(false)

    return (
        <label className={isChecked ? classes.tagSelected : classes.tag} >
            <input className={classes.box} type="checkbox" checked={isChecked}
                onChange={() => {setIsChecked(!isChecked); selectTag()}} />{title}
        </label>
    )

}