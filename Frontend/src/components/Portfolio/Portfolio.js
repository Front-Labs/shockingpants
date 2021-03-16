import { useState, useEffect } from 'react'
import './Portfolio.css'
import { Link } from 'react-router-dom'

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
    <section id="portfolio" className="portfolio-page" >
      {data.map((video, index) => {
        return (
          <div
            key={index}
            className="title"
            style={{
              backgroundImage: `url(${video.pictures.sizes[5].link})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}>
            <Link to={{
              pathname:   "/embeddedplayer",
              state:      { link : `${video.uri}` }
            }} className="glitch">
              <span aria-hidden="true">{video.name}</span>
              {video.name}
              <span aria-hidden="true">{video.name}</span>
            </Link>
          </div>
        )
      })}
    </section>
  )
}