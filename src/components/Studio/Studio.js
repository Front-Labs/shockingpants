import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import './studio.scss'

const studio = () => {
  return (
    <div id="studio">
      <Splide
        options={{
          type: 'loop',
          autoplay: true,
          speed: 2000,
          height: '110vh',
          width: '100vw',
          arrows: false,
          cover: true,
          easing: 'ease',
          interval: 3000,
          drag: false,
          pagination: false,
          pauseOnHover: false,
          pauseOnFocus: false,
          keyboard: false
        }}
        hasSliderWrapper
      >
        <SplideSlide>
          <div className="slide" style={{
            backgroundImage: "url(images/couch.jpeg)",
          }}>
            <h3>Slide 1</h3>
          </div>
        </SplideSlide>

        <SplideSlide>
          <div className="slide" style={{
            backgroundImage: "url(images/edit-suite.jpeg)",
          }}>
            <h3>Slide 2</h3>
          </div>
        </SplideSlide>

        <SplideSlide>
          <div className="slide" style={{
            backgroundImage: "url(images/long-table.jpeg)",
          }}>
            <h3>Slide 3</h3>
          </div>
        </SplideSlide>

        <SplideSlide>
          <div className="slide" style={{
            backgroundImage: "url(images/red-wall.jpeg)",
          }}>
            <h3>Slide 3</h3>
          </div>
        </SplideSlide>

      </Splide>
    </div>
  )
}

export default studio