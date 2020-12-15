import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { Landing } from "./components/Landing/Landing";
import { Nav } from "./components/Nav/Nav";
import { Portfolio } from "./components/Portfolio/Portfolio";
import SmoothScroll from "./components/SmoothScroll/SmoothScroll";
import { NavContextProvider } from "./contexts/NavContext/NavContext";



function App() {
  return (
    <NavContextProvider>
      <SmoothScroll>
        <Landing />
        <Nav />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </SmoothScroll>
    </NavContextProvider>
  );
}

export default App;
