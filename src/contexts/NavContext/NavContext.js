import { createContext, useContext, useRef, useState } from "react";


export const NavContext = createContext(null);

export const NavContextProvider = ({children}) => {

  const landingRef = useRef(null); 
  const aboutRef = useRef(null); 
  const portfolioRef = useRef(null); 
  const contactRef = useRef(null);

  const [activeNav, setActiveNav] = useState({
    navLanding: true
  })



  return (
    <NavContext.Provider value={{landingRef, aboutRef, portfolioRef, contactRef, activeNav, setActiveNav}}>
      {children}
    </NavContext.Provider>
  )
}


export const useNavContext = () => {
  return useContext(NavContext);
}