import { useState } from "react"

export const Screenshot = ({ src, className }) => {

    const [isModalVisible, setIsModalVisible] = useState(false)

    return (
        <>
            <img className={className} src={src} />
        </>
    )
}


