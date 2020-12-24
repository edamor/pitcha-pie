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
    <div style={{ fontSize: "0.8rem"}} ref={ref} className="me-content">
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
        Majority of my frontend projects were developed using React. Through my journey, I learned how to develop custom hooks, context API for state management, and more React-based APIs. I also have experience in TypeScript and Angular development. 
      </p>
      <p
        className={`my-about waypoint ${inView ? "animated slide-in-left" : ""}`}
        style={mb}
      >
        The backend for my projects are all developed using Spring. Spring is a framework and an IOC container for the Java platform. It aids me by handling the configurations required to build and run a web app. 
      </p>
      <p
        className={`my-about waypoint ${inView ? "animated slide-in-left" : ""}`}
        style={mb}
      >
        I am young, passionate, and hungry to learn more. <span 
          onClick={goToContact} 
          className="highlight"
          style={{ cursor: "pointer" }}
        >
            Get in touch
        </span> to find out more.
      </p>
    </div>
  )
}