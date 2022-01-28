import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'; // https://github.com/leandrowd/react-responsive-carousel
import image1 from '../../../Assets/Img/slide1.jpg'
import image2 from '../../../Assets/Img/slide2.jpg'
import image3 from '../../../Assets/Img/slide3.jpg'

const Slider = () => {
  return (
    <Carousel autoPlay={true} showThumbs={false} infiniteLoop={true} showStatus={false}>
                <div>
                    <img src={image1} alt="heroimages"/>
                </div>
                <div>
                    <img src={image2} alt="heroimages" />
                </div>
                <div>
                    <img src={image3} alt="heroimages"/>
                </div>
    </Carousel>
  )
}

export default Slider