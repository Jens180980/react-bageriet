import { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'
import Form from '../../Partials/Form/Form'
import Map from '../../Partials/Map/Map'

const Contact = (props) => {
    const {loginData} = useContext(AuthContext)
    console.log(loginData);

    return (
        <section>
            {loginData 
            ?
            <>
            <p>Du er logget ind :)</p>
            <Form />
            <Map />
            </>
            :
            <p>Du er ikke logget ind!</p>
        }
            
        </section>
    )
}

export default Contact

