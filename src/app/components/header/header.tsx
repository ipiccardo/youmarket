"use client"

import React, { useEffect, useState } from 'react'
import styles from './header.module.scss'
import { usePathname } from 'next/navigation';

const Header = () => {
    const [title, setTitle] = useState('')
    const pathName = usePathname();


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
        <div className={styles.headerContainer}>{title}</div>
    )
}

export default Header