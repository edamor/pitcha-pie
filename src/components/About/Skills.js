import { useInView } from "react-intersection-observer";
import { Me } from "./Me"


export const Skills = () => {

  const [ref, inView] = useInView({threshold: 0.18});


  return (
    <div className="skills-wrapper flex row-gt-sm">
      
      <Me />

      <div
        ref={ref}
        className={`flex flex-50-gt-sm bars-wrap waypoint ${inView ? "animated slide-in-right" : ""}`}
        style={{ animationDelay: "0.3s"}} 
      >

        <div className="bar flex">
          <div className="tag bold badge-name ">HTML/CSS</div>
          <div className="badge-icon">
            <i className="mdi mdi-language-html5" />
            <i className="mdi mdi-language-css3" />
          </div>
        </div>
        <div className="bar flex">
          <div className="tag bold badge-name " >JavaScript ES6+</div>
          <div className="badge-icon">
            <i className="mdi mdi-language-javascript" />
          </div>
        </div>
        <div className="bar flex">
          <div className="tag bold badge-name">React JS</div>
          <div className="badge-icon">
            <i className="mdi mdi-react" />
          </div>
        </div>
        <div className="bar flex">
          <div className="tag bold badge-name">TypeScript</div>
          <div className="badge-icon">
            <i className="mdi mdi-language-typescript" />
          </div>
        </div>
        <div className="bar flex">
          <div className="tag bold badge-name">Java JDK8 & JDK11</div>
          <div className="badge-icon">
            <i className="mdi mdi-language-java" />
          </div>
        </div>
        <div className="bar flex">
          <div className="tag bold badge-name">Git</div>
          <div className="badge-icon">
            <i className="mdi mdi-github" />
          </div>
        </div>
        <div className="bar flex">
          <div className="tag bold badge-name">Heroku</div>
          <div className="badge-icon">
            <i className="mdi mdi-source-repository" />
          </div>
        </div>
        <div className="bar flex">
          <div className="tag bold badge-name-only">MySql</div>
          {/* <div className="badge-icon"></div> */}
        </div>
        <div className="bar flex">
          <div className="tag bold badge-name-only">MongoDB</div>
          {/* <div className="badge-icon"></div> */}
        </div>
        <div className="bar flex">
          <div className="tag bold badge-name-only">Node.js</div>
          {/* <div className="badge-icon"></div> */}
        </div>
        <div className="bar flex">
          <div className="tag bold badge-name-only">Spring Framework</div>
          {/* <div className="badge-icon"></div> */}
        </div>
        <div className="bar flex">
          <div className="tag bold badge-name-only">Amazon Web Services</div>
          {/* <div className="badge-icon"></div> */}
        </div>
        <div className="bar flex">
          <div className="tag bold badge-name-only">Google Cloud Platform</div>
          {/* <div className="badge-icon"></div> */}
        </div>
        
      </div>
    </div>
  )
}