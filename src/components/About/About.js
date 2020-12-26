import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useNavContext } from "../../contexts/NavContext/NavContext";
import { AboutHeader } from "./AboutHeader";
import { Hexagons } from "./Hexagons"
import { Skills } from "./Skills"


const style = {
  position: "absolute",
  top: "25vh",
  zIndex: -1
}

export const About = () => {

  const { aboutRef, setActiveNav } = useNavContext();

  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      setActiveNav({
        navAbout: true
      })
    }
  }, [inView, setActiveNav])

  return (
    <section id="about" className="about-page" ref={aboutRef} >
      <div ref={ref} style={style} />
      <div className="container flex" >    
        <AboutHeader />
        <Hexagons />
        <Skills />
      </div>
    </section>
  )
}




