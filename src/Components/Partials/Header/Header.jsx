import styles from './header.module.scss'
import Navigation1 from '../Navigation/Navigation1'
import Navigation2 from '../Navigation/Navigation2'

const Main = props => {
return (
    <header className={styles.header}>
        <Navigation1 />
        <h1>Bageriet</h1>
        <Navigation2 />
    </header>
)
}
export default Main