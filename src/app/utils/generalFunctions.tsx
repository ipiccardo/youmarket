import classes from '../components/awardList/awardList.module.scss'

export const extractFirstLetter = ({ name }: any) => {
    return (
        name.split(' ')
            .map((word: string[]) => word[0])
            .join('')
    )
}


export const renderAccount = (e: any, index: number, handleButtonClick: any, activeButtonIndex: number | undefined, filteredList: any) => (
    <div key={index} className={classes.account}>
        <div>
            <div>{extractFirstLetter(e)}</div>
            <div className={classes.dataContainer}>
                <p>{e.name}</p>
                <p className={index === 0 || index === 3 ? '' : classes.widthDecoration}>{e.mail}</p>
            </div>
        </div>
        <button className={classes.checked} onClick={() => handleButtonClick(index)}>
            {activeButtonIndex === index && !filteredList[activeButtonIndex]?.checked ? 'X' : ''}
        </button>
    </div>
);
