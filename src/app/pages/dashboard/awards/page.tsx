import Button from '@/app/components/UI/Button'
import Input from '@/app/components/UI/Input'
import AwardList from '@/app/components/awardList/AwardList'
import NewAcounts from '@/app/components/newAcounts/NewAcounts'
import React from 'react'
import classes from './awardsPage.module.scss'

const Awards = () => {
    return (
        <div>
            <NewAcounts />
            <AwardList />
            <div className={classes.buttonContainer}>
                <Button text={'CONTINUAR'} secondaryButton={true} href='' />
            </div>
        </div>
    )
}

export default Awards