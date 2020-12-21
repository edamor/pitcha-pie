import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useNavContext } from "../../contexts/NavContext/NavContext";
import { ContactForm } from "./ContactForm";

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



export const Contact = () => {

  const { contactRef } = useNavContext();

  const controls = useAnimation();

  const [ref, inView] = useInView({threshold: 0.1});

  
  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
    
  }, [controls, inView])


  return (
    <section id="contact" className=" bg-contact contact-page" ref={contactRef} >
      <div ref={ref}>
        <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" className="svgcolor-light">
          <path d="M0 0 L50 100 L100 0 Z" fill="#F5F5F5" stroke="#F5F5F5"></path>
        </svg>
        <motion.div 
          className="container flex"
          initial="hidden"
          animate={controls}
          variants={variants}
        >
          <div className="header waypoint animated slide-in-left text-white" >
            CONTACT
          </div>
          <div className="header-bar waypoint animated slide-in-right"  data-delay=".25s" style={{animationDelay: "0.25s"}}></div>
          <div className="highlight waypoint animated slide-in-right"  data-delay=".5s" style={{animationDelay: "0.5s"}}>
            Have a question or want to work together?
          </div>
          
          <ContactForm />

        </motion.div>
      </div>
    </section>    
  )
}