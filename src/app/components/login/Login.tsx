import React from 'react'
import Button from '../UI/Button'
import styles from './login.module.scss'


const Login = () => {
    return (
        <div className={styles.loginContainer}>
            <div className={styles.cuitOrMail}>
                <form>
                    <input required>
                    </input>
                    <label>CUIT o Correo Electrónico</label>
                </form>
            </div>
            <Button href={'/pages/dashboard/verification'} text={'INICIAR SESIÓN'} />
            <a className={styles.link}>Aún no tengo cuenta</a>
        </div>
    )
}

export default Login