import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { Landing } from "./components/Landing/Landing";
import { Portfolio } from "./components/Portfolio/Portfolio";



function App() {
  return (
    <div className="app-wrap h-100">
      <Landing />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
