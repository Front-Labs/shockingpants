import Navbar from "./components/Navbar/Navbar";
import Featured from "./components/Featured/Featured";
import Portfolio from "./components/Portfolio/Portfolio";
// import Studio from './components/Studio/Studio';
import Contact from "./components/Contact/Contact";
// import Observer from "./components/Navbar/SectionObserver";

function App() {
  return (
    <>
      {/* <Observer /> */}
      <Navbar />
      <Featured />
      <Portfolio />
      {/* <Studio /> */}
      <Contact />
    </>
  );
}

export default App;
