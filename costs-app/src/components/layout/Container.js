import styles from './Container.module.css'

function Container(props){
    return(
        <div className={`${styles.linknav} ${styles[props.customClass]}`}>
            {props.children}
        </div>
    )
}

export default Container