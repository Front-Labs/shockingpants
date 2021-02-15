import Toggle from './components/Toggle';
import VideoSlider from './components/Slider/VideoSlider';
import Portfolio from './components/Portfolio/Portfolio';
import { SliderData } from './components/Slider/SliderData';

function App() {
  return (
    <>
      <VideoSlider slides={SliderData} />
      <Toggle />
      <Portfolio />
    </>
  )
}

export default App;
