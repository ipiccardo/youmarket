'use client'
import React, { useState, useEffect } from 'react';
import classes from './movements.module.scss'
import IconHandler from '../Ui/icon/IconHandler';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { DataProps } from '@/app/types';




function Movements() {
    const [data, setData] = useState<DataProps[]>([]);
    const [isLoading, setIsLoading] = useState<Boolean>(true);

    useEffect(() => {
        fetch('/api')
            .then((response) => {
                return response.json()
            })
            .then((jsonData) => {
                setData(jsonData)
                setIsLoading(false)
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className={classes.movementsContainer}>
            <p>Últimos Movimientos</p>
            {isLoading ? (
                Array(5).fill(null)
                    .map((_, index) => (
                        <div className={classes.movement} key={index}>
                            <div>
                                <Skeleton width={40} height={40} />
                                <p>
                                    <Skeleton width={100} />
                                </p>
                            </div>
                            <div>
                                <p>
                                    <Skeleton width={80} />
                                </p>
                                <p>
                                    <Skeleton width={60} />
                                </p>
                            </div>
                        </div>
                    ))
            ) : (
                data.map((item: DataProps, index) => (
                    <div className={classes.movement} key={index}>
                        <div>
                            <IconHandler key={new Date().getTime() + index} name={item.icono} size={40} />
                            <p> {item.texto}</p>
                        </div>
                        <div>
                            <p> {item.monto}</p>
                            <p>{item.fecha}</p>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default Movements;