import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";

const Particle: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesOptions = {
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
        direction: "right" as const,
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
  };

  return <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />;
};

export default Particle;
