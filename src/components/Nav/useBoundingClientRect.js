import { useEffect, useState } from "react";



export const useBoundingClientRect = ({landingRef, aboutRef, portfolioRef, contactRef}) => {
  const [state, setState] = useState({});

  useEffect(() => {
    if (landingRef.current !== null && aboutRef.current !== null
      && portfolioRef.current !== null && contactRef.current !== null) {
      setState({
        landing: landingRef.current.getBoundingClientRect(),
        about: aboutRef.current.getBoundingClientRect(),
        portfolio: portfolioRef.current.getBoundingClientRect(),
        contact: contactRef.current.getBoundingClientRect(),
      })
    }
  }, [landingRef, aboutRef, portfolioRef, contactRef])


  return state;
}