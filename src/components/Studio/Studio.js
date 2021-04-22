import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import './studio.scss'

const studio = () => {
  return (
    <section id="studio">
      <h1>The Studio</h1>
      <Splide
        options={{
          height: '125vh',
          width: '100%',
          type: 'loop',
          autoplay: true,
          speed: 2500,
          arrows: false,
          easing: 'ease',
          interval: 6000,
          drag: false,
          pagination: true,
          pauseOnHover: false,
          pauseOnFocus: false,
          keyboard: false
        }}
        hasSliderWrapper
      >
        <SplideSlide >
          <div className="slide" style={{
            backgroundImage: "url(images/couch.jpeg)",
          }}>
            <div className="slide-txt">
              <h4>Slide 1 info and description</h4>
              <h5>additional details</h5>
            </div>
          </div>
        </SplideSlide>

        <SplideSlide>
          <div className="slide" style={{
            backgroundImage: "url(images/edit-suite.jpeg)",
          }}>
            <div className="slide-txt">
              <h4>Slide 2 info and description</h4>
              <h5>additional details</h5>
            </div>
          </div>
        </SplideSlide>

        <SplideSlide>
          <div className="slide" style={{
            backgroundImage: "url(images/long-table.jpeg)",
          }}>
            <div className="slide-txt">
              <h4>Slide 3 info and description</h4>
              <h5>additional details</h5>
            </div>
          </div>
        </SplideSlide>

        <SplideSlide>
          <div className="slide" style={{
            backgroundImage: "url(images/red-wall.jpeg)",
          }}>
            <div className="slide-txt">
              <h4>Slide 4 info and description</h4>
              <h5>additional details</h5>
            </div>
          </div>
        </SplideSlide>

      </Splide>
    </section>
  )
}

export default studio