import Toggle from './components/Navbar/Toggle';
import VideoSlider from './components/Slider/VideoSlider';
import Portfolio from './components/Portfolio/Portfolio';
import { sliderData } from './components/Slider/sliderData';
import Contact from './components/Contact/Contact';
import { portfolioData } from './components/Portfolio/portfolioData';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch(`http://localhost:3001`)
      .then(async response => {
        const titles = [];
        (await response.json()).filter(item => {
          const subjectIndex = subjects.findIndex(x => x.title === item.Subject);
  return (
    <>
      <VideoSlider slides={sliderData} />
      <Toggle />
      <Portfolio portfolio={portfolioData}/>
      <Contact />
    </>
  )
}

export default App;
