import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'

export default function ProjectForm({btnText}){
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

            <Select name='category_id' text='Select a category'/> 
            </div>

            <div>
                <SubmitButton text={btnText}/>
            </div>
        </form>
    )
}