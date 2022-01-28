import { useEffect, useState } from 'react'
import axios from 'axios'

const About = (props) => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(props.url)
        .then(res => {
            setData(res.data.items)
        })
        .catch (err => console.log(err))
    }, [])  

return (
    <section>
        {data.slice(0, 3).map((item, index) => {
            return (
                <figure key={item.id}>
                    <img src={item.image} alt={item.title} />
                    <article>
                        <h3>{item.title}</h3>
                        <p>{item.teaser}</p>
                    </article>
                </figure>
            )
        })}
    </section>
)
}

export default About