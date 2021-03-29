import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './portfolio.css'

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
    <section id="portfolio">
      {portfolioData.map((video, index) => {
        return (
          <div
            key={index}
            className="project"
            style={{
              backgroundImage: `url(${video.pictures.sizes[5].link})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}>
            <Link to={{
              pathname:   "/embeddedplayer",
              state:      {
                link : `${video.uri}`,
                title: `${video.name}`,
                description: `${video.description}`
              }
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