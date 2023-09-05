import classes from './InputSearch.module.css'



export const InputSearch = ({positioning}) => {

    return (
        <input className={classes.input + ' ' + positioning} 
        placeholder='Name Of The Game'
        />
    )

}