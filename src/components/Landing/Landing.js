import { Nav } from "../Nav/Nav"
import "./landing.css"


export const Landing = () => {


  return (
    <section id="home" className="landing-page bg-landing flex">
      <div className="flex">
        <div className="text">
          Hello, I'm <span className="highlight">Ed Louise Amor</span>
          <br />
          I'm a full-stack web developer.
        </div>
        <div className="button">
          View my work
          <i className="mdi mdi-arrow-right"></i>
        </div>
        <Nav />
      </div>
    </section>
  )
}