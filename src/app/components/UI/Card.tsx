import React from 'react'
import classes from "./card.module.scss";

const Card = () => {
    return (
        <div className={classes.cardContainer}>
            <div className={classes.amountContainer}>
                <p>Mi Saldo: <span>$10.000,00</span></p>
            </div>
            <div className={classes.campaignContainer}>
                <p>Mi acción: <span>Nombre de Acción</span></p>
            </div>
        </div>
    )
}

export default Card