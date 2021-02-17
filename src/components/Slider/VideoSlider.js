import React, { useState, useEffect } from "react";
import Vimeo from '@u-wave/react-vimeo';
import { SliderData } from './SliderData';
import './VideoSlider.css'

const VideoSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current === length - 1 ? 0 : current + 1);
      //Featured Slide Transition
    }, 5000);
    return () => clearInterval(interval);
  });
  return (
    <section className='slider'>
      <div className="logo-mark">
        <img src="images/Post-Mark.png" alt="logo" />
      </div>

      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <Vimeo
                video={slide.videoId}
                responsive='true'
                background='true'
                quality='auto'
              />
            )}
          </div>
        )
      })}
    </section>
  );
};

export default VideoSlider;
