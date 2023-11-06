'use client'
import React, { useEffect, useState } from 'react'
import classes from "./card.module.scss";
import Icon from './icon/icon';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


interface DataProps {
    icono: string,
    texto: string,
    monto: string,
    fecha: string
}



const Card = () => {

    const [data, setData] = useState<DataProps[]>()
    const [totalBalance, setTotalBalance] = useState(0)
    let totalAmount = 0

    useEffect(() => {
        fetch('/api')
            .then((response) => {
                return response.json()
            })
            .then((jsonData: DataProps[]) => {
                setData(jsonData)
            })
            .catch((error) => console.error(error));
    }, []);


    useEffect(() => {
        if (Array.isArray(data)) {
            totalAmount = data.reduce((acumulador, transaccion) => {
                const montoNumerico = parseFloat(transaccion.monto.replace(/[^0-9.-]/g, ''));
                return acumulador + montoNumerico
            }, 0);

            setTotalBalance(totalAmount)
        }
    }, [data])


    return (
        <div className={classes.cardContainer}>
            <div className={classes.amountContainer}>
                <p>Mi Saldo:  {data ? (<span>${`${totalBalance.toLocaleString('en-US', { style: 'decimal', maximumFractionDigits: 2 })}.00`}</span>) :
                    <Skeleton />}
                </p>
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