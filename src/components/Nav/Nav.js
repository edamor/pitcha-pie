import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useRef, useState } from "react";
// import { useInView } from "react-intersection-observer";
import { useNavContext } from "../../contexts/NavContext/NavContext";
import { useBoundingClientRect } from "./useBoundingClientRect";


const variants = {
  active: {
    color: "#E31B6D",
    fontWeight: 500
  },
  inActive: {
    color: "#FFFFFF"
  }
};





export const Nav = () => {

  const navRef = useRef(null);

  const { landingRef, aboutRef, portfolioRef, contactRef, activeNav } = useNavContext();

  const { landing, about, portfolio, contact } = useBoundingClientRect(
    { landingRef, aboutRef, portfolioRef, contactRef }
  );

  const [showMenu, setShowMenu] = useState(false);

  const style = {
    maxWidth: "100vw",
    position: "absolute"
  };
console.log(landing?.y);

  function scrollTo(el) {
    window.scrollTo({top: el})
  }

  const { scrollY } = useViewportScroll();

  const y = useTransform(scrollY, l => (l-(landing?.height + 50)))



  return (
    <>
    {/* <div style={{ position: "relative" }} >
    </div> */}
    <motion.nav 
      className={`d-flex align-items-center justify-content-center `}
      // style={mobileNav ? style: {}}
      // style={style}
      style={{
        y
      }}
      transition={{
        ease: 0.1
      }}
      // ref={ref}
      // initial={{
      //   top: landing?.height
      // }}
      // animate={{
      //   top: top
      // }}
      
    >
      <div className={`link-wrap ${showMenu ? "visible" : ""}`}>
        <motion.div 
          className="link-item"
          onClick={() => scrollTo(landing.top)}
          animate={`${activeNav.navHome ? "active" : "inActive"}`}
          variants={variants}
        >
          <span>
            Home
          </span>
        </motion.div>
        <motion.div 
          className="link-item"
          onClick={() => scrollTo(about.top)}
          animate={`${activeNav.navAbout ? "active" : "inActive"}`}
          variants={variants}
        >
          <span>
            About
          </span>
        </motion.div>
        <motion.div 
          className="link-item"
          onClick={() => scrollTo(portfolio.top)}
          animate={`${activeNav.navPortfolio ? "active" : "inActive"}`}
          variants={variants}
        >
          <span>
            Projects
          </span>
        </motion.div>
        <motion.div 
          className="link-item"
          onClick={() => scrollTo(contact.top)}
          animate={`${activeNav.navContacts ? "active" : "inActive"}`}
          variants={variants}
        >
          <span>
            Contact
          </span>
        </motion.div>
      </div>
      <i className="mdi mdi-menu" onClick={() => {setShowMenu(!showMenu)}}></i>
    </motion.nav>
    
    </>
  )
}