import classes from './InputSearch.module.css'



export const InputSearch = ({positioning, onChange, value}) => {

    return (
        <input className={classes.input + ' ' + positioning} value={value} onChange={onChange}
        placeholder='Name Of The Game'
        />
    )

}