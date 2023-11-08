import IconHandler from '../Ui/icon/IconHandler'
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
                        <div key={new Date().getTime() + index} className={modules.divIcon}>
                            <IconHandler key={new Date().getTime() + index} name={icon.name} size={40} />
                            <p>{icon.text}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default NewAcounts