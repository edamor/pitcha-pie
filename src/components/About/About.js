import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useLocation } from "react-router-dom";
import { useNavContext } from "../../contexts/NavContext/NavContext";
import { AboutHeader } from "./AboutHeader";
import { Hexagons } from "./Hexagons"
import { Skills } from "./Skills"


const style = {
  position: "absolute",
  top: "50vh",
  zIndex: -1
}

export const About = () => {

  const { aboutRef, setActiveNav } = useNavContext();
  const [ref, inView] = useInView();
  const location = useLocation();

  useEffect(() => {
    if (inView) {
      setActiveNav({
        navAbout: true
      })
    }
  }, [inView, setActiveNav])

  useEffect(() => {
    if (location.state === "about") {
      aboutRef.current.scrollIntoView({behavior: "smooth"})
    }
  }, [aboutRef, location.state])

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




