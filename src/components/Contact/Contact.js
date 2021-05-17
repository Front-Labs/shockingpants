import Observer from './Observer'
import './contact.scss'
import { useMediaQuery } from 'react-responsive';


const Contact = () => {
  let options = {
    backgroundImage: 'url(images/Mark.jpg)'
  }
  const isMobilePortrait = useMediaQuery({ maxWidth: 1280, orientation: "portrait" });
  if (isMobilePortrait) {
    options = {
      backgroundImage: 'url(images/Mark-Contact-Small.jpg)'
    }
  }
  return (
    <section id="contact" style={options}>
      <div className="contact-container">
        <div className="contact-buttons">
          <ul>
            <li>
              <a href="https://vimeo.com/postmark" target="_blank" rel="noreferrer">
                <img src="images/vimeo.svg" alt="vimeo" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/mark-schokkenbroek-78169541/" target="_blank" rel="noreferrer">
                <img src="images/linkedin.svg" alt="linkedin" />
              </a>
            </li>
            <li>
              <a href="https://goo.gl/maps/AFnGUzM7BgBCJ5EV9" target="_blank" rel="noreferrer">
                <img src="images/map-marker.svg" alt="map-marker" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <a href="#featured">
        <div className="arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </a>

      <div className="quote-container1">
        <Observer
          position="quote1"
          quote='"Who you gonna call? Pitchbusters!"'
          description='Winning pitches since he was in his diapers.'
        />
        <div className="quote-container2">
          <Observer
            position="quote2"
            quote='"Dad of two aliens"'
            description="Mark knew about UFO's even before the Pentagon!"
          />
          <div className="quote-container3">
            <Observer
              position="quote3"
              quote='"Rythm is a dancer!"'
              description="It's a soul's companion. You can feel it everywhere. Especially in Mark's edits."
            />
          </div>
        </div>
      </div>

      <footer className="footer-container">
        <p>
          © 2021 FrontLabs. All Rights Reserved.
        </p>
      </footer>
    </section >
  )
}

export default Contact