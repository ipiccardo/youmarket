'use client'
import React, { useEffect, useState } from 'react'
import classes from './awardList.module.scss'
import { extractFirstLetter } from '@/app/utils/generalFunctions'

const AwardList = () => {


    const [list, setList] = useState([])

    useEffect(() => {
        fetch('/api/newaccounts').then((resp) => resp.json()).then((data) => setList(data))
    }, [])


    return (
        <div className={classes.yourAccountsContainer}>
            <p>Tus Cuentas</p>
            {list && list.map((e: any, index) => {
                return (
                    <div key={index} className={classes.account}>
                        <div>
                            <div>{extractFirstLetter(e)}</div>
                            <div className={classes.dataContainer}>
                                <p>{e.name}</p>
                                <p className={index === 0 || index === 3 ? '' : classes.widthDecoration}>{e.mail}</p>
                            </div>
                        </div>
                        <button className={classes.checked}></button>
                    </div>
                )
            })}
        </div>
    )
}

export default AwardList