import Toggle from './components/Toggle';
import VideoSlider from './components/Slider/VideoSlider';
import Portfolio from './components/Portfolio/Portfolio';
import { SliderData } from './components/Slider/SliderData';
import About from './components/About/About';

function App() {
  return (
    <>
      <VideoSlider slides={SliderData} />
      <Toggle />
      <Portfolio />
      <About />
    </>
  )
}

export default App;
