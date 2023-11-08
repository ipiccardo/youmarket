'use client'
import { useState } from 'react'
import Button from '../Ui/button/Button'
import classes from './balance.module.scss'

const Balance = () => {

    const [newValue, setNewValue] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        const numericValue = inputValue.replace(/[^0-9.]/g, '');

        const parsedValue = parseFloat(numericValue);
        const formattedValue = isNaN(parsedValue) ? '' : parsedValue.toLocaleString('en-US', { style: 'decimal', maximumFractionDigits: 2 });

        setNewValue(formattedValue);
    };

    const handleSend = async () => {

        const currentDate = new Date();
        const day = currentDate.getDate().toString().padStart(2, '0');
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');

        const dataToSend = {
            newData: newValue + '.00',
            newDate: `${day}/${month}`,
        };

        if (newValue === '') {
            return
        }
        await fetch('/api/data', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToSend),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Solicitud PUT fallida');
                }
            })
    }

    return (
        <div className={classes.balanceContainer}>
            <p>Saldo</p>
            <form>
                <input onChange={handleChange} value={newValue} required id='balanceInput' type='text' inputMode='numeric' maxLength={7} min={0}
                    max={9} />
                <label htmlFor='balanceInput'>0</label>
                <div className={classes.span}>$</div>
            </form>
            <div className={classes.buttonContainer} onClick={handleSend}>
                <Button href={'/pages/dashboard/awards'} text={'CONTINUAR'} secondaryButton={true} />
            </div>
        </div>
    )
}

export default Balance