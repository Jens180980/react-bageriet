import styles from './nav.module.scss'

const Navigation2 = props => {
return (
    <nav className={styles.navigation}>
        <ul>
            <li><a href='/contact'>Kontakt Os</a></li>
            <li className="loginBtn">Login</li>
        </ul>
    </nav>
)
}
export default Navigation2