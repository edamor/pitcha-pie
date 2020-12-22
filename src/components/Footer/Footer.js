import { useInView } from "react-intersection-observer";
import { ChevronDoubleUp } from "../SvgIcons/SvgIcons";



export const Footer = () => {


  const [ref, inView] = useInView({threshold: 0.3});

  

  return (
    <footer className="bg-footer" ref={ref}>
      
      <span
        className={`mdi page-link waypoint ${inView ? "animated pop-in" : ""}`}
        style={{ animationDelay: "0.15s"}}
        onClick={() => {window.scrollTo({top: 0})}}
      >
        <ChevronDoubleUp />
      </span>

      <div 
        className="icon-wrap flex row"
      >
        <a href="https://www.linkedin.com/in/ed-louise-amor-577a99196/">
          <div 
            className={`flex icon waypoint ${inView ? "animated pop-in" : ""}`}
            style={{ animationDuration: "0.4s", animationDelay: "0.25s" }}
            title="LinkedIn" 
            id="icon-2"
          >
            <i className="mdi mdi-linkedin"></i>
          </div>
        </a>
        <a href="mailto:amor.edlouise@gmail.com?subject=INQUIRY">
          <div 
            className={`flex icon waypoint ${inView ? "animated pop-in" : ""}`}
            style={{ animationDuration: "0.4s", animationDelay: "0.5s" }}
            title="Gmail: amor.edlouise@gmail.com" 
            id="icon-2">
            <i className="mdi mdi-email"></i>
          </div>
        </a>
        <a href="https://www.facebook.com/ed.amor.31">
          <div 
            className={`flex icon waypoint ${inView ? "animated pop-in" : ""}`}
            style={{ animationDuration: "0.4s", animationDelay: "0.75s" }}
            title="Facebook" 
            id="icon-3">
            <i className="mdi mdi-facebook"></i>
          </div>
        </a>
        <a href="https://github.com/edamor">
          <div 
            className={`flex icon waypoint ${inView ? "animated pop-in" : ""}`}
            style={{ animationDuration: "0.4s", animationDelay: "1s" }}
            title="GitHub" 
            id="icon-4">
            <i className="mdi mdi-github"></i>
          </div>
        </a>
        <a href="https://codepen.io/edamor">
          <div 
            className={`flex icon waypoint ${inView ? "animated pop-in" : ""}`}
            style={{ animationDuration: "0.4s", animationDelay: "1.25s" }}
            title="CodePen" 
            id="icon-5">
            <i className="mdi mdi-codepen"></i>
          </div>
        </a>
      </div>
      <div className="info-box">
        <div className="footnote">
          ED LOUISE AMOR <span className="highlight">© {(new Date()).getFullYear()} </span>
        </div>
      </div>
    </footer>    
  )
}