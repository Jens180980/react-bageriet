import styles from './login.module.scss'
import axios from 'axios'
import { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const Login = (props) => {

    const login = async e => { 
        const formData = new FormData(e.target.form)
        const url = 'https://api.mediehuset.net/token'
        const result = await axios.post(url, formData)
        if(result.status){
            sessionStorage.setItem('token', JSON.stringify(result.data))
            props.changeModal(false)
        } 
    }

    const closeModal = () => props.changeModal(false)

            return (
                <section className={styles.login}>
                    <p onClick={closeModal}>X</p>
                    <h3>Indtast brugernavn og kodeord</h3>
                    <form method="post">
                        <div>
                            <label htmlFor="username">Bruger: </label>
                            <input type="text" id="username" name="username" />
                        </div>
                        <div>
                            <label htmlFor="password">Kode: </label>
                            <input type="password" id="password" name="password" />
                        </div>
                        <div>
                            <button onClick={login} type="button">Login: </button>
                        </div>
                    </form>
                </section>
        )  
}

export default Login