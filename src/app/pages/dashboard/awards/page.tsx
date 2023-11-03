import Input from '@/app/components/UI/Input'
import AwardList from '@/app/components/awardList/AwardList'
import NewAcounts from '@/app/components/newAcounts/NewAcounts'
import React from 'react'

const Awards = () => {
    return (
        <div>
            <NewAcounts />
            <Input />
            <AwardList />
        </div>
    )
}

export default Awards