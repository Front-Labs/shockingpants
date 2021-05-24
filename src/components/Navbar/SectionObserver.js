import { useEffect, useState, useRef } from "react";
import { useMediaQuery } from "react-responsive";
const sections = document.querySelectorAll("section");


// export default function SectionObserver({ position, quote, description }) {new IntersectionObserver(function (entries, Observer) {
//   entries.forEach((entry) => {
//     console.log(entry);
//   });
//   return (

//   )

// }, options);

// sections.forEach((section) => {
//     SectionObserver.observe(section);
//   });

// export default SectionObserver;

export default function ContactObserver({ sections }) {

  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();
  useEffect(() => {
    
    const observer = new IntersectionObserver((entries, options) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  });
  return (
    <div
      ref={domRef}
      className={`fade-in-section ${position} ${isVisible ? "is-visible" : ""}`}
    >
      <h3>{quote}</h3>
      <span>{description}</span>
    </div>
  );
}

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.2
};