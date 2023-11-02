import React from 'react'
import classes from "./card.module.scss";
import Icon from './icon/icon';

const Card = () => {
    return (
        <div className={classes.cardContainer}>
            <div className={classes.amountContainer}>
                <p>Mi Saldo: <span>$10.000,00</span></p>
            </div>
            <div className={classes.campaignContainer}>
                <p>Mi acción: <span>Nombre de Acción</span></p>
                <div className={classes.iconContainer}>
                    <Icon name={'downarrow'} size={20} />
                </div>
            </div>
        </div>
    )
}

export default Card