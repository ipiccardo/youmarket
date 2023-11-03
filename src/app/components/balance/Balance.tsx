import Button from '../UI/Button'
import classes from './balance.module.scss'

const Balance = () => {


    return (
        <div className={classes.balanceContainer}>
            <div>
                <p>Saldo</p>
                <p><span>$</span> 0</p>
            </div>
            <div className={classes.buttonContainer}>
                <Button href={''} text={'CONTINUAR'} secondaryButton={true} />
            </div>
        </div>
    )
}

export default Balance