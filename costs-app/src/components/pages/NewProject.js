import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'

function NewProject(){
    return(
        <div className={styles.newproject_container}>
            <h1> Create Project</h1>
            <p> Create yout project for before add services</p>

            <ProjectForm btnText='Create project'/>

        </div>
    )
}
export default NewProject