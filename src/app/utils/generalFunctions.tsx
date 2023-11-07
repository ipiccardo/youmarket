import classes from '../components/awardList/awardList.module.scss'

export const extractFirstLetter = ({ name }: any) => {
    return (
        name.split(' ')
            .map((word: string[]) => word[0])
            .join('')
    )
}


export const renderAccount = (e: any, index: number, handleButtonClick: any, activeButtonIndex: number | undefined, filteredList: any) => (
    <div key={new Date().getTime() + index} className={classes.account}>
        <div>
            <div>{extractFirstLetter(e)}</div>
            <div className={classes.dataContainer}>
                <p>{e.name}</p>
                <p className={index === 0 || index === 3 ? '' : classes.widthDecoration}>{e.mail}</p>
            </div>
        </div>
        <button className={classes.checked} onClick={() => handleButtonClick(index)}>
            {activeButtonIndex === index && !filteredList[activeButtonIndex]?.checked ?
                (
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="30" height="30" viewBox="0 0 256 256" xmlSpace="preserve">

                        <defs>
                        </defs>
                        <g fill="stroke: none; stroke-width: 0; stroke-dasharray: none; strokeLinecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                            <path d="M 45 90 C 20.187 90 0 69.813 0 45 C 0 20.187 20.187 0 45 0 c 24.813 0 45 20.187 45 45 C 90 69.813 69.813 90 45 90 z M 45 7 C 24.047 7 7 24.047 7 45 s 17.047 38 38 38 s 38 -17.047 38 -38 S 65.953 7 45 7 z" fill="stroke: none; stroke-width: 1; stroke-dasharray: none; strokeLinecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                            <path d="M 42.245 62.755 c -1.021 0 -1.992 -0.445 -2.657 -1.222 L 22.121 41.159 c -1.258 -1.468 -1.088 -3.678 0.379 -4.936 c 1.466 -1.258 3.677 -1.089 4.935 0.379 L 42.162 53.78 l 20.334 -25.231 c 1.215 -1.506 3.417 -1.741 4.922 -0.529 c 1.505 1.214 1.742 3.417 0.529 4.922 L 44.97 61.451 c -0.653 0.81 -1.632 1.287 -2.672 1.304 C 42.28 62.755 42.262 62.755 42.245 62.755 z" fill="stroke: none; stroke-width: 1; stroke-dasharray: none; strokeLinecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                        </g>
                    </svg>
                ) : ''
            }
        </button>
    </div>
);



export function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 900000) + 100000;
}