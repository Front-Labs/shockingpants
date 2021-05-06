import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './portfolio.scss'

export default function Portfolio() {
  const [portfolioData, setPortfolioData] = useState([])
  useEffect(() => {
    fetch('https://postmark.nl:3001/portfolio').then(response => response.json())
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
          <Link
            key={index}
            to={{
              pathname: "/embeddedplayer",
              state: {
                link: `${video.uri}`,
                title: `${video.name}`,
                description: `${video.description}`
              }
            }}>
            <div
              className="project"
              style={{
                backgroundImage: `url(${video.pictures.sizes[5].link})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}>
              <span aria-hidden="true">{video.name}</span>
              <span aria-hidden="true">{video.name}</span>
            </div>
          </Link>
        )
      })}
    </section>
  )
}