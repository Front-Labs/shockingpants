import { useState, useEffect } from 'react'
import './Portfolio.css'
import { Link } from 'react-router-dom'
import { portfolioData } from './portfolioData.js'

export default function Portfolio() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('http://localhost:3001/').then(response => response.json())
      .then(data => {
        setData(data)
      }).catch(error => {
        console.log(error.message)
      })
  }, [])

  return (
    <section id="portfolio1" className="portfolio-page" >

      {
        data.map((video, index) => {
            
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
                {video.name}
                </span>
                {video.name}
                <span aria-hidden="true">
                {video.name}
                </span>
              </Link>

            </div>
          )
        })
      }
    </section>
  )

}