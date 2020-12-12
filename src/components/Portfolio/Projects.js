


const projects = [
  {
    id: 1,
    name: "Bill Management System",
    tech: "React JS / Spring / MySql",
    demoUrl: "https://alcantarawater.online",
    ghUrl: "",
    images: [
      "https://i.imgur.com/ORBLmbp.jpg",
      "https://i.imgur.com/3jVsKH1.jpg",
      "https://i.imgur.com/SK1vOgr.jpg",
      "https://i.imgur.com/9tzjmhV.jpg"
    ],
    description: [
      "This is a simple app whose goal is to manage the water bills of a small community. Customers can view their accounts while admins can view, register, and delete accounts.",
      "Monthly billing statements can be generated by providing the system the latest meter reading of each account, and the rest will be taken care of.",
      "Registered customers will receive their monthly water bill via SMS, through the integration with Twilio. Get in touch to learn more."
    ]
  },
  {
    id: 2,
    name: "Simple Chat App",
    tech: "React JS / Spring WebSocket",
    demoUrl: "https://edamor.github.io/simple-chat-react-1",
    ghUrl: "https://github.com/edamor/simple-chat-react-1",
    images: [
      "https://i.imgur.com/K5qQDKa.jpg",
      "https://i.imgur.com/ILvjzt5.jpg",
      "https://i.imgur.com/QYRXSMT.jpg"
    ],
    description: [
      "This is a real-time public chat app built with React JS and Spring WebSockets. All messages are being sent in real-time to all active subscribers.",
      "The connection happens when a user opens the app. The app then communicates with the server through STOMP over WebSocket protocol.",
      "Try it out with your buddy!",
      "This project is being hosted at Heroku and Github Pages."
    ]
  },
  {
    id: 3,
    name: "Back(up) App",
    tech: "React JS / Spring / MongoDB",
    demoUrl: "https://edamor.github.io/backapp3",
    ghUrl: "https://github.com/edamor/backapp3",
    images: [
      "https://i.imgur.com/B5QFsEe.jpg"
    ],
    description: [
      "This project is a prototype of a booking platform with the goal of connecting customers and housekeeping service providers. The concept was inspired by popular ride booking apps here in the Philippines.",
      "I am using React JS for the frontend, Spring Boot for the backend, and MongoDB for my database. The UI/UX is still under development but the backend and business logic are ready. Get in touch to learn more."
    ]
  },
  {
    id: 4,
    name: "World Map w Pins",
    tech: "React JS / Leaflet JS",
    demoUrl: "https://edamor.github.io/react-leaflet-1",
    ghUrl: "https://github.com/edamor/react-leaflet-1",
    images: [
      "https://i.imgur.com/Y2GqIB0.jpg",
      "https://i.imgur.com/ntEsyD4.jpg",
      "https://i.imgur.com/QNozsLl.jpg",
      "https://i.imgur.com/XFCVg6x.jpg"
    ],
    description: [
      "This is a simple implementation of a map where you can drop pins at selected locations and these pins could have info boxes which contain the basic information about the location that was pinned",
      "I used Leaflet JS as a tool for the map implementation together with React and React Hooks.",
      "Try it out and let me know what you think."
    ]
  },
  {
    id: 5,
    name: "Office Supplies Store",
    tech: "JavaScript / Liquid / Shopify",
    demoUrl: "https://cuemultitrade.com",
    ghUrl: "",
    images: [
      "https://i.imgur.com/a9jEMYS.jpg",
      "https://i.imgur.com/qjGVhfz.jpg",
      "https://i.imgur.com/E3BhBhD.jpg"
    ],
    description: [
      "This is an e-commerce website that was developed for a merchandising SME. The store currently serves customers within Metro Manila and plans to expand to nation wide operations in the near future.",
      "The website is hosted on Shopify and is live at https://cuemultitrade.com.",
      "Contact me if you need one for your store too."
    ]
  },
  {
    id: 6,
    name: "To Do App",
    tech: "React JS / Bootstrap",
    demoUrl: "https://edamor.github.io/to-do-app-2",
    ghUrl: "https://github.com/edamor/to-do-app-2",
    images: [
      "https://i.imgur.com/6y50vsq.jpg",
      "https://i.imgur.com/ewQNGNQ.jpg",
      "https://i.imgur.com/aESdD0D.jpg",
      "https://i.imgur.com/wO0udix.jpg"
    ],
    description: [
      "This project is a simple to do app to show the implementation of React Hooks with React Router DOM. This was one of my first projects when I started this journey.",
      "The project is hosted at github and you can try it out anytime. The source code is also available publicly if you wish to create a version for yourself.",
    ]
  },
  {
    id: 7,
    name: "Personal Site v2",
    tech: "React JS / Bootstrap",
    demoUrl: "https://edamor.github.io/portfolio2",
    ghUrl: "https://github.com/edamor/portfolio2",
    images: [
      "https://i.imgur.com/OSU5o14.jpg",
      "https://i.imgur.com/zdYueHY.jpg",
      "https://i.imgur.com/8ueNzx9.jpg"
    ],
    description: [
      "This is a simple website which tells my story at that time as a web developer.",
      "This was the second website I developed for myself. I used React JS for the development."
    ]
  }
];


export const Projects = (props) => {
  const { selectProject } = props;

  return projects && projects.map(item => (
    <div 
      key={item.id} 
      className="mix react" 
      style={{ display: "inline-block" }}
    >
      <div>
        <div className="card">
          {
            item.images.length > 0 ?
            <img 
              src={item.images[0]}
              alt="..."
              style={{
                objectFit: "scale-down",
                height: "100%",
                width: "100%"
              }}

            />
            :
            <img 
              src={"https://via.placeholder.com/390x300.jpg"}
              alt="..."
            />
          }
        </div>
        <div className="text">
          <div className="bold"> {item.name} </div>
          <span className="highlight"> {item.tech} </span>
        </div>
        <div 
          className="button" 
          id="ordering"
          onClick={() => selectProject(item)}
        >
          LEARN MORE
        </div>
      </div>
    </div>

  ))
}