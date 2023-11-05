import Button from '@/app/components/UI/Button'
import AwardList from '@/app/components/awardList/AwardList'
import NewAcounts from '@/app/components/newAcounts/NewAcounts'
import React from 'react'
import classes from './awardsPage.module.scss'
import Link from 'next/link'

const Awards = () => {
    return (
        <div>
            <NewAcounts />
            <AwardList />
            <div className={classes.buttonContainer}>
                <Link href={'/'}>
                    <Button text={'CONTINUAR'} secondaryButton={true} href='' />
                </Link>
            </div>
        </div>
    )
}

export default Awards