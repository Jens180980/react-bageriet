import styles from './nav.module.scss'

const Navigation1 = props => {
return (
    <nav className={styles.navigation}>
        <ul>
            <li><a href='/'>Forside</a></li>
            <li><a href='/products'>Produkter</a></li>
        </ul>
    </nav>
)
}
export default Navigation1