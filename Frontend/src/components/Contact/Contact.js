import React from "react"
import './contact.css'

const Contact = () => {
  
  return (
    <section id="contact">
      <div className="quote">
        <p>"Best editor in town"</p>
      </div>
      <div className="quote2">
        <p>"And handsome too"</p>
      </div>

      <ul className="contact-buttons">
        <li>
          <a href="https://vimeo.com/postmark" target="_blank">
            <img src="images/vimeo.svg" alt="vimeo" />
          </a>
        </li>
        <li>
        <a href="https://www.linkedin.com/in/mark-schokkenbroek-78169541/" target="_blank">
            <img src="images/linkedin.svg" alt="linkedin" />
          </a>
        </li>
        <li>
        <a href="https://goo.gl/maps/ho1xhrgE9cPNo5Ei8" target="_blank">
            <img src="images/map-marker.svg" alt="map-marker" />
          </a>
        </li>
      </ul>

      <a href="#slider">
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