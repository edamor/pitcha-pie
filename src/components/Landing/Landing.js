import { motion } from "framer-motion";
import { useNavContext } from "../../contexts/NavContext/NavContext"
import { LandingPageBg } from "../Canvas/Canvas";
import { Nav } from "../Nav/Nav"
import { ArrowDown } from "../SvgIcons/SvgIcons";
import "./landing.css"

const textMotion = {
  rest: {
    rotateZ: -90,
    translateY: 0,
    scale: 1
  },
  hover: {
    rotateZ: 0,
    translateY: 3,
    scale: 1.15,
    transition: {
      duration: 0.4
    }
  }
};

export const Landing = () => {

  const { landingRef, portfolioRef } = useNavContext();

  function viewProjects() {
    portfolioRef.current.scrollIntoView({behavior: "smooth"})
  }

  return (
    <section id="home" className="landing-page bg-landing flex" ref={landingRef}>
      <LandingPageBg />
      <div className="flex">
        <div className="waypoint animated slide-in-left text">
          Hello, I'm <span className="highlight">Ed Louise Amor</span>.
          <br />
          I'm a full-stack web developer.
        </div>
        <motion.div 
          className="button waypoint animated slide-in-right" 
          style={{ textAlign: "center" }} 
          onClick={viewProjects}
          initial="rest" whileHover="hover" animate="rest"
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between"
            }}
          >
            <span
              style={{
                marginRight: "0.8rem"
              }}
            >
              View my work
            </span>
            <motion.span
              variants={textMotion}
            >
              <ArrowDown />
            </motion.span>
          </div>
        </motion.div>
        <Nav />
      </div>
    </section>
  )
}