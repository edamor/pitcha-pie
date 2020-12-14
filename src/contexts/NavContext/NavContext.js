import { createContext, useContext, useRef } from "react";


export const NavContext = createContext(null);

export const NavContextProvider = ({children}) => {

  const landingRef = useRef(null); 
  const aboutRef = useRef(null); 
  const portfolioRef = useRef(null); 
  const contactRef = useRef(null); 



  return (
    <NavContext.Provider value={{landingRef, aboutRef, portfolioRef, contactRef}}>
      {children}
    </NavContext.Provider>
  )
}


export const useNavContext = () => {
  return useContext(NavContext);
}