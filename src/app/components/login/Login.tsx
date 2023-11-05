'use client'
import React, { useEffect, useState } from 'react'
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



    return (
        <div className={styles.loginContainer}>
            <div className={styles.cuitOrMail}>
                <form>
                    <input type='email' id="myInput" placeholder="" required value={email}
                        onChange={handleEmailChange} onBlur={() => setBlur(true)} onFocus={() => { setError(''), setBlur(false) }} />
                    <label htmlFor="myInput">CUIT o Correo Electrónico</label>
                    {error && blur && email !== '' ? <div className={styles.error}>{error}</div> : ''}
                </form>
            </div>
            <Button href={'/pages/dashboard/verification'} text={'INICIAR SESIÓN'} />
            <a className={styles.link}>Aún no tengo cuenta</a>
        </div>
    )
}

export default Login