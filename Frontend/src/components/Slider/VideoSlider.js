import React, { useState, useEffect } from "react"
import { sliderData } from './sliderData'
// import CardProgress from './Progress/CardProgress'
import './VideoSlider.css'
import Card from './Cards/Card'
import Player from '@vimeo/player'

const VideoSlider = ({ slides }) => {
  const [player, setPlayer] = useState(null)
  const [current, setCurrent] = useState(0)

  const length = slides.length
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current === length - 1 ? 0 : current + 1)
      //Featured Slide Transition
    }, 10000);
    return () => clearInterval(interval)
  })

  useEffect(() => {
    setPlayer(new Player('player', {
      id: slides[0].videoId,
      quality: "360p",
      background: true,
      responsive: true
    })) 
  }, [])

  useEffect(() => {
    if (player) {
      player.loadVideo(slides[current].videoId)
    }
  }, [current])

  return (
    <section id='slider'>

      <div className="logo-mark">
        <img src="images/Post-Mark.png" alt="logo" />
      </div>

    <div id="player"></div>

      <div className="cards">
        {sliderData.map((slide, index) => {
          return (
            <Card
              title={slide.title}
              description={slide.description}
              active={index === current}
            />
          )
        })}
      </div>
    </section>
  )
}

export default VideoSlider
