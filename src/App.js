import Navbar from "./components/Navbar/Navbar";
import Featured from "./components/Featured/Featured";
import Portfolio from "./components/Portfolio/Portfolio";
// import Studio from './components/Studio/Studio';
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Featured />
      <Portfolio />
      {/* <Studio /> */}
      <Contact />
    </>
  );
}

export default App;
