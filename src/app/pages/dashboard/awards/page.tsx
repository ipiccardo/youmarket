import AwardList from '@/app/_components/awardList/AwardList'
import NewAcounts from '@/app/_components/newAcounts/NewAcounts'
import React from 'react'
import classes from './awards.module.scss'

const Awards = () => {
    return (
        <div className={classes.awardsContainer}>
            <NewAcounts />
            <AwardList />
        </div>
    )
}

export default Awards