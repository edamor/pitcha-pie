import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useNavContext } from "../../contexts/NavContext/NavContext";
import { ContactForm } from "./ContactForm";
import { ContactHeader } from "./ContactHeader";
import { SubHeader } from "./SubHeader";


const style = {
  position: "absolute",
  top: "25vh",
  zIndex: -1
}


export const Contact = () => {

  const { contactRef, setActiveNav } = useNavContext();

  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      setActiveNav({
        navContact: true
      })
    }
  }, [inView, setActiveNav])

  return (
    <section id="contact" className=" bg-contact contact-page" ref={contactRef} >
      <div ref={ref} style={style} />
      <svg 
        preserveAspectRatio="none" 
        viewBox="0 0 100 102" 
        height="75" width="100%" 
        version="1.1" 
        xmlns="http://www.w3.org/2000/svg" 
        className="svgcolor-light"
      >
        <path 
          d="M0 0 L50 100 L100 0 Z" 
          fill="#F5F5F5" 
          stroke="#F5F5F5"
        ></path>
      </svg>
      <div className="container flex">
        <ContactHeader />
        <SubHeader />
        <ContactForm />
      </div>
    </section>    
  )
}