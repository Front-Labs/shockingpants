import { useState, useEffect } from 'react'
import './Portfolio.css'
import { Link } from 'react-router-dom'
import { portfolioData } from './portfolioData.js'

export default function Portfolio() {
  // const [videoTitles, setVideoTitles] = useState([])

  fetch('http://localhost:3001/')
    .then(response => {
      // const subjects = [];
      console.log(response)
      // setVideoTitles(subjects)
    })
  // .catch(error => setVideoTitles([]));

  return (
    <section id="portfolio1" className="portfolio-page">

      {portfolioData.map((tab, index) => {

        // let iframe = document.querySelector('title')
        // let player = new Vimeo.Player(iframe)
        // player.getVideoTitle().then(function (title) {
        //   console.log('title:', title)
        // })
        // setPlayer(new Player( index, {
        //   id: tab.url,
        //   quality: "360p",
        //   responsive: true,
        //   muted: true,
        //   dnt: true,
        //   controls: false
        // }))
        return (
          <div id={index} key={index} className="title">

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
  )
}