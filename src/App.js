import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { Landing } from "./components/Landing/Landing";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { NavContextProvider } from "./contexts/NavContext/NavContext";



function App() {
  return (
    <NavContextProvider>
      <Landing />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </NavContextProvider>
  );
}

export default App;
