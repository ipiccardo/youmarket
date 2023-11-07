"use client"

import React, { useEffect, useState } from 'react'
import styles from './header.module.scss'
import { usePathname, useRouter } from 'next/navigation';
import IconHandler from '../ui/icon/IconHandler';

const Header = () => {
    const [title, setTitle] = useState('')
    const pathName = usePathname();
    const router = useRouter()

    useEffect(() => {
        if (pathName.includes('verification')) {
            setTitle('Nombre de Accion')
        } else if (pathName.includes('auth')) {
            setTitle('')
        } else if (pathName.includes('acredit')) {
            setTitle('¿Cuánto querés ingresar?')
        } else if (pathName.includes('awards')) {
            setTitle('¿A quién querés premiar?')
        } else {
            setTitle('¡Hola Test!')
        }
    }, [pathName])

    return (
        <div className={styles.headerContainer}>
            {title !== '¡Hola Test!' && title !== '' ?
                (
                    <div onClick={() => router.back()}>
                        <IconHandler name='back' size={40} />
                    </div>
                ) : ''
            }
            <div className={styles.titleContainer}>
                {title === '¡Hola Test!' && !pathName.includes('pages') ? '' : title}
            </div>
        </div>
    )
}

export default Header