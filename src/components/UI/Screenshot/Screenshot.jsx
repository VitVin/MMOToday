import { useState } from "react"
import classes from './Screenshot.module.css'

export const Screenshot = ({ src, positioning }) => {

    const [isModalVisible, setIsModalVisible] = useState(false)

    return (
        <>
            <img className={classes.screenshot + ' ' + positioning} src={src} />
        </>
    )
}


