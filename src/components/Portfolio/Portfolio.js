import React, { useState } from 'react';
import './Portfolio.css';
// import Vimeo from '@u-wave/react-vimeo';
import { Link } from 'react-router-dom';
import { portfolioData } from './portfolioData.js';
import Player from '@vimeo/player';

function Portfolio({ portfolio }) {
const [player, setPlayer] = useState(null)

  return (
    <section id="portfolio1" className="portfolio-page">


      {portfolioData.map((tab, index) => {
          
        // let iframe = document.querySelector('title');
        // let player = new Vimeo.Player(iframe);
        // player.getVideoTitle().then(function (title) {
        //   console.log('title:', title);
        // });
        // setPlayer(new Player( index, {
        //   id: tab.url,
        //   quality: "360p",
        //   responsive: true,
        //   muted: true,
        //   dnt: true,
        //   controls: false
        // }))
        return (
          <div id={ index } className="title">
        

            <Link to="/embeddedplayer" className="glitch">
              <span aria-hidden="true">
                You don't own me
                </span>
                  You don't own me
                <span aria-hidden="true">
                You don't own me
                </span>
            </Link>
            
          </div>

        )
      })}

    </section>
  );
}


export default Portfolio;
