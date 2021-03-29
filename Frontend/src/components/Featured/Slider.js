import { useState, useEffect } from "react"
import './Slider.css'
import Card from './Cards/Card'
import ReactPlayer from 'react-player/vimeo'

export default function VideoSlider() {
	const [current, setCurrent] = useState(0)
	const [featureData, setFeatureData] = useState([])

	useEffect(() => {
		fetch('http://localhost:3001/featured').then(response => response.json())
			.then(featureData => {
				setFeatureData(featureData)
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
					<div key={index} className={`featured-item ${index === current ? 'active' : ''}`}>
						<ReactPlayer
							className='player'
              width='110%'
              height='110%'
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
					/>
				)
			})}
		</section>
	)
}