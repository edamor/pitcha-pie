import avatar from "./avatar.jpg"


export const Me = () => {


  return (
    <div className="flex flex-50-gt-sm animated slide-in-left">
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
          Majority of my frontend projects were developed using React. Through my journey, I learned how to develop custom hooks, context API for state management, and other React-based APIs. I can tell you more of my story by sending me an email. 
        </p>
        <p>
          The backend for my projects are all developed using Spring. Spring is a framework and an IOC container for the Java platform. It aids me by handling the configurations required to build and run a web app. 
        </p>
        <p>
          I am young, passionate, and hungry to learn more. Get in touch to find out more.
        </p>
      </div>
    </div>
  )
}