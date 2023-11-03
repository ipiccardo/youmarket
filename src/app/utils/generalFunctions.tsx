
export const extractFirstLetter = ({ name }: any) => {
    return (
        name.split(' ')
            .map((word: string[]) => word[0])
            .join('')
    )
}