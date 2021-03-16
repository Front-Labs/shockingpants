import { useLocation } from "react-router-dom"
import './Embeddedplayer.css'

const EmbeddedPlayer = () => {
  const location = useLocation()
  const link = location.state.link
  let url = `https://player.vimeo.com${link}` 
  url = url.replace('/videos/','/video/')

    return (
      <section id="embeddedplayer-container">
       <a href="/#portfolio">
          <div className="times">
            <img src="images/times-circle-regular.svg" alt="times" />
          </div>
        </a>
        <ul className="player">
          <li className="video-link"> 
            <iframe
              title={link}
              src={url}
              // width="1280"
              // height="720"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </li>
        </ul>
      </section>
    );
  }

  export default EmbeddedPlayer