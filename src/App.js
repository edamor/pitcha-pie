import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { Landing } from "./components/Landing/Landing";
import { Portfolio } from "./components/Portfolio/Portfolio";
import SmoothScroll from "./components/SmoothScroll/SmoothScroll";
import { NavContextProvider } from "./contexts/NavContext/NavContext";



function App() {
  return (
    <NavContextProvider>
      <div className="app-wrap h-100">
        <SmoothScroll>
          <Landing />
          <About />
          <Portfolio />
          <Contact />
          <Footer />
        </SmoothScroll>
      </div>
    </NavContextProvider>
  );
}

export default App;
