import { useInView } from "react-intersection-observer";


export const ContactHeader = () => {

  const [ref, inView] = useInView({threshold: 0.12});

  return (
    <>
      <div
        ref={ref} 
        className={`header waypoint ${inView ? "animated slide-in-left" : ""}`}
      >
        CONTACT
      </div>
      <div 
        className={inView ?
          "header-bar waypoint animated slide-in-right"
          : "header-bar waypoint"
        } 
      />
    </>
  )
}