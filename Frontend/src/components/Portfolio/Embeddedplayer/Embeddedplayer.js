import { useLocation } from "react-router-dom"
import './embeddedplayer.css'

const EmbeddedPlayer = () => {
  const location = useLocation()
  let url = `https://player.vimeo.com${location.state.link}`
  url = url.replace('/videos/', '/video/')

  return (
    <section id="embeddedplayer">
      <a href="/#portfolio">
        <div className="times">
          <img src="images/times-circle-regular.svg" alt="times" />
        </div>
      </a>
      <iframe
        title={url}
        src={url}
        responsive
        frameborder="0"
        allowfullscreen
      ></iframe>
      <div className="player-text">
        <p>title</p>
        <p>description</p>
      </div>
    </section>
  );
}

export default EmbeddedPlayer