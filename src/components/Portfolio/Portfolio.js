import React, {useState} from 'react';
import './Portfolio.css';
import Vimeo from '@u-wave/react-vimeo';
// import Glitchify from 'react-glitchify';
// import GlitchText from 'react-glitch-effect/core/GlitchText';

function Portfolio () {
    // const [open, setOpen] = useState(false);
    return (
        <section id="portfolio1" className="portfolio-page">
                <div className="title">
                    <Vimeo 
                    video='511153244'
                    responsive='true'
                    autopause='true'
                    // autoplay='true'
                    muted='true'
                    quality='auto'
                    /><a className="glitch">
                        <span aria-hidden="true">You don't own me</span>
                        You don't own me<span aria-hidden="true">You don't own me</span>
                      </a>
                </div>
                <div className="title">
                <Vimeo 
                    video='511146982'
                    responsive='true'
                    autopause='true'
                    // autoplay='true'
                    muted='true'
                    quality='auto'
                    /><a className="glitch">
                        <span aria-hidden="true">Huawei: Rethink possibilities</span>
                        Huawei: Rethink possibilities<span aria-hidden="true">Huawei: Rethink possibilities</span>
                      </a>
                </div>
                <div className="title">
                <Vimeo 
                    video='511150620'
                    responsive='true'
                    autopause='true'
                    // autoplay='true'
                    muted='true'
                    quality='auto'
                    /><a className="glitch">
                        <span aria-hidden="true">ABN AMRO: The dark side of Money</span>
                        ABN AMRO: The dark side of Money<span aria-hidden="true">ABN AMRO: The dark side of Money</span>
                      </a>
                </div>
                <div className="title">
                <Vimeo 
                    video='511149009'
                    responsive='true'
                    autopause='true'
                    // autoplay='true'
                    muted='true'
                    quality='auto'
                    /><a className="glitch">
                        <span aria-hidden="true">Mazda: MX-30 Designer Review</span>
                        Mazda: MX-30 Designer Review<span aria-hidden="true">Mazda: MX-30 Designer Review</span>
                      </a>
                </div>
                <div className="title">
                <Vimeo 
                    video='511149224'
                    responsive='true'
                    autopause='true'
                    // autoplay='true'
                    muted='true'
                    quality='auto'
                    /><a className="glitch">
                        <span aria-hidden="true">Foot Locker // Di-Meh</span>
                        Foot Locker // Di-Meh<span aria-hidden="true">Foot Locker // Di-Meh</span>
                      </a>
                </div>
            
        </section>
      
    );
}


export default Portfolio;
