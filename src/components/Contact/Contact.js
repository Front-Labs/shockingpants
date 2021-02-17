import React from "react"
import './contact.css'

const Contact = () => {
  // const about = document.getElementById('about')
  // const colorProfile = document.getElementById('about-color')
  // const startFade = about.offsetTop
  // window.addEventListener('scroll', function () {
  //   if (window.pageYOffset > startFade) {
  //     let opacity = ((window.pageYOffset / (startFade)) - 1)
  //     console.log(opacity)
  //     colorProfile.style.opacity = `${opacity}`
  //   }
  // }, false)
  return (
    <section id="contact">
      <div className="contact-background" id="contact-bw" style={{ backgroundImage: "url(images/contact.jpg)" }}></div>
      <div className="contact-background" id="contact-col" style={{ backgroundImage: "url(images/contact-mask.png)" }}></div>
    </section>
  )
}

export default Contact