import { useViewportScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavContext } from "../../contexts/NavContext/NavContext";



export const Nav = (props) => {

  const { landingRef, aboutRef, portfolioRef, contactRef } = useNavContext();

  // const [elTops, setElTops] = useState({});

  // useEffect(() => {
  //   if (landingRef.current !== null && aboutRef.current !== null
  //     && portfolioRef.current !== null && contactRef.current !== null) {
  //     setElTops({
  //       landingTop: landingRef.current.getBoundingClientRect().top,
  //       aboutTop: aboutRef.current.getBoundingClientRect().top,
  //       portfolioTop: portfolioRef.current.getBoundingClientRect().top,
  //       contactTop: contactRef.current.getBoundingClientRect().top,
  //     })
  //   }
  // }, [landingRef, aboutRef, portfolioRef, contactRef])

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
          className="link-item"
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
          className="link-item"
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
          className="link-item"
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
          className="link-item"
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