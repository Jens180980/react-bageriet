import styles from './nav.module.scss'
import Login from '../../Partials/Login/Login'

const Navigation2 = props => {

    const changeModal = () => props.changeModal(true)

return (
    <nav className={styles.navigation}>
        <ul>
            <li><a href='/contact'>Kontakt Os</a></li>
            <li onClick={changeModal} className="loginBtn">Login</li>
        </ul>
       
    </nav>
)
}
export default Navigation2