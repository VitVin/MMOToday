import { useState } from 'react'
import classes from './MenuForFilter.module.css'
import { CSSTransition } from 'react-transition-group'
import { useEffect } from 'react'



export const MenuForFilter = ({ title, children, positioning, elementsPositioning }) => {
    const [isOpened, setIsOpened] = useState(false)



    useEffect(() => {

        setTimeout(
            () => {
            setIsOpened(true)
            },
            2 * 1000
          );
    }, [])

    return (
        <div className={classes.container + ' ' + positioning} >
            <div className={classes.topSection} onClick={() => setIsOpened(!isOpened)}>
                <h1 >{title}</h1>
            </div>

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
                <div className={classes.content + ' ' + elementsPositioning} onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </CSSTransition>
        </div>

    )


}