
import { Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiAngularSimple,
  DiHtml5,
  DiCss3,
  DiNpm
  // DiJava,
} from "react-icons/di";
import { SiFirebase, SiNextdotjs } from "react-icons/si";

function Techstack() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const iconVariants = {
    hidden: { 
      scale: 0,
      rotate: -180,
      opacity: 0 
    },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.68, -0.55, 0.265, 1.55] as const
      }
    }
  };

  const techIcons = [
    { Icon: DiJavascript1, name: "JavaScript", color: "#F7DF1E" },
    { Icon: DiHtml5, name: "HTML5", color: "#E34F26" },
    { Icon: DiCss3, name: "CSS3", color: "#1572B6" },
    { Icon: DiNodejs, name: "Node.js", color: "#339933" },
    { Icon: DiNpm, name: "NPM", color: "#CB3837" },
    { Icon: DiReact, name: "React", color: "#61DAFB" },
    { Icon: DiAngularSimple, name: "Angular", color: "#DD0031" },
    { Icon: DiMongodb, name: "MongoDB", color: "#47A248" },
    { Icon: SiNextdotjs, name: "Next.js", color: "#000000" },
    { Icon: DiGit, name: "Git", color: "#F05032" },
    { Icon: SiFirebase, name: "Firebase", color: "#FFCA28" }
  ];

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {techIcons.map(({ Icon, name, color }, index) => (
          <Col xs={4} md={2} key={index}>
            <motion.div
              className="tech-icons"
              variants={iconVariants}
              whileHover={{
                scale: 1.15,
                rotate: [0, -10, 10, -10, 0],
                transition: {
                  duration: 0.6,
                  ease: "easeInOut"
                }
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                cursor: "pointer",
                position: "relative"
              }}
              title={name}
            >
              <motion.div
                whileHover={{
                  color: color,
                  filter: "drop-shadow(0 0 10px " + color + "40)",
                  transition: { duration: 0.3 }
                }}
              >
                <Icon />
              </motion.div>
            </motion.div>
          </Col>
        ))}
      </Row>
    </motion.div>
  );
}

export default Techstack;
