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
      <div className="quote top">
        <h3>'Mark is a skilled pitch editor'</h3>
      </div>
      <div className="quote mid">
        <h3>'I'm a real family man'</h3>
      </div>
      <div className="quote low">
        <h3>'Editor with an eye for detail'</h3>
      </div>
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
      <a href="#featured">
        <div className="arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </a>
    </section>
  )
}

export default Contact