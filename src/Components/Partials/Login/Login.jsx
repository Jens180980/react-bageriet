import styles from './login.module.scss'
import axios from 'axios'
import { useForm } from 'react-hook-form'

export const Login = (props) => {

    const {register, handleSubmit, watch, formstate: { errors }} = useForm()

     const login = async e => { 
        const formData = new FormData(e.target.form)
        // formData.append('username', data.username)
        // formData.append('password', data.password)
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
                    <form method="post" onSubmit={handleSubmit(login)}>
                        <div>
                            <label htmlFor="username">Bruger: </label>
                            <input {...register('username', { required: true })} id="username"  />
                            {errors.username && <span>'Indtast dit brugernavn'</span>}
                        </div>
                        <div>
                            <label htmlFor="password">Kode: </label>
                            <input {...register('password', { required: true })} type="password" id="password" />
                            {errors.password && <span>'Indtast dit kodeord'</span>}
                        </div>
                        <div>
                            <button type="submit">Login: </button>
                        </div>
                        
                    </form>
                </section>
        )  
}
