import React, {useState} from 'react';
import './Portfolio.css';
import Vimeo from '@u-wave/react-vimeo';
// import Glitchify from 'react-glitchify';
// import GlitchText from 'react-glitch-effect/core/GlitchText';

function Portfolio () {
    // const [open, setOpen] = useState(false);
    return (
        <section id="portfolio1" className="portfolio-page">
            <div className="backgrounds">
                <div className="title">
                    <Vimeo 
                    video='511153244'
                    responsive
                    autopause
                    // autoplay
                    muted
                    quality='auto'
                    /><a className="glitch">You don't own me</a>
                </div>
                <div className="title">
                <Vimeo 
                    video='511146982'
                    responsive
                    autopause
                    // autoplay
                    muted
                    quality='auto'
                    /><a>Huawei: Rethink possibilities</a>
                </div>
                <div className="title">
                <Vimeo 
                    video='511150620'
                    responsive
                    autopause
                    // autoplay
                    muted
                    quality='auto'
                    /><a>ABN AMRO: The dark side of Money</a>
                </div>
                <div className="title">
                <Vimeo 
                    video='511149009'
                    responsive
                    autopause
                    // autoplay
                    muted
                    quality='auto'
                    /><a>Mazda: MX-30 Designer Review</a>
                </div>
                <div className="title">
                <Vimeo 
                    video='511149224'
                    responsive
                    autopause
                    // autoplay
                    muted
                    quality='auto'
                    /><a>Foot Locker // Di-Meh</a>
                </div>
            </div>
        </section>
    );
}


export default Portfolio;
