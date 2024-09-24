import React from "react";
import Particles from "react-tsparticles";
import { Engine, Container } from "tsparticles-engine";
import { loadFull } from "tsparticles";

const Particle: React.FC = () => {
  const particlesInit = async (engine: Engine): Promise<void> => {
    // Load the tsparticles engine to handle the particle animations
    console.log(engine);
    await loadFull(engine);
  };

  const particlesLoaded = async (container: Container | undefined): Promise<void> => {
    // Callback once the particles have loaded
    if (container) {
      console.log(container);
    }
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          line_linked: {
            enable: false,
            opacity: 0.03,
          },
          move: {
            direction: "right",
            speed: 0.05,
          },
          size: {
            value: 1,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
};
export default Particle;
