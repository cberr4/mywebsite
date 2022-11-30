import { useCallback } from "react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

function Particle() {

    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
      }, []);
    
      const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
      }, []);

  return (
    <Particles
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    options={{
      fullScreen: {
        enable: true,
        zIndex: -1
      },
      background: {
        color: {
          value: "#000000, #1A1A1A",
        },
        image: "linear-gradient(#000000, #1A1A1A)",
        width: "100%"
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 175,
          enable: true,
          opacity: 0.3,
          width: 1.5,
        },
        collisions: {
          enable: true,
        },
        move: {
          directions: "none",
          enable: true,
          outModes: {
            default: "through",
          },
          random: true,
          speed: 0.4,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 2000,
          },
          value: 80,
        },
        opacity: {
          value: 0.2,
        },
        shape: {
          type: "triangle",
        },
        size: {
          value: { min: 1, max: 6 },
        },
      },
      detectRetina: true,
    }}
  />
  )
}

export default Particle