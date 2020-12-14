import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer"
import { Hexagons } from "./Hexagons"
import { Skills } from "./Skills"


const variants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3
    }
  },
  hidden: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.15
    }
  }
}


export const About = () => {

  const controls = useAnimation();

  const [ref, inView] = useInView({threshold: 0.3});

  
  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
    
  }, [controls, inView])

  return (
    <section id="about" className="about-page" ref={ref}>
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
    </section>
  )
}