import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'

import {useEffect, useState} from "react"


export default function ProjectForm({handleSubmit, projectData, btnText}){

    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})


    useEffect(() =>{
            fetch("http://localhost:5000/categories",{
            method: "GET",
            headers:{
                "Content-Type" : "application/json" 
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            setCategories(data)
        })
        .catch((err) => console.log(err)) 
    }, [])

    const submit = (e) => { //executa o metodo passado e manda a prop como argumento
        e.preventDefault()
        handleSubmit(project)
        //console.log(project)
    }

    function handleChange(e){
        setProject({...project, [e.target.name]: e.target.value}) //pega todos os dados de project
        
    }

    function handleCategory(e){
        setProject({
            ...project,
            category:{
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        },
    })
    }


    return (
        <form onSubmit={submit} className={styles.form}>
            <div>
                <Input
                type='text'
                text='Name Project'
                name='name'
                placeholder="Insert Project name"
                handleOnChange={handleChange}
                value={project.name ? project.name : ""} // se tiver name, envia, se nao envia vazio
                />
            </div>
            <div>
                <Input
                    type='number'
                    text='Total budget'
                    name='budget'
                    placeholder="Insert Project budget"
                    handleOnChange={handleChange}
                    value={project.budget ? project.budget : ""} // se tiver buget, envia, se nao envia vazio
                />
            </div>
           
            <div>
            
            <Select 
            name='category_id' 
            text='Select a category' 
            options={categories}
            handleOnChange={handleCategory}
            value={project.category ? project.category.id : ""} // se tiver category, envia, se nao envia vazio
            /> 
            </div>

            <div>
                <SubmitButton text={btnText}/>
            </div>
        </form>
    )
}