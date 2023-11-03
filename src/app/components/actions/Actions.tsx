import React from 'react'
import Icon from '../UI/icon/icon'
import classes from './actions.module.scss'
import Movements from '../movements/Movements'

const Actions = () => {

    const propValues = [
        { name: "recharge", text: 'Cargar Saldo' },
        { name: "gift", text: 'Enviar Premio' },
        { name: "movements", text: 'Movimientos' },
        { name: "settings", text: 'Ajustes' }
    ]


    return (
        <>
            <div className={classes.actionsContainer}>
                <p>Acciones</p>
                <div className={classes.iconContaier}>
                    {propValues.map((propValue, index) => {
                        return (
                            <div className={classes.divIcon}>
                                <Icon key={index} name={propValue.name} size={45} />
                                <p>{propValue.text}</p>
                            </div>
                        )
                    }
                    )
                    }
                </div>
            </div>
            <Movements />
        </>
    )
}

export default Actions