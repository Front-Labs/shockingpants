import Toggle from './components/Toggle';
import VideoSlider from './components/Slider/VideoSlider';
import Portfolio from './components/Portfolio/Portfolio';
import { sliderData } from './components/Slider/sliderData';
import Contact from './components/Contact/Contact';
// import EmbeddedPlayer from './components/Embeddedplayer/Embeddedplayer';

function App() {
  return (
    <>
      <VideoSlider slides={sliderData} />
      <Toggle />
      <Portfolio />
      <Contact />
      {/* <EmbeddedPlayer /> */}
    </>
  )
}

export default App;
