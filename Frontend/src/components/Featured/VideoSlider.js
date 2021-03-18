import { useState, useEffect } from "react"
// import CardProgress from './Progress/CardProgress'
import './VideoSlider.css'
import Card from './Cards/Card'
import Player from '@vimeo/player'

export default function VideoSlider() {
  const [player, setPlayer] = useState(null)
  const [current, setCurrent] = useState(0)
  const [featuredData, setFeaturedData] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:3001/featured').then(response => response.json())
      .then(featuredData => {
        setFeaturedData(featuredData)
      }).catch(error => {
        console.log(error.message)
      })
  }, [])

  const length = featuredData.length

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current === length - 1 ? 0 : current + 1)
    }, 10000);
    return () => clearInterval(interval)
  })

  useEffect((featuredData) => {
    let videoId = featuredData[0].uri.replace('/videos/', '')
    setPlayer(new Player('player', {
      id: videoId,
      quality: "360p",
      background: true,
      responsive: true
    }))
  }, [])

  useEffect((featuredData, player, current) => {
    let videoId = featuredData[current].uri.replace('/videos/', '')
    if (player) {
      player.loadVideo(videoId)
    }
  }, [featuredData, player, current])

  return (
    <section id='slider'>

      <div className="logo-mark">
        <img src="images/Post-Mark.png" alt="logo" />
      </div>

    <div id="player"></div>

      <div className="cards">
        {featuredData.map((slide, index) => {
          return (
            <Card
              title={slide.name}
              // description={slide.description}
              active={index === current}
              key={index}
            />
          )
        })}
      </div>
    </section>
  )
}