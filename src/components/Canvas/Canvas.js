import Particles from "react-particles-js"

const style = {
  position: "absolute",
  top: 0,
  left: 0
}

export const LandingPageBg = () => {

  return (
    <Particles
      height="100vh"
      width="100vw"
      style={style}
      params={{
        particles: {
          color: "#e44185",
          number: {
            value: 100
          },
          size: {
            value: 3
          },
          move: {
            speed: 0.8
          }
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse"
            }
          }
        },
        modes: {    
          repulse: {
            distance: 10
          },
        },
    }}/>
  )
}