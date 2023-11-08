'use client'
import React, { useEffect, useState } from 'react'
import styles from './awardList.module.scss'
import { renderAccount } from '@/app/utils/generalFunctions'
import Input from '../Ui/input/Input'
import Button from '../Ui/button/Button'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { acountPropTypes } from '@/app/types'


const AwardList = () => {
    const [list, setList] = useState<acountPropTypes[]>([])
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filteredList, setFilteredList] = useState<acountPropTypes[]>([]);
    const [activeButtonIndex, setActiveButtonIndex] = useState<number | undefined>(0);
    const [isChecked, setIsChecked] = useState(false)
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        fetch('/api/newaccounts').then((resp) => resp.json()).then((data) => {
            setList(data)
            setIsLoading(false)
        })
    }, [])

    useEffect(() => {
        const filtered = list.filter((item: acountPropTypes) => {
            const fullName = item.name.toLowerCase() + item.mail.toLowerCase();
            return fullName.startsWith(searchTerm.toLowerCase());
        });
        setFilteredList(filtered);
    }, [searchTerm, list]);


    const handleButtonClick = (index: number) => {
        setActiveButtonIndex(index);
        setIsChecked(!isChecked)
    };

    useEffect(() => {
        filteredList.map((element: acountPropTypes, index: number) => {
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
            <div className={styles.yourAccountsContainer}>
                <p>Tus Cuentas</p>
                {isLoading ? (
                    Array(5).fill(null)
                        .map((_, index) => (
                            <div className={styles.list} key={index}>
                                <div>
                                    <Skeleton width={40} height={40} />
                                    <p>
                                        <Skeleton width={100} />
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        <Skeleton width={60} />
                                    </p>
                                </div>
                            </div>
                        ))
                ) :
                    filteredList.map((e: acountPropTypes, index: number) => renderAccount(e, index, handleButtonClick, activeButtonIndex, filteredList))
                }

            </div>
            <div className={styles.buttonContainer}>
                <Button text={'CONTINUAR'} secondaryButton={true} href='/' />
            </div>

        </>
    )
}

export default AwardList