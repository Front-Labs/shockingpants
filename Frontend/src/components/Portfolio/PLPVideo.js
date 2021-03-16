// import React, { Component } from 'react';
// import Vimeo from '@u-wave/react-vimeo';
// import './Portfolio.css';

// export default class PLPVideo extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             mute: true,
//             paused: true,
//             // background: false,
//             loop: true,
//             responsive: true,
//             // muted: true,
//             controls: false
//         }

//         this.handleMouseEnter = this.handleMouseEnter.bind(this);
//         this.handleMouseLeave = this.handleMouseLeave.bind(this);
//     }

//     handleMouseEnter() {
//         this.setState({ ...this.state, paused: false });
//     }

//     handleMouseLeave() {
//         this.setState({ ...this.state, paused: true });
//     }

//     render() {
//         return (
//             <section id="portfolio" className="portfolio-page">
//                 <div className="title" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} className="video-wrapper">
//                     <Vimeo
//                         {...this.state}
//                         video='511153244'
//                         start={0}
//                     />
//                     <a href="https://vimeo.com/511153244" target="_blank" rel="noopener noreferrer" className="glitch">
//                         <span aria-hidden="true">You don't own me</span>
//                         You don't own me<span aria-hidden="true">You don't own me</span>
//                       </a>
//                 </div>
//                 <div className="title" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} className="video-wrapper">
//                     <Vimeo
//                         {...this.state}
//                         video='511146982'
//                         start={0}
//                     />
//                     <a href="https://vimeo.com/511146982" target="_blank" rel="noopener noreferrer" className="glitch">
//                         <span aria-hidden="true">Huawei: Rethink possibilities</span>
//                         Huawei: Rethink possibilities<span aria-hidden="true">Huawei: Rethink possibilities</span>
//                       </a>
//                 </div>
//                 <div className="title" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} className="video-wrapper">
//                     <Vimeo
//                         {...this.state}
//                         video='511150620'
//                         start={0}
//                     />
//                     <a href="https://vimeo.com/511150620" target="_blank" rel="noopener noreferrer" className="glitch">
//                         <span aria-hidden="true">ABN AMRO: The dark side of Money</span>
//                         ABN AMRO: The dark side of Money<span aria-hidden="true">ABN AMRO: The dark side of Money</span>
//                       </a>
//                 </div>
//                 <div className="title" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} className="video-wrapper">
//                     <Vimeo
//                         {...this.state}
//                         video='511149009'
//                         start={0}
//                     />
//                     <a href="https://vimeo.com/511149009" target="_blank" rel="noopener noreferrer" className="glitch">
//                         <span aria-hidden="true">Mazda: MX-30 Designer Review</span>
//                         Mazda: MX-30 Designer Review<span aria-hidden="true">Mazda: MX-30 Designer Review</span>
//                       </a>
//                 </div>
//                 <div className="title" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} className="video-wrapper">
//                     <Vimeo
//                         {...this.state}
//                         video='511149224'
//                         start={0}
//                     />
//                     <a href="https://vimeo.com/511149224" target="_blank" rel="noopener noreferrer" className="glitch">
//                         <span aria-hidden="true">Foot Locker // Di-Meh</span>
//                         Foot Locker // Di-Meh<span aria-hidden="true">Foot Locker // Di-Meh</span>
//                       </a>
//                 </div>
//             </section>
//         )
//     }
// }