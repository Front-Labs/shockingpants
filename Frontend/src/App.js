import Toggle from './components/Navbar/Toggle';
import Featured from './components/Featured/Slider';
import Portfolio from './components/Portfolio/Portfolio';
import Studio from './components/Studio/Studio';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <Featured />
      <Toggle />
      <Portfolio />
      <Studio />
      <Contact />
    </>
  )
}

export default App;
