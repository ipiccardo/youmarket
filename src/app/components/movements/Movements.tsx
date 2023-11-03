'use client'
import React, { useState, useEffect } from 'react';
import classes from './movements.module.scss'
import Icon from '../UI/icon/icon';


interface Item {
    icono: string;
    texto: string;
    monto: string;
    fecha: string;
}

function Movements() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/api')
            .then((response) => {
                return response.json()
            })
            .then((jsonData) => {
                console.log(jsonData, 'jsonData')
                setData(jsonData)
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className={classes.movementsContainer}>
            <p>Últimos Movimientos</p>
            {data.map((item: Item, index) => (
                <div className={classes.movement} key={index}>
                    <div>
                        <Icon key={index} name={item.icono} size={40} />
                        <p> {item.texto}</p>
                    </div>
                    <div>
                        <p> {item.monto}</p>
                        <p>{item.fecha}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Movements;