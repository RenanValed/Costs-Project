import { FaFacebook, FaGithub, FaInstagram} from 'react-icons/fa'
import styles from './Footer.module.css'


export default function Footer(){
    return (
        <footer className={styles.FooterContainer}>
        <ul className={styles.socialList}>
            <li><FaFacebook/></li>
            <li><FaInstagram/></li>
            <li><FaGithub/></li>

        </ul>
        <p className={styles.copyRight}>
            <span>Costs</span> &copy; 2023
        </p>
        </footer>

    )
}