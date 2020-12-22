import { useInView } from "react-intersection-observer";



export const Hexagons = () => {

  const [ref, inView] = useInView({threshold: 0.12});

  return (
    <div className="flex row label-wrap" ref={ref} >

      <div className="flex row-gt-sm">
        <div className="flex bullet-wrap">
          <div 
            className={`hex-wrap waypoint ${inView ? "animated flip-in-x" : ""}`}
            style={{ animationDelay: "0.25s"}}
          >
            <div className="hexagon">
              <i className="mdi mdi-speedometer" />
            </div>
          </div>
          <div 
            className={`waypoint ${inView ? "animated fade-in" : ""}`}
            style={{ animationDelay: "0.25s"}}
          >
            <div style={{fontWeight: "700"}} className="label bold text-bold">Fast</div>
            <div className="hexagon-text">
              Fast load times and lag free experiences.
            </div>
          </div>
        </div>
        <div className="flex bullet-wrap">
          <div 
            className={`hex-wrap waypoint ${inView ? "animated flip-in-x" : ""}`}
            style={{ animationDelay: "0.5s"}}
          >
            <div className="hexagon">
              <i className="mdi mdi-cellphone-link" />
            </div>
          </div>
          <div 
            className={`waypoint ${inView ? "animated fade-in" : ""}`}
            style={{ animationDelay: "0.5s"}}
          >
            <div style={{fontWeight: "700"}} className="label bold text-bold">
              Responsive
            </div>
            <div className="hexagon-text">
              Layouts that will adapt to device's screen size
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex row-gt-sm">
        <div className="flex bullet-wrap">
          <div 
            className={`hex-wrap waypoint ${inView ? "animated flip-in-x" : ""}`}
            style={{ animationDelay: "0.75s"}}
          >
            <div className="hexagon">
              <i className="mdi mdi-lightbulb-outline" />
            </div>
          </div>
          <div 
            className={`waypoint ${inView ? "animated fade-in" : ""}`}
            style={{ animationDelay: "0.75s"}}
          >
            <div style={{fontWeight: "700"}} className="label bold text-bold">
              Intuitive
            </div>
            <div className="hexagon-text">
              Modern UI/UX designs that are familiar and easy to use
            </div>
          </div>
        </div>

        <div className="flex bullet-wrap">
          <div 
            className={`hex-wrap waypoint ${inView ? "animated flip-in-x" : ""}`}
            style={{ animationDelay: "1s"}}
          >
            <div className="hexagon">
              <i className="mdi mdi-rocket" />
            </div>
          </div>
          <div 
            className={`waypoint ${inView ? "animated fade-in" : ""}`}
            style={{ animationDelay: "1s"}}
          >
            <div style={{fontWeight: "700"}} className="label bold text-bold">Dynamic</div>
            <div className="hexagon-text">
              Backend integrations to make your website feel alive
            </div>
          </div>
        </div>
      </div>

    </div>    
  )
}