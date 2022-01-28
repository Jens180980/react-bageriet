import { useEffect, useState } from 'react'
import axios from 'axios'

const AsideMenu = (props) => {
    const [data, setdata] = useState([])
    useEffect(() => {
        axios.get(props.url)
        .then(res => {
            setdata(res.data.items)
        })
        .catch (err => console.log(err))
    }, [])  

return (
    <ul>
        {data.map((item) => {
            return (
                <li key={item.id}><a>{item.title}</a></li>
            )
        })}
    </ul>
)
}

export default AsideMenu