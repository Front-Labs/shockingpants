import React from "react"
import './contact.scss'

const Contact = () => {
  
  return (
    <section id="contact">
      <div className="quote">
        <p>"Editor is what I am"</p>
      </div>
      <div className="quote2">
        <p>"for tv, film and commercials"</p>
      </div>

      <ul className="contact-buttons">
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

      <a href="#featured">
        <div className="arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </a>
      <div className="contact-background" id="contact-bw" style={{ backgroundImage: "url(images/contact2.jpg)" }}></div>
      {/* <div className="contact-background" id="contact-col" style={{ backgroundImage: "url(images/contact.jpg)" }}></div> */}
    </section>
  )
}

export default Contact