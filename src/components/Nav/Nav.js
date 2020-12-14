import { useState } from "react";



export const Nav = (props) => {

  const [showMenu, setShowMenu] = useState(false);
  const mobileNav = (window.innerWidth < 700);

  const style = {
    maxWidth: "100vw"
  }


  return (
    <nav 
      className={`d-flex align-items-center justify-content-center ${mobileNav ? "fixed" : "desk"}`}
      style={mobileNav ? style: {}}
    >
      <div className={`link-wrap ${showMenu ? "visible" : ""}`}>
        <div className="link-item">
          <a href="#home">
            Home
          </a>
        </div>
        <div className="link-item">
          <a href="#about">
            About
          </a>
        </div>
        <div className="link-item">
          <a href="#myGallery">
            Projects
          </a>
        </div>
        <div className="link-item">
          <a href="#contact">
            Contact
          </a>
        </div>
      </div>
      <i className="mdi mdi-menu" onClick={() => {setShowMenu(!showMenu)}}></i>
    </nav>
  )
}