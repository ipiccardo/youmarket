'use client'
import React, { useState } from 'react'
import Button from '../UI/Button'
import styles from './login.module.scss'


const Login = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [blur, setBlur] = useState(false)

    const handleEmailChange = (e: any) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        if (!/^\S+@\S+\.\S+$/.test(newEmail)) {
            setError('Ingrese una dirección de correo electrónico válida.');
        }
        else {
            setError('');
        }
    };

    const handleShowError = (e: any) => {
        if (error || email === '') {
            setError('Ingrese una dirección de correo electrónico válida.')
            setBlur(true)
            setEmail('ejemplo@hotmail.com')
        } else {
            setError('')
        }
    }

    return (
        <div className={styles.loginContainer}>
            <div className={styles.cuitOrMail}>
                <form>
                    <input type='email' id="myInput" placeholder="" required value={email || ''}
                        onChange={handleEmailChange} onBlur={() => setBlur(true)} onFocus={() => { setError(''), setBlur(false), setEmail(email.includes('ejemplo') ? '' : email) }} />
                    <label htmlFor="myInput">CUIT o Correo Electrónico</label>
                    {(error && blur && email !== '') ? <div className={styles.error}>{error}</div> : ''}
                </form>
            </div>
            <Button onClick={handleShowError} href={`${error === '' && email !== '' ? '/pages/dashboard/verification' : '/'}`} text={'INICIAR SESIÓN'} />
            <a className={styles.link}>Aún no tengo cuenta</a>
        </div>
    )
}

export default Login