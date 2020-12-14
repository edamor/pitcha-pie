import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer"
import { useNavContext } from "../../contexts/NavContext/NavContext";
import { Hexagons } from "./Hexagons"
import { Skills } from "./Skills"


const variants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.35
    }
  },
  hidden: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.25
    }
  }
}


export const About = () => {

  const { aboutRef } = useNavContext();

  const controls = useAnimation();

  const [ref, inView] = useInView({threshold: 0.12});

  
  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
    
  }, [controls, inView])

  return (
    <section id="about" className="about-page" ref={aboutRef} >
      <div ref={ref} >
        <motion.div 
          className="container flex"
          initial="hidden"
          animate={controls}
          variants={variants}
        >
          <motion.div 
            className="header"
            initial="hidden"
            animate={controls}
            variants={variants}
          >
            ABOUT
          </motion.div>
          <motion.div 
            className="header-bar"
            initial="hidden"
            animate={controls}
            variants={variants}
          ></motion.div>

          <Hexagons />

          <Skills />
          
        </motion.div>
      </div>
    </section>
  )
}