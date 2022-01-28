import { useEffect, useState } from 'react'
import axios from 'axios'

const Gallery = (props) => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(props.url)
        .then(res => {
            setData(res.data.items)
            console.log(data); 
        })
        .catch (err => console.log(err))
    }, [])  

return (
    <section>
        {data.map((item, index) => {
            return (
                <figure key={item.id}>
                    <img src={item.image.fullpath} alt={item.title} />
                    <article>
                        <h3>{item.title}</h3>
                        <p>{item.teaser}</p>
                    </article>
                    <button>Se Mere</button>
                </figure>
            )
        })}
    </section>
)
}

export default Gallery