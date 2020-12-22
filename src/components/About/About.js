import { useNavContext } from "../../contexts/NavContext/NavContext";
import { AboutHeader } from "./AboutHeader";
import { Hexagons } from "./Hexagons"
import { Skills } from "./Skills"




export const About = () => {

  const { aboutRef } = useNavContext();

  return (
    <section id="about" className="about-page" ref={aboutRef} >
      <div className="container flex" >    
        <AboutHeader />
        <Hexagons />
        <Skills />
      </div>
    </section>
  )
}




