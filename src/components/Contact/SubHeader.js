import { useInView } from "react-intersection-observer";



export const SubHeader = () => {

  
  const [ref, inView] = useInView({threshold: 0.12});

  return (
    <div 
      ref={ref}
      className={`highlight waypoint ${inView ? "animated slide-in-right" : ""}`}    
      style={{animationDelay: "0.15s"}}
    >
      Have a question or want to work together?
    </div>
  )
}