import { useState, useEffect } from "react"
// import CardProgress from './Progress/CardProgress'
import './VideoSlider.css'
import Card from './Cards/Card'
import Player from '@vimeo/player'

export default function VideoSlider() {
  const [player, setPlayer] = useState(null)
  const [current, setCurrent] = useState(0)
  const [featureData, setFeatureData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/featured').then(response => response.json())
      .then(featureData => {
        setFeatureData(featureData)
        setPlayer(new Player('player', {
          id: featureData[0].uri.replace('/videos/', ''),
          quality: "360p",
          background: true,
          responsive: true
        }))
      }).catch(error => {
        console.log(error.message)
      })
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current === featureData.length - 1 ? 0 : current + 1)
    }, 5000);
    return () => clearInterval(interval)
  })

  useEffect(() => {
    if (player) {
      player.loadVideo(featureData[current].uri.replace('/videos/', ''))
    }
  }, [current])

  return (
    <section id='slider'>
      <div className="logo-mark">
        <img src="images/Post-Mark.png" alt="logo" />
      </div>

      <div id="player"></div>

      <div className="cards">
        {featureData.map((slide, index) => {
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