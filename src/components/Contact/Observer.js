import { useEffect, useState, useRef } from 'react';

export default function Observer({ position, quote, description }) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      ref={domRef}
      className={`fade-in-section ${position} ${isVisible ? 'is-visible' : ''}`}
    >
      <h3>{quote}</h3>
      <span>{description}</span>
    </div>
  );
}