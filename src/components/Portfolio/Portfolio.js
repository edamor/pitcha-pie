import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useNavContext } from "../../contexts/NavContext/NavContext";
import { Gallery } from "./Gallery"


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

export const Portfolio = () => {

  const { portfolioRef } = useNavContext();

  const controls = useAnimation();

  const [ref, inView] = useInView();

  
  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
    
  }, [controls, inView])

  return (
    <section className="flex" id="portfolio" ref={portfolioRef} >
      <div ref={ref}>
        <motion.div 
          className="header"
          initial="hidden"
          animate={controls}
          variants={variants}
        >
          PROJECTS
        </motion.div>
        <motion.div 
          className="header-bar"
          style={{ marginLeft: "auto", marginRight: "auto" }}
          initial="hidden"
          animate={controls}
          variants={variants}
        />
        <Gallery inView={inView} />
      </div>
    </section>
  )
}