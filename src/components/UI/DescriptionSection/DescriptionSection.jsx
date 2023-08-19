import classes from './DescriptionSection.module.css'


export const DescriptionSection = ({ children, title, additionalTitle }) => {

    return (
        <div className={classes.container}>
            <h1>{title}</h1>
            <h3>{additionalTitle}</h3>
            {children}
        </div>
    )


}