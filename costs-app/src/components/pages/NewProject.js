import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'
import { useNavigate} from "react-router-dom"

function NewProject(){

    const history = useNavigate()

    function createPost(project){
        // intialize cost and services
        project.cost = 0
        project.services = []
        // caso exista backend no projeto, essa function deve estar la
        fetch("http://localhost:5000/projects",{
            method: "POST",
            headers:{
                "Content-type": "application/json"
            },
            body: JSON.stringify(project)

        }).then((resp) => resp.json())
        .then((data) =>{
            console.log(data)
            //redirect
            history.push('/projects',{ message: "Sucess created project!"})
        })
        .catch((err)=>console.log(err))

    }


    return(
        <div className={styles.newproject_container}>
            <h1> Create Project</h1>
            <p> Create yout project for before add services</p>

            <ProjectForm handleSubmit={createPost} btnText='Create project'/>

        </div>
    )
}
export default NewProject