import Observer from './Observer'
import './contact.scss'

const Contact = () => {
  return (
    <section id="contact" style={{
      backgroundImage: "url(images/contact2.jpg)"
    }}>
      <div className="logo-container">
        <div className="studio-logo">
          <img
            src="images/logo-bar-black.png"
            alt="logo"
          />
          <img
            src="images/logo-bar-white.png"
            className="flicker-image"
            alt="logo"
          />
          <img
            src="images/logo-bar-white.png"
            className="flicker-image-alternate"
            alt="logo"
          />
        </div>
      </div>
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
              <a href="https://goo.gl/maps/ho1xhrgE9cPNo5Ei8" target="_blank" rel="noreferrer">
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
      <Observer
        position="quote top"
        quote="Mark is a skilled pitch editor"
        description="Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum"
      />
      <Observer
        position="quote mid"
        quote="I'm a real family man"
        description="Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum"
      />
      <Observer
        position="quote low"
        quote="Editor with an eye for detail"
        description="Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum"
      />
    </section >
  )
}

export default Contact