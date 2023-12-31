import React from 'react'
import IconHandler from '../Ui/icon/IconHandler'
import classes from './actions.module.scss'
import Movements from '../movements/Movements'
import Link from 'next/link'

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
                            <div key={new Date().getTime() + index} className={classes.divIcon}>
                                <Link className={`${propValue.name === 'recharge' && classes.rechargeIcon}`} href={`${propValue.name === 'recharge' ? '/pages/dashboard/acredit' : 'pages'}`}>
                                    <IconHandler name={propValue.name} size={45} />
                                </Link>
                                {propValue.text === 'Cargar Saldo' ? <Link className={classes.iconText} href={'/pages/dashboard/acredit'}>{propValue.text}</Link> :

                                    <p>{propValue.text}</p>
                                }
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