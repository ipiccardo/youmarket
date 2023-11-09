'use client'
import React, { useEffect, useRef, useState } from 'react'
import classes from "./card.module.scss";
import IconHandler from '../icon/IconHandler'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { DataProps } from '@/types';



const Card = () => {

    const [data, setData] = useState<DataProps[]>()
    const [totalBalance, setTotalBalance] = useState<number>(0)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [selectedAction, setSelectedAction] = useState('Nombre de Acción')
    const cardRef = useRef<HTMLDivElement | null>(null);

    let totalAmount = 0

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleActionSelect = (action: string) => {
        setSelectedAction(action);
        setIsDropdownOpen(false);
    };


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



    useEffect(() => {
        function handleDocumentClick(e: any) {
            if (cardRef.current && !cardRef.current.contains(e.target)) {
                setIsDropdownOpen(false);
            }
        }

        document.addEventListener('click', handleDocumentClick);

        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);

    return (
        <div className={classes.cardContainer} ref={cardRef}>
            <div className={classes.amountContainer}>
                <p>Mi Saldo:  {data ? (<span>${`${totalBalance.toLocaleString('en-US', { style: 'decimal', maximumFractionDigits: 2 })}.00`}</span>) :
                    <Skeleton />}
                </p>
            </div>
            <div className={classes.campaignContainer}>
                <p>Mi acción: <span className={classes.dropdownToggle}>{selectedAction}</span></p>
                <div className={`${classes.iconContainer} ${isDropdownOpen ? classes.rotated : classes.downarrow}`} onClick={toggleDropdown}>
                    <IconHandler name={'downarrow'} size={20} />
                </div>
                {isDropdownOpen && (
                    <ul className={classes.dropdownMenu}>
                        <li onClick={() => handleActionSelect('Envío de Premio')}>Envío de Premio</li>
                        <li onClick={() => handleActionSelect('Carga de Saldo')}>Carga de Saldo</li>
                    </ul>
                )}
            </div>
        </div>
    )
}

export default Card


