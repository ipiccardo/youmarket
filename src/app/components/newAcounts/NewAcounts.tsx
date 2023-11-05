import Icon from '../UI/icon/icon'
import classes from './newAcounts.module.scss'
import modules from '../actions/actions.module.scss'

const NewAcounts = () => {

    const icons = [{ name: 'addacount', text: 'Agregar Cuenta' }, { name: 'upload', text: 'Subir Archivo' }]


    return (
        <div className={modules.acountsContainer}>
            <p className={classes.title}>Nuevas cuentas</p>
            <div className={classes.iconContaier}>
                {icons.map((icon, index) => {
                    return (
                        <div className={modules.divIcon}>
                            <Icon key={new Date().getTime() + index} name={icon.name} size={40} />
                            <p>{icon.text}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default NewAcounts