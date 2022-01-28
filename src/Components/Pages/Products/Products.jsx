import AsideMenu from '../../Partials/AsideMenu/AsideMenu'
import Gallery from '../../Partials/Gallery/Gallery'

const Products = (props) => {
return (
    <section>
        <article>
            <h3>Vores elskede bagværk</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque delectus eum amet voluptate voluptas sed asperiores animi optio adipisci eius.</p>    
        </article>
        <AsideMenu url="https://api.mediehuset.net/bakeonline/categories"/>
        <Gallery url="https://api.mediehuset.net/bakeonline/products"/>
    </section>

)
}

export default Products