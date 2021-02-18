import React, { useState, useEffect } from "react";
import Vimeo from '@u-wave/react-vimeo';
import { sliderData } from './sliderData';
import CardProgress from '../Progress/CardProgress'
import './VideoSlider.css'
import Card from '../Cards/Card'

const VideoSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current === length - 1 ? 0 : current + 1);
      //Featured Slide Transition
    }, 10000);
    return () => clearInterval(interval);
  });
  return (

    <section id='slider'>
      <div className="logo-mark">
        <img src="images/Post-Mark.png" alt="logo" />
      </div>

      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
                <Vimeo
                  video={slide.videoId}
                  responsive
                  background
                />
            )
            }
          </div>
        )
      })}
      <div className="cards">
        {sliderData.map((slide, index) => {
          return (
            <Card
              title={slide.title}
              description={slide.description}
              active={index === current}
            />
          )
        })}
      </div>
    </section >
  );
};

export default VideoSlider;

