import { useNavContext } from "../../contexts/NavContext/NavContext";
import { ContactForm } from "./ContactForm";
import { ContactHeader } from "./ContactHeader";
import { SubHeader } from "./SubHeader";



export const Contact = () => {

  const { contactRef } = useNavContext();


  return (
    <section id="contact" className=" bg-contact contact-page" ref={contactRef} >
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