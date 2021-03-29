import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const studio = () => {
  return (
  <div id="studio">
    <Splide
      options={ {
        type          : 'loop',
        autoplay      : true,
        speed         : 2000,
        height        : '110vh',
        arrows        : false,
        cover         : true,
        easing        : 'ease',
        interval      : 3000,
        drag          : false,
        pagination    : false,   
        pauseOnHover  : false,
        pauseOnFocus  : false,
        keyboard      : false
      } }
      hasSliderWrapper
    >
      <SplideSlide>
        <div style={{
          background:'purple',
            height: '100%',
            width:'100%'
        }}></div>
      </SplideSlide>

      <SplideSlide>
      <div style={{
        background: 'orange',
        height: '100%',
        width:'100%'
        }}></div>
      </SplideSlide>

      <SplideSlide>
      <div style={{
        background: 'blue',
        height: '100%',
        width:'100%'
        }}></div>
      </SplideSlide>

    </Splide>
    </div>
  )
}

export default studio