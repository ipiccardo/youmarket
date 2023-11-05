'use client'
import React, { useEffect, useState } from 'react'
import classes from './awardList.module.scss'
import { renderAccount } from '@/app/utils/generalFunctions'
import Input from '../UI/Input'
import Button from '../UI/Button'
import Link from 'next/link'


const AwardList = () => {
    const [list, setList] = useState([])
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredList, setFilteredList] = useState([]);
    const [activeButtonIndex, setActiveButtonIndex] = useState<number | undefined>(0);
    const [isChecked, setIsChecked] = useState(false)


    useEffect(() => {
        fetch('/api/newaccounts').then((resp) => resp.json()).then((data) => setList(data))
    }, [])

    useEffect(() => {
        const filtered = list.filter((item: any) => {
            const fullName = item.name.toLowerCase() + item.mail.toLowerCase();
            return fullName.startsWith(searchTerm.toLowerCase());
        });
        setFilteredList(filtered);
    }, [searchTerm, list]);


    const handleButtonClick = (index: any) => {
        setActiveButtonIndex(index);
        setIsChecked(!isChecked)
    };

    useEffect(() => {
        filteredList.map((element: any, index: number) => {
            if (activeButtonIndex === index && element.checked === false) {
                return element.checked = true
            } else {
                return element.checked = false
            }
        })

    }, [activeButtonIndex, isChecked])

    return (
        <>
            <Input searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <div className={classes.yourAccountsContainer}>
                <p>Tus Cuentas</p>
                {filteredList.map((e: any, index) => renderAccount(e, index, handleButtonClick, activeButtonIndex, filteredList))}
                {!filteredList.length && list.map((e: any, index) => renderAccount(e, index, handleButtonClick, activeButtonIndex, filteredList))}
            </div>
            <div className={classes.buttonContainer}>
                <Button text={'CONTINUAR'} secondaryButton={true} href='/' />
            </div>

        </>
    )
}

export default AwardList