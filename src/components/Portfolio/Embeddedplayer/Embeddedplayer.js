import { useLocation } from "react-router-dom";
import "./embeddedplayer.scss";
import { StyledWrapper } from "../../Navbar/style";

const EmbeddedPlayer = () => {
  const location = useLocation();
  let url = `https://player.vimeo.com${location.state.link}`;
  url = url.replace("/videos/", "/video/");
  const title = location.state.title;
  let description = location.state.description;
  if (description === "null") {
    description = "";
  }

  return (
    <section id="embedded-player">
      <StyledWrapper>
        <div className="studio-logo">
          <img
            src="images/Post-Mark-Black.png"
            alt="logo"
            className="img-black"
          />
          <img
            src="images/Post-Mark-White.png"
            alt="logo"
            className="flicker-image img-white"
          />
          <img
            src="images/Post-Mark-White.png"
            alt="logo"
            className="flicker-image-alternate img-white"
          />
        </div>
        <div className="page-indicator flicker-image-text">
          <p>studio</p>
        </div>
      </StyledWrapper>
      <a href="/#portfolio">
        <div className="times">
          Î
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
};

export default EmbeddedPlayer;
