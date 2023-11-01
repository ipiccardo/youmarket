import Button from '@/app/components/UI/Button'
import Inputs from '@/app/components/UI/Inputs'
import React from 'react'
import classes from './page.module.scss'

const Verification = () => {
    return (
        <div className={classes.formContainer}>
            <div className={classes.paragraphContainer}>
                <p>Te acabamos de enviar un correo a</p>
                <p className={classes.mail}>test@test.com.ar</p>
                <p>Ingresa el código de 6 dígitos recibido</p>
            </div>
            <Inputs />
            <Button href={''} text={'REENVIAR CÓDIGO'} secondaryButton={true} />
        </div>
    )
}

export default Verification