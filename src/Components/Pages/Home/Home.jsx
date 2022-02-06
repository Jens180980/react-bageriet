import Slider from '../../Partials/Slider/Slider'
import News from '../../Partials/News/News'
import Newsletter from '../../Partials/Newsletter/Newsletter'
import About from '../../Partials/About/About'

const Home = (props) => {
    


return (
    <section>
        <Slider />
        <article>
            <h3>Vi skaber lækket brød!</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, assumenda, a dolore vero ea nemo dolor dolorum impedit perferendis dolorem libero voluptatibus! Beatae, labore sed? Delectus voluptates porro ad doloribus.</p>
        </article>
        <About url="https://api.mediehuset.net/bakeonline/news"/>
        <Newsletter />
        <News />
    </section>
)
}

export default Home