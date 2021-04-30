import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import './studio.scss'

const studio = () => {
  return (
    <section id="studio">Î
      <div className="studio-logo">
        <img
          src="images/logo-bar-black.png"
          alt="logo" />
        <img
          src="images/logo-bar-white.png"
          className="flicker-image"
          alt="logo" />
        <img
          src="images/logo-bar-white.png"
          className="flicker-image-alternate"
          alt="logo"
        />

      </div>
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
              <h2>Couch of Success</h2>
              <h4>
                I brainstorm my finest ideas on the couch of success
                <br></br>
                The postmark team collobates here daily
              </h4>
            </div>
          </div>
        </SplideSlide>

        <SplideSlide>
          <div className="slide" style={{
            backgroundImage: "url(images/edit-suite.jpeg)",
          }}>
            <div className="slide-txt">
              <h2>Edit Suite</h2>
              <h4>
                Where the magic happens
                <br></br>
                All the best tools Logic, Premiere for the best product
              </h4>
            </div>
          </div>
        </SplideSlide>

        <SplideSlide>
          <div className="slide" style={{
            backgroundImage: "url(images/long-table.jpeg)",
          }}>
            <div className="slide-txt">
              <h2>Board Room</h2>
              <h4>
                The core of Postmark
                <br></br>
                Multimillion deals start and finish right here
              </h4>
            </div>
          </div>
        </SplideSlide>

        <SplideSlide>
          <div className="slide" style={{
            backgroundImage: "url(images/red-wall.jpeg)",
          }}>
            <div className="slide-txt">
              <h2>Style and Substance</h2>
              <h4>
                Whatever you need we have it in spades
                <br></br>
                Bags of Style and Bags of Substance ;)
              </h4>
            </div>
          </div>
        </SplideSlide>

      </Splide>
    </section >
  )
}

export default studio