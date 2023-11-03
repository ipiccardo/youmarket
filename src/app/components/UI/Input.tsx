import React from 'react'
import classes from './input.module.scss'
import Icon from './icon/icon'

const Input = () => {
    return (
        <div className={classes.inputContainer}>
            <input className={classes.input} placeholder='Buscar por nombre o email.'></input>
            <Icon name='search' size={20} />
        </div>
    )
}

export default Input