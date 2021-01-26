import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Featured.css";
import { Carousel } from 'react-responsive-carousel';

class Featured extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="http://res.cloudinary.com/daanr37/image/upload/v1610648280/Karlitos%20Way/IMG_0014_2_ayrgsj.jpg" alt=""/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="http://res.cloudinary.com/daanr37/image/upload/v1610648338/Karlitos%20Way/IMG_5443_2_uwzhky.jpg" alt=""/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="http://res.cloudinary.com/daanr37/image/upload/v1609255929/Karlitos%20Way/DSC00292_vidtws.jpg" alt=""/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};

export default Featured;