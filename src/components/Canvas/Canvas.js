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
          links: {
            color: "#dfdfdf",
            distance: 150,
            enable: true,
            opacity: 0.35,
            width: 1,
          },
          number: {
            value: (window.innerWidth < 768 ? 50 : 120)
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
          detectsOn: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "bubble"
            },
            resize: true
          }
        },
        modes: {
          bubble: {
            distance: 1,
            duration: 10,
            opacity: 0.75,
            size: 10,
          }
        },
        detectRetina: true
    }}/>
  )
}