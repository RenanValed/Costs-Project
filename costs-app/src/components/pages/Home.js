import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'

function Home(){
    return(
        <section className={styles.home_container}>
            <h1>Welcome to <span>Costs</span></h1>
            <p>Start your manager! Create a project now!</p>
            <LinkButton to='/newproject' text="Create Project"/>

            <img src={savings} alt="Costs pig"/>
        </section>
    )
}

export default Home