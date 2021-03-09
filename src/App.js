import Toggle from './components/Navbar/Toggle';
import VideoSlider from './components/Slider/VideoSlider';
import Portfolio from './components/Portfolio/Portfolio';
import { sliderData } from './components/Slider/sliderData';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <VideoSlider slides={sliderData} />
      <Toggle />
      <Portfolio />
      <Contact />
    </>
  )
}

export default App;
