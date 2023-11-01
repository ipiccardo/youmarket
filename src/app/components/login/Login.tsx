import React from 'react'
import Button from '../UI/Button'
import styles from './login.module.scss'


const Login = () => {
    return (
        <div className={styles.loginContainer}>
            <div className={styles.cuitOrMail}>
                <p>
                    CUIT o Correo Electrónico
                </p>
            </div>
            <Button href={''} text={'INICIAR SESIÓN'} />
            <a className={styles.link}>Aún no tengo cuenta</a>
        </div>
    )
}

export default Login