import Observer from './Observer'
import './contact.scss'

const Contact = () => {
  return (
    <section id="contact" style={{
      backgroundImage: "url(images/Mark-Office.jpeg)"
    }}>
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
      <Observer
        position="quote"
        quote='"Mark is a skilled pitch editor"'
        description="Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum"
      />
      <Observer
        position="quote"
        quote='"Im a real family man"'
        description="Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum"
      />
      <Observer
        position="quote"
        quote='"Editor with an eye for detail"'
        description="Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum"
      />
      <footer className="footer-container">
        <p>
          © 2021 FrontLabs. All Rights Reserved.
        </p>
      </footer>
    </section >
  )
}

export default Contact