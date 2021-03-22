import { useState, useEffect } from "react"
// import CardProgress from './Progress/CardProgress'
import './VideoSlider.css'
import Card from './Cards/Card'
import ReactPlayer from 'react-player/vimeo'

export default function VideoSlider() {
  const [current, setCurrent] = useState(0)
  const [featureData, setFeatureData] = useState([])
  // const [videoId, setVideoId] = useState('')


  useEffect(() => {
    fetch('http://localhost:3001/featured').then(response => response.json())
      .then(featureData => {
        setFeatureData(featureData)
        // setVideoId('https://player.vimeo.com' + featureData[0].uri.replace('/videos/', '/video/'))
      }).catch(error => {
        console.log(error.message)
      })
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current === featureData.length - 1 ? 0 : current + 1)
    }, 10000);
    return () => clearInterval(interval)
  })

  return (
    <section id='slider'>
      <div className="logo-mark">
        <img src="images/Post-Mark.png" alt="logo" />
      </div>
      {featureData.map((video, index) => {
        let url = 'https://player.vimeo.com' + video.uri.replace('/videos/', '/video/')
        return (
          <div className={`player-wrapper ${index === current ? 'active' : ''}`}>
            <ReactPlayer
              key={index}
              className='player'
              url={url}
              config={{
                vimeo: {
                  playerOptions: {
                    background: true,
                    quality: "720p",
                    responsive: true,
                    dnt: true,
                    loop: true
                  }
                }
              }}
            />
          </div>
        )
      })}
      <div className="cards">
        {featureData.map((card, index) => {
          return (
            <Card
              title={card.name}
              active={index === current}
              key={index}
            />
          )
        })}
      </div>
    </section>
  )
}