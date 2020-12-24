import { useInView } from "react-intersection-observer";
import { Me } from "./Me"
import "./skills.css"


export const Skills = () => {

  const [ref, inView] = useInView({threshold: 0.18});


  return (
    <div className="skills-wrapper flex row-gt-sm">
      
      <Me />

      <div
        ref={ref}
        className={`my-skills flex flex-50-gt-sm bars-wrap waypoint ${inView ? "animated slide-in-right" : ""}`}
        style={{ animationDelay: "0.3s"}} 
      >

        <div className={`bar flex waypoint ${inView ? "animated slide-in-right" : ""}`}>
          <div className="tag bold badge-name">HTML/CSS</div>
          <div className="badge-icon">
            <i className="mdi mdi-language-html5" />
            <i className="mdi mdi-language-css3" />
          </div>
        </div>
        <div className={`bar flex waypoint ${inView ? "animated slide-in-right" : ""}`}>
          <div className="tag bold badge-name" >JavaScript ES6+</div>
          <div className="badge-icon">
            <i className="mdi mdi-language-javascript" />
          </div>
        </div>
        <div className={`bar flex waypoint ${inView ? "animated slide-in-right" : ""}`}>
          <div className="tag bold badge-name">React 16+</div>
          <div className="badge-icon">
            <i className="mdi mdi-react" />
          </div>
        </div>
        <div className={`bar flex waypoint ${inView ? "animated slide-in-right" : ""}`}>
          <div className="tag bold badge-name">TypeScript 4</div>
          <div className="badge-icon">
            <i className="mdi mdi-language-typescript" />
          </div>
        </div>
        <div className={`bar flex waypoint ${inView ? "animated slide-in-right" : ""}`}>
          <div className="tag bold badge-name">Java JDK8 & JDK11</div>
          <div className="badge-icon">
            <i className="mdi mdi-language-java" />
          </div>
        </div>
        <div className={`bar flex waypoint ${inView ? "animated slide-in-right" : ""}`}>
          <div className="tag bold badge-name">Git & GitHub</div>
          <div className="badge-icon">
            <i className="mdi mdi-github" />
          </div>
        </div>
        <div className={`bar flex waypoint ${inView ? "animated slide-in-right" : ""}`}>
          <div className="tag bold badge-name-only">Spring & Spring Boot (Java)</div>
          {/* <div className="badge-icon"></div> */}
        </div>
        <div className={`bar flex waypoint ${inView ? "animated slide-in-right" : ""}`}>
          <div className="tag bold badge-name-only">Node.js</div>
          {/* <div className="badge-icon"></div> */}
        </div>
        <div className={`bar flex waypoint ${inView ? "animated slide-in-right" : ""}`}>
          <div className="tag bold badge-name-only">MySql & MariaDb</div>
          {/* <div className="badge-icon"></div> */}
        </div>
        <div className={`bar flex waypoint ${inView ? "animated slide-in-right" : ""}`}>
          <div className="tag bold badge-name-only">MongoDB</div>
          {/* <div className="badge-icon"></div> */}
        </div>
        <div className={`bar flex waypoint ${inView ? "animated slide-in-right" : ""}`}>
          <div className="tag bold badge-name-only">Amazon Web Services</div>
          {/* <div className="badge-icon"></div> */}
        </div>
        <div className={`bar flex waypoint ${inView ? "animated slide-in-right" : ""}`}>
          <div className="tag bold badge-name-only">Heroku</div>
          {/* <div className="badge-icon"></div> */}
        </div>
        
      </div>
    </div>
  )
}