import { useState } from 'react'
import classes from './MenuForFilter.module.css'
import { CSSTransition } from 'react-transition-group'



export const MenuForFilter = ({ title, children }) => {
    const [isOpened, setIsOpened] = useState(false)


    return (
        <div className={classes.container} onClick={() => setIsOpened(!isOpened)}>
            <div className={classes.topSection}>
                <h1 >{title}</h1>
            </div>

            <CSSTransition
                in={isOpened}
                timeout={1000}
                mountOnEnter
                unmountOnExit
                classNames={{
                    enter: classes.contentEnter,
                    enterActive: classes.contentEnterActive,
                    exit: classes.contentExit,
                    exitActive: classes.contentExitActive,
                }}
            >
                <div className={classes.content} onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </CSSTransition>
        </div>

    )


}