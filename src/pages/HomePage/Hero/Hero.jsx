import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import slide1 from "../../../assets/home/01.jpg";
import slide2 from "../../../assets/home/02.jpg";
import slide3 from "../../../assets/home/03.png";
import slide4 from "../../../assets/home/04.jpg";
import slide5 from "../../../assets/home/05.png";
import slide6 from "../../../assets/home/06.png";
import './hero.css'
const Hero = () => {
  const slides = [slide1, slide2, slide3, slide4, slide5, slide6];
  return (
    <Carousel>
      {slides.map((slide, index) => (
        <div className="max-h-[80vh]" key={index}>
          <img src={slide} />
        </div>
      ))}
    </Carousel>
  );
};

export default Hero;
