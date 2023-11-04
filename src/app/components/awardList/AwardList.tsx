'use client'
import React, { useEffect, useState } from 'react'
import classes from './awardList.module.scss'
import { renderAccount } from '@/app/utils/generalFunctions'
import Input from '../UI/Input'


const AwardList = () => {
    const [list, setList] = useState([])
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredList, setFilteredList] = useState([]);
    const [activeButtonIndex, setActiveButtonIndex] = useState(null);


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
    };

    console.log({ activeButtonIndex })

    return (
        <>
            <Input searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <div className={classes.yourAccountsContainer}>
                <p>Tus Cuentas</p>
                {filteredList.map((e: any, index) => renderAccount(e, index, handleButtonClick, activeButtonIndex))}
                {!filteredList.length && list.map((e: any, index) => renderAccount(e, index, handleButtonClick, activeButtonIndex))}
            </div>
        </>
    )
}

export default AwardList