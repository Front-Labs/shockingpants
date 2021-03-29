import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const studio = () => {
  return (
    <Splide
      options={ {
        type          : 'loop',
        autoplay      : true,
        speed         : 2000,
        height        : '100vh',
        arrows        : false,
        cover         : true,
        easing        : 'ease',
        interval      : 5000,
        drag          : false,
        pagination    : false,   
        pauseOnHover  : false,
        keyboard      : false
      } }
    >
      <SplideSlide>
        <img src="images/contact.jpg" alt="SEO" />
      </SplideSlide>
      <SplideSlide>
        <img src="images/contact2.jpg" alt="SEO" />
      </SplideSlide>
    </Splide>
  )
}

export default studio