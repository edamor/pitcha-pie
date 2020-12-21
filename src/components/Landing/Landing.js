import { useNavContext } from "../../contexts/NavContext/NavContext"
import { Nav } from "../Nav/Nav"
import "./landing.css"


export const Landing = () => {

  const { landingRef, portfolioRef } = useNavContext();

  function viewProjects() {
    portfolioRef.current.scrollIntoView({behavior: "smooth"})
  }

  return (
    <section id="home" className="landing-page bg-landing flex" ref={landingRef}>
      <div className="flex">
        <div className="text">
          Hello, I'm <span className="highlight">Ed Louise Amor</span>
          <br />
          I'm a full-stack web developer.
        </div>
        <div className="button" onClick={viewProjects}>
          <span>
            View my work
            <i className="mdi mdi-arrow-right"></i>
          </span>
        </div>
        <Nav />
      </div>
    </section>
  )
}