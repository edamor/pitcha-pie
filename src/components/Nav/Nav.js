import { useViewportScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useNavContext } from "../../contexts/NavContext/NavContext";
import { CaretDownFill } from "../SvgIcons/SvgIcons";
import "./nav.css";


export const Nav = () => {

  const { landingRef, aboutRef, portfolioRef, contactRef, activeNav } = useNavContext();
  const [showMenu, setShowMenu] = useState(false);
  const [fixNav, setFixNav] = useState(false);
  const style = { maxWidth: "100vw" };
  const { scrollY } = useViewportScroll();
  const history = useHistory();
  const location = useLocation();
  const [showProjectNav, setShowProjectNav] = useState(false);

  useEffect(() => {
    if (location.pathname === "/projects") {
      setFixNav(true)
    } else {
      return scrollY.onChange(latest => {
        if (latest > (landingRef.current?.getBoundingClientRect().height - 50)) {
          setFixNav(true)
        } else {setFixNav(false)}
      })
    }

  }, [landingRef, scrollY, location])


  useEffect(() => {
    let handleClick = (e) => {
      if (e.target.classList.value !== "nav-item-projects") {
        setShowProjectNav(false)
      } 
    }
    window.addEventListener("click", handleClick)
    return () => {
      window.removeEventListener("click", handleClick)
    }
  }, [])

  function checkProjectsPath(from) {
    if (history.location.pathname === "/") {
      history.push("/projects", from);
    } 
  }

  function navHandle(navTo) {
    if (location.pathname === "/projects") {
      history.push("/", navTo)
    } 
    switch (navTo) {
      case "about":
        aboutRef.current?.scrollIntoView({behavior: "smooth"})
        break;
      case "featuredProjects":
        portfolioRef.current?.scrollIntoView({behavior: "smooth"});
        break;
      case "contact":
        contactRef.current?.scrollIntoView({behavior: "smooth"});
        break;
      case "allProjects":
        checkProjectsPath(navTo);
        break;
      
      default:
        landingRef.current?.scrollIntoView({behavior: "smooth"});
        break;
    }
    setShowMenu(false);
    setShowProjectNav(false);
  }



  return (
    <nav 
      className={`my-nav desk ${fixNav ? "fixed" : ""}`}
      style={style}
    >
      <div className={`nav-link-wrap ${showMenu ? "visible" : ""}`}>
        <div 
          className={`nav-link-item ${activeNav.navLanding ? "nav-active" : ""}`} 
          onClick={() => {navHandle("landing")}}
        >
          <span>
            Home
          </span>
        </div>
        <div 
          className={`nav-link-item ${activeNav.navAbout ? "nav-active" : ""}`}
          onClick={() => {navHandle("about")}}
        >
          <span>
            About
          </span>
        </div>
        <div 
          className="nav-dropdown nav-link-item"
          title="My Personal Projects"
        >
          <div 
            className={`nav-dropdown-title ${activeNav.navProjects ? "nav-active" : ""}`}
            onClick={() => {setShowProjectNav(!showProjectNav)}}  
          >
              <span
                style={{ marginRight: "0.5rem"}}
                className="nav-item-projects"
              >
                Projects
              </span>
              <span
                style={{
                  position: "relative",
                  top: "0.18rem"
                }}
              >
                <CaretDownFill />
              </span>            
          </div>
          <div className={`nav-dropdown-content ${showProjectNav ? "nav-dropdown-open" : ""}`}>
            <div
              onClick={() => {navHandle("featuredProjects")}}
              className={activeNav.navProjects?.featured ? "nav-active" : ""}
            >
              <span>
                Featured
              </span>
            </div>
            <div
              onClick={() => {navHandle("allProjects")}}
              className={activeNav.navProjects?.all ? "nav-active" : ""}
            >
              <span>
                All
              </span>
            </div>
            <div>
              <span>
                APIs
              </span>
            </div>
          </div>
        </div>
        <div 
          className={`nav-link-item ${activeNav.navContact ? "nav-active" : ""}`}
          onClick={() => {navHandle("contact")}}
        >
          <span>
            Contact
          </span>
        </div>
      </div>
      <i className="mdi mdi-menu nav-icon" onClick={() => {
        setShowMenu(!showMenu);
        setShowProjectNav(false);
      }}></i>
    </nav>
  )
}