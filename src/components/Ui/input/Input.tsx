'use client'

import React from 'react'
import classes from './input.module.scss'
import IconHandler from '../icon/IconHandler'
import { InputProps } from '@/types'

const Input: React.FC<InputProps> = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className={classes.inputContainer}>
            <input type='text' value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value) }} className={classes.input} placeholder='Buscar por nombre o email.'></input>
            <IconHandler name='search' size={20} />
        </div>
    )
}

export default Input