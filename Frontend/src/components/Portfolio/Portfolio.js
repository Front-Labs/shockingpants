import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Portfolio.css'

export default function Portfolio() {
  const [portfolioData, setPortfolioData] = useState([])
  useEffect(() => {
    fetch('http://localhost:3001/portfolio').then(response => response.json())
      .then(portfolioData => {
        setPortfolioData(portfolioData)
      }).catch(error => {
        console.log(error.message)
      })
  }, [])

  return (
    <section id="portfolio" className="portfolio-page" >
      {portfolioData.map((video, index) => {
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