import './contact.scss'
import Modal from './Modal'

const Contact = () => {

  return (
    <section id="contact" style={{
      backgroundImage: "url(images/contact2.jpg)"
    }}>
      <Modal
        quote="Worlds finest editor!"
        popup="I am the worlds finest editor, no doubt about it"
      />
      <Modal
        quote="Excellent original content"
        popup="I am the most original content creator, no doubt about it"
      />
      <Modal
        quote="Quality production for TV"
        popup="Only the highest quality, no doubt about it"
      />
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