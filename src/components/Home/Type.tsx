import React from "react";
import Typewriter from "typewriter-effect";

const Type: React.FC = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Freelancer",
          "MERN Stack Developer",
          "MEAN Stack Developer",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};

export default Type;
