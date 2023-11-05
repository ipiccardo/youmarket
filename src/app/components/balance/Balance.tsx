'use client'
import { useState } from 'react'
import Button from '../UI/Button'
import classes from './balance.module.scss'

const Balance = () => {

    const [newValue, setNewValue] = useState('')

    const handleChange = (e: any) => {
        const inputValue = e.target.value;
        const numericValue = inputValue.replace(/[^0-9]/g, '')

        setNewValue(numericValue);
    };

    return (
        <div className={classes.balanceContainer}>
            <p>Saldo</p>

            <form>
                <input onChange={handleChange} value={newValue} required id='balanceInput' type='text' inputMode='numeric' maxLength={7} min={0}
                    max={9} />
                <label htmlFor='balanceInput'>0</label>
                <div className={classes.span}>$</div>
            </form>
            <div className={classes.buttonContainer}>
                <Button href={''} text={'CONTINUAR'} secondaryButton={true} />
            </div>
        </div>
    )
}

export default Balance