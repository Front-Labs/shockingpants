import './contact.scss'
import Modal from './Modal'

const Contact = () => {

  return (
    <section id="contact" style={{
      backgroundImage: "url(images/contact2.jpg)"
    }}>
      <Modal
          quote="'Mark is a skilled pitch editor'"
          popup="He makes something out of nothing, give him a script and he will create a dope video for your pitch"
        />
        <Modal
          quote="'I am a real family man'"
          popup="I'm blessed with a beautful wife and two wonderful kids, they laugh at me 'cause I'm convinced aliens visit earth on regular basis"
        />
        <Modal
          quote="'Editor with an eye for detail'"
          popup="Mark has a good feel for pace, dynamics and spinning a story'"
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