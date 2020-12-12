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
          I'm a web developer who is based in Metro Manila, PH.
        </p>
        <p>
          I am primarily develop my frontend project with React. I enjoy creating custom React hooks for encapsulating business logic, functional components, and other React-based APIs. Although new, I am also having fun in implementing my projects in TypeScript. 
        </p>
        <p>
          The backend for my projects are all developed using Spring. Spring is a framework and an IOC container for the Java platform. It aids me by handling the configurations required to build and run a web app.
        </p>
        <p>
          I am young, passionate, and hungry to learn more. What do you have in mind? Let's make it happen.
        </p>
      </div>
    </div>
  )
}