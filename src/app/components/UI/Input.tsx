'use client'
import React from 'react'
import classes from './input.module.scss'
import Icon from './icon/Icon'
import { InputProps } from '@/app/types'

const Input: React.FC<InputProps> = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className={classes.inputContainer}>
            <input type='text' value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value) }} className={classes.input} placeholder='Buscar por nombre o email.'></input>
            <Icon name='search' size={20} />
        </div>
    )
}

export default Input