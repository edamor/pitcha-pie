import { useInView } from "react-intersection-observer";
import avatar from "./avatar.jpg"
import { MeContent } from "./MeContent";


export const Me = () => {


  const [ref, inView] = useInView({threshold: 0.18});


  return (
    <div
      ref={ref}
      className={`flex flex-50-gt-sm waypoint ${inView ? "animated slide-in-left" : ""}`}
      style={{ animationDelay: "0.15s"}}
    >
      <img
        src={avatar}
        alt="..."
        className="me"
      />
      <div className="label bold">Who am I?</div>
      <MeContent />
    </div>
  )
}