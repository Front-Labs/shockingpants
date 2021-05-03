import { useState, useEffect } from "react"
import './featured.scss'
import Card from './Cards/Card'
import ReactPlayer from 'react-player/vimeo'

export default function Featured() {
  const [current, setCurrent] = useState(0)
  const [featureData, setFeatureData] = useState([])
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    fetch('http://www.postmark.nl:3001/featured').then(response => response.json())
      .then(featureData => {
        setFeatureData(featureData)
      }).catch(error => {
        console.log(error.message)
      })
    return ([])
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(progress + 1)
      if ((progress + 1) % 100 === 0) {
        setCurrent(current === featureData.length - 1 ? 0 : current + 1)
      }
    }, 100)
    return () => clearInterval(interval)
  })

  return (
    <section id='featured'>
      {featureData.map((video, index) => {
        let url = 'https://player.vimeo.com' + video.uri.replace('/videos/', '/video/')
        return (
          <div key={index} className={`featured-item ${index === current ? 'active' : ''}`}>
            <ReactPlayer
              width='100%'
              height='100%'
              url={url}
              config={{
                vimeo: {
                  playerOptions: {
                    background: true,
                    quality: "720p",
                    dnt: true,
                    loop: true
                  }
                }
              }}
            />
          </div>
        )
      })}
      {featureData.map((card, index) => {
        return (
          <Card
            title={card.name}
            active={index === current}
            key={index}
            progress={progress}
          />
        )
      })}
    </section>
  )
}