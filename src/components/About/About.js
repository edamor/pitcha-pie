import { Hexagons } from "./Hexagons"
import { Skills } from "./Skills"



export const About = () => {

  return (
    <section id="about" className="about-page">
      <div className="container flex">
        <div className="header animated slide-in-left">
          ABOUT
        </div>
        <div className="header-bar animated slide-in-left"></div>

        <Hexagons />

        <Skills />
        
      </div>
    </section>
  )
}