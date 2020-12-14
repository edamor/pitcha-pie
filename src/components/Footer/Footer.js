import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";


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

export const Footer = () => {

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
    <footer className="bg-footer" ref={ref}>
      
          <i 
            className="mdi mdi-chevron-double-up page-link"
            onClick={() => {window.scrollTo({top: 0})}}
          ></i>

      <motion.div 
        className="icon-wrap flex row"
        initial="hidden"
        animate={controls}
        variants={variants}
      >
        <a href="https://www.linkedin.com/in/ed-louise-amor-577a99196/">
          <div className="flex icon" title="LinkedIn" id="icon-2" >
            <i className="mdi mdi-linkedin"></i>
          </div>
        </a>
        <a href="mailto:amor.edlouise@gmail.com?subject=INQUIRY">
          <div className="flex icon" title="Gmail: amor.edlouise@gmail.com" id="icon-2">
            <i className="mdi mdi-email"></i>
          </div>
        </a>
        <a href="https://www.facebook.com/ed.amor.31">
          <div className="flex icon" title="Facebook" id="icon-3">
            <i className="mdi mdi-facebook"></i>
          </div>
        </a>
        <a href="https://github.com/edamor">
          <div className="flex icon" title="GitHub" id="icon-4">
            <i className="mdi mdi-github"></i>
          </div>
        </a>
        <a href="https://codepen.io/edamor">
          <div className="flex icon" title="CodePen" id="icon-5">
            <i className="mdi mdi-codepen"></i>
          </div>
        </a>
      </motion.div>
      <div className="info-box">
        <div className="footnote">
          ED LOUISE AMOR <span className="highlight">© {(new Date()).getFullYear()} </span>
        </div>
      </div>
    </footer>    
  )
}