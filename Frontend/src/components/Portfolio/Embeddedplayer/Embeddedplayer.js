import './Embeddedplayer.css'

const EmbeddedPlayer = () => {
    return (
      <section id="embeddedplayer-container">
       <a href="/#portfolio1">
          <div className="times">
            <img src="images/times-circle-regular.svg" alt="times" />
          </div>
        </a>
        <ul className="player">
          <li className="video-link"> 
            <iframe title="vimeo-player" src="https://player.vimeo.com/video/511153244" width="854" height="480" frameborder="0" allowfullscreen></iframe>
          </li>
        </ul>
      </section>
    );
  }

  export default EmbeddedPlayer