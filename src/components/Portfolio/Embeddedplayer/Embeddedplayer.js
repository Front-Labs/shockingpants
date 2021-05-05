import { useLocation } from "react-router-dom"
import './embeddedplayer.scss'

const EmbeddedPlayer = () => {
  const location = useLocation()
  let url = `https://player.vimeo.com${location.state.link}`
  url = url.replace('/videos/', '/video/')
  const title = location.state.title
  let description = location.state.description
  if (description === 'null') { description = '' }

  return (
    <section id="embedded-player">
      <div className="studio-logo">
        <img src="images/Post-Mark-Black.png" alt="logo" />
        <img src="images/Post-Mark-White.png" alt="logo" className="flicker-image" />
        <img src="images/Post-Mark-White.png" alt="logo" className="flicker-image-alternate" />
      </div>
      <a href="/#portfolio">
        <div className="times">
          <img src="images/times-circle-regular.svg" alt="times" />
        </div>
      </a>
      <div className="embedded-player">
        <iframe
          title={url}
          src={url}
          responsive
          frameborder="0"
          allowfullscreen
        ></iframe>
        <div className="player-text">
          <p>{title}</p>
          <br></br>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
}

export default EmbeddedPlayer