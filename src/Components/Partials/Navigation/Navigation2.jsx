import styles from './nav.module.scss'
import { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'


const Navigation2 = props => {
    const {loginData, setLoginData} = useContext(AuthContext)
    
    const login = () => {
        props.changeModal(true)
    }
    
    const logout = () => {
        sessionStorage.clear()
        setLoginData('')
    }

return (
    <nav className={styles.navigation}>
        <ul>
            <li><a href='/contact'>Kontakt Os</a></li>
            {loginData 
            ?
            <li onClick={logout} className="loginBtn">Logout</li>
            :
            <li onClick={login} className="loginBtn">Login</li>
            }
            
        </ul>
       
    </nav>
)
}
export default Navigation2