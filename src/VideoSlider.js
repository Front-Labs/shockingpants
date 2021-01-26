import React, {useState, useEffect} from "react";
import {SliderData} from './SliderData';

const VideoSlider = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(current === length-1 ? 0 : current + 1);
            //Featured Slide Transition
        }, 5000);
        return () => clearInterval(interval);
    });
    return (
        <section className='slider'>
            {SliderData.map((slide, index) => {
                return (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key = {index}
                    >
                        {index === current && (
                            // <iframe
                            //     title={index} src={slide.url} className='video' frameBorder="0" allow="autoPlay ;fullscreen" allowFullScreen
                            // />
                            <video
                                src={slide.url} className='video' autoPlay muted
                            />
                        )}
                    </div>
                )
            })}
        </section>
    );
};

export default VideoSlider;
