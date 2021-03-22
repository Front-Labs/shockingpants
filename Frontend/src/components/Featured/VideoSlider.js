import { useState, useEffect } from "react"
// import CardProgress from './Progress/CardProgress'
import './VideoSlider.css'
import Card from './Cards/Card'
import ReactPlayer from 'react-player/vimeo'

export default function VideoSlider() {

  const [featureData, setFeatureData] = useState([])
  const [videoId, setVideoId] = useState('')
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    fetch('http://localhost:3001/featured').then(response => response.json())
      .then(featureData => {
        setFeatureData(featureData)
        setVideoId('https://player.vimeo.com'+featureData[0].uri.replace('/videos/', '/video/'))
      }).catch(error => {
        console.log(error.message)
      })
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current === featureData.length - 1 ? 0 : current + 1)
      setVideoId('https://player.vimeo.com'+featureData[current].uri.replace('/videos/', '/video/'))
    }, 5000);
    return () => clearInterval(interval)
  })

  return (
    <section id='slider'>
      <div className="logo-mark">
        <img src="images/Post-Mark.png" alt="logo" />
      </div>
      <ReactPlayer
        className='player'
        url={videoId}
        config={{
          vimeo: {
            playerOptions: {
              background: true,
              quality: "360p",
              responsive: true
            }
          }
        }}
      />
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