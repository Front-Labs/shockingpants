import './VideoSlider.css';
import './Portfolio.css';
import Toggle from './Toggle';
import VideoSlider from './VideoSlider';
import Portfolio from './Portfolio';
import { SliderData } from './SliderData';

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
