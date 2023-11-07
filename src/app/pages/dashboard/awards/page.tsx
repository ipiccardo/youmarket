import AwardList from '@/app/components/awardList/AwardList'
import NewAcounts from '@/app/components/newAcounts/NewAcounts'
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