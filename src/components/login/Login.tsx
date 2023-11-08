'use client'
import React, { useContext, useEffect, useState } from 'react'
import Button from '../Ui/button/Button'
import styles from './login.module.scss'
import { generarNumeroAleatorio } from '@/utils/generalFunctions'
import { store } from '@/_context/context'


const Login = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [blur, setBlur] = useState(false)

    const context = useContext(store)

    const { pin, setPin }: any = context

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        if (!/^\S+@\S+\.\S+$/.test(newEmail)) {
            setError('Ingrese una dirección de correo electrónico válida.');
        }
        else {
            setError('');
        }
    };

    const sendEmail = async (correo: string) => {
        try {
            const response = await fetch('/api/server', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ destinatario: correo, asunto: 'Asunto del correo', contenido: pin }),
            });

            const data = await response.json();
            if (data.message === 'Correo enviado con éxito') {
            } else {
                console.error('Error al enviar el correo:', data.message);
            }
        } catch (error) {
            console.error('Error al enviar el correo:', error);
        }
    };


    useEffect(() => {
        const newNumber = generarNumeroAleatorio()
        setPin(newNumber)
    }, [generarNumeroAleatorio])




    const handleShowError = () => {
        if (error || email === '') {
            setError('Ingrese una dirección de correo electrónico válida.')
            setBlur(true)
            setEmail('ejemplo@hotmail.com')
        } else {
            setError('')
            sendEmail(email)
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