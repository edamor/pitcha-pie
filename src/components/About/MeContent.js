import { useInView } from "react-intersection-observer";
import { useNavContext } from "../../contexts/NavContext/NavContext";


const mb = {
  marginBottom: "0.45rem"
}

export const MeContent = () => {
  const { contactRef } = useNavContext();

  const [ref, inView] = useInView({threshold: 0.18});

  const goToContact = () => {
    contactRef.current.scrollIntoView({behavior: "smooth"})
  }


  return (
    <div style={{ fontSize: "0.75rem"}} ref={ref} className="me-content">
      <p
        className={`my-about waypoint ${inView ? "animated slide-in-left" : ""}`}
        style={mb}
      >
        I'm a full-stack developer based in Metro Manila, PH.
      </p>
      <p
        className={`my-about waypoint ${inView ? "animated slide-in-left" : ""}`}
        style={mb}
      >
        I build modern websites and web apps with efficiency in mind. I develop <a className="highlight" href="https://spring.io/guides/gs/rest-service/" target="_blank" rel="noreferrer noopener">RESTful</a> APIs for the transfer of persistent data between the frontend and backend of my projects. 
      </p>
      <p
        className={`my-about waypoint ${inView ? "animated slide-in-left" : ""}`}
        style={mb}
      >
        I mainly use <a className="highlight" href="https://reactjs.org/" target="_blank" rel="noreferrer noopener" >React</a> for my frontend development. For my backend development, I use <a className="highlight" href="https://spring.io/" target="_blank" rel="noreferrer noopener" >Spring</a>, which is a framework and an IOC container for the Java platform.
      </p>
      <p
        className={`my-about waypoint ${inView ? "animated slide-in-left" : ""}`}
        style={mb}
      >
        I enjoy solving problems. I love the process of learning the necessary concepts to solve a problem. I am young, passionate, and hungry to learn more. My CV is available upon request. <span 
          onClick={goToContact} 
          className="highlight"
          style={{ cursor: "pointer" }}
        >
          Get in touch 
        </span> now.
      </p>
    </div>
  )
}