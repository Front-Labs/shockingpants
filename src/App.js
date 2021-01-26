import './App.css';
import Toggle from './Toggle'
import VideoSlider from './VideoSlider';
import { SliderData } from './SliderData';

function App() {
    return (
        <>
            <VideoSlider slides={SliderData} />
            <Toggle />
        </>
    )
}

export default App;
