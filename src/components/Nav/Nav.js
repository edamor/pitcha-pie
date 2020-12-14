import { useEffect, useState } from "react";
import { useNavContext } from "../../contexts/NavContext/NavContext";



export const Nav = (props) => {

  const { landingRef, aboutRef, portfolioRef, contactRef } = useNavContext();

  const [elTops, setElTops] = useState({});

  useEffect(() => {
    if (landingRef.current !== null && aboutRef.current !== null
      && portfolioRef.current !== null && contactRef.current !== null) {
      setElTops({
        landingTop: landingRef.current.getBoundingClientRect().top,
        aboutTop: aboutRef.current.getBoundingClientRect().top,
        portfolioTop: portfolioRef.current.getBoundingClientRect().top,
        contactTop: contactRef.current.getBoundingClientRect().top,
      })
    }
  }, [landingRef, aboutRef, portfolioRef, contactRef])

  const [showMenu, setShowMenu] = useState(false);
  const mobileNav = (window.innerWidth < 700);

  const style = {
    maxWidth: "100vw"
  };


  function scrollTo(el) {
    window.scrollTo({top: el})
  }




  return (
    <nav 
      className={`d-flex align-items-center justify-content-center ${mobileNav ? "fixed" : "desk"}`}
      style={mobileNav ? style: {}}
    >
      <div className={`link-wrap ${showMenu ? "visible" : ""}`}>
        <div 
          className="link-item"
          onClick={() => scrollTo(elTops.landingTop)}
        >
          <span>
            Home
          </span>
        </div>
        <div 
          className="link-item"
          onClick={() => scrollTo(elTops.aboutTop)}
        >
          <span>
            About
          </span>
        </div>
        <div 
          className="link-item"
          onClick={() => scrollTo(elTops.portfolioTop)}
        >
          <span>
            Projects
          </span>
        </div>
        <div 
          className="link-item"
          onClick={() => scrollTo(elTops.contactTop)}
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