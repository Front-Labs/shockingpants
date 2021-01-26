import React from 'react';
import './SliderJS.css';

function SliderJS() {

  const slideshowImages = document.querySelectorAll('.slideshow-img');
  const nextImageDelay = 5000;
  let currentImageCounter = 0;
    console.log(slideshowImages[0]);
  slideshowImages[currentImageCounter].style.opacity = 1;

  setInterval(nextImage, nextImageDelay);

  function nextImage() {
    slideshowImages[currentImageCounter].style.zIndex = -2;
    const tempCounter = currentImageCounter;
    setTimeout(() => {
      slideshowImages[tempCounter].style.opacity = 0
    }, 1000);
    currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;
    slideshowImages[currentImageCounter].style.opacity = 1;
    slideshowImages[currentImageCounter].style.zIndex = -1
  };
  return (
    <div className="slideshow">
        <div className="slideshow-img" id="1"></div>
        <div className="slideshow-img" id="2"></div>
        <div className="slideshow-img" id="3"></div>
        <div className="slideshow-img" id="4"></div>
        <div className="slideshow-img" id="5"></div> 
    </div>
  )
};

export default SliderJS;