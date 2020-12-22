import { useInView } from "react-intersection-observer";


export const PortfolioHeader = () => {

  const [ref, inView] = useInView({threshold: 0.12});

  return (
    <>
      <div
        ref={ref} 
        className={`header waypoint ${inView ? "animated slide-in-right" : ""}`}
      >
        PROJECTS
      </div>
      <div 
        className={inView ?
          "header-bar waypoint animated slide-in-left"
          : "header-bar waypoint"
        } 
      />
    </>
  )
}