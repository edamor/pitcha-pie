import { useInView } from "react-intersection-observer";
import avatar from "./avatar.jpg"


export const Me = () => {

  const [ref, inView] = useInView({threshold: 0.18});

  return (
    <div
      ref={ref}
      className={`flex flex-50-gt-sm waypoint ${inView ? "animated slide-in-left" : ""}`}
      style={{ animationDelay: "0.3s"}}
    >
      <img
        src={avatar}
        alt="..."
        className="me"
      />
      <div className="label bold">Who am I?</div>
      <div style={{ fontSize: "0.8rem"}}>
        <p>
          I'm a full-stack developer based in Metro Manila, PH.
        </p>
        <p>
          Majority of my frontend projects were developed using React. Through my journey, I learned how to develop custom hooks, context API for state management, and more React-based APIs. I also have experience in TypeScript and Angular development. 
        </p>
        <p>
          The backend for my projects are all developed using Spring. Spring is a framework and an IOC container for the Java platform. It aids me by handling the configurations required to build and run a web app. 
        </p>
        <p>
          I am young, passionate, and hungry to learn more. <a href="mailto:amor.edlouise@gmail.com?subject=INQUIRY">Get in touch</a> to find out more.
        </p>
      </div>
    </div>
  )
}