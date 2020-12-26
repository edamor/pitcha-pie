import { useViewportScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavContext } from "../../contexts/NavContext/NavContext";



export const Nav = (props) => {

  const { landingRef, aboutRef, portfolioRef, contactRef, activeNav } = useNavContext();

  const [showMenu, setShowMenu] = useState(false);

  const [fixNav, setFixNav] = useState(false);

  const style = {
    maxWidth: "100vw"
  };



  const { scrollY } = useViewportScroll();

  useEffect(() => {
    scrollY.onChange(latest => {
      if (latest > (landingRef.current?.getBoundingClientRect().height - 50)) {
        setFixNav(true)
      } else {
        setFixNav(false)
      }
    })
  }, [landingRef, scrollY])





  return (
    <nav 
      className={`d-flex align-items-center justify-content-center desk ${fixNav ? "fixed" : ""}`}
      style={style}
    >
      <div className={`link-wrap ${showMenu ? "visible" : ""}`}>
        <div 
          className={`link-item ${activeNav.navLanding ? "active" : ""}`} 
          onClick={() => {
            landingRef.current.scrollIntoView({behavior: "smooth"});
            setShowMenu(false);
          }}
        >
          <span>
            Home
          </span>
        </div>
        <div 
          className={`link-item ${activeNav.navAbout ? "active" : ""}`}
          onClick={() => {
            aboutRef.current.scrollIntoView({behavior: "smooth"});
            setShowMenu(false);
          }}
        >
          <span>
            About
          </span>
        </div>
        <div 
          className={`link-item ${activeNav.navPortfolio ? "active" : ""}`}
          onClick={() => {
            portfolioRef.current.scrollIntoView({behavior: "smooth"});
            setShowMenu(false);
          }}
        >
          <span>
            Projects
          </span>
        </div>
        <div 
          className={`link-item ${activeNav.navContact ? "active" : ""}`}
          onClick={() => {
            contactRef.current.scrollIntoView({behavior: "smooth"});
            setShowMenu(false);
          }}
        >
          <span>
            Contact
          </span>
        </div>
      </div>
      <i className="mdi mdi-menu" onClick={() => {setShowMenu(!showMenu)}}></i>
    </nav>
  )
}