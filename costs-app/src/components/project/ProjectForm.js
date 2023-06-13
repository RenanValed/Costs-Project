import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'

import {useEffect, useState} from "react"


export default function ProjectForm({btnText}){

    const [categories, setCategories] = useState([])
    
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

    return (
        <form className={styles.form}>
            <div>
                <Input
                type='text'
                text='Name Project'
                name='name'
                placeholder="Insert Project name"
                />
            </div>
            <div>
                <Input
                type='number'
                text='Total budget'
                name='budget'
                placeholder="Insert Project budget"
                />
            </div>
           
            <div>
            
            <Select name='category_id' text='Select a category' options={categories}/> 
            </div>

            <div>
                <SubmitButton text={btnText}/>
            </div>
        </form>
    )
}