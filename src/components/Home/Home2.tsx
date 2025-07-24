import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import myImg from "../../assets/profile.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillFacebook } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Home2: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [socialRef, socialInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const slideInLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  const slideInRight = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  const socialIconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.68, -0.55, 0.265, 1.55] as const
      }
    }
  };

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Row>
            <Col md={8} className="home-about-description">
              <motion.h1 
                variants={slideInLeft}
                style={{ fontSize: "2.6em" }}
              >
                LET ME <span className="purple">INTRODUCE</span> MYSELF
              </motion.h1>
              <motion.p 
                variants={slideInLeft}
                className="home-about-body"
              >
                I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
                <br />
                <br />I am fluent in using design programs like
                <i>
                  <b className="purple"> Figma, Canva, Adobe Photoshop, and Designlab. </b>
                </i>
                <br />
                <br />
                My field of Interest&#39;s are building &nbsp;
                <i>
                  <b className="purple">Frontend web design</b> and also in areas related to <b className="purple">web</b>.
                </i>
                <br />
                <br />
                Whenever possible, I also apply my passion for developing products with <b className="purple">Node.js</b> and
                <i>
                  <b className="purple"> Modern Javascript Libraries and Frameworks</b>
                </i>
                &nbsp; like
                <i>
                  <b className="purple">Angular, React.js, and Next.js</b>
                </i>
              </motion.p>
            </Col>
            <Col md={4} className="myAvtar">
              <motion.div variants={slideInRight}>
                <Tilt>
                  <img src={myImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
        
        <motion.div
          ref={socialRef}
          initial="hidden"
          animate={socialInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <Row>
            <Col md={12} className="home-about-social">
              <motion.h1 variants={slideInLeft}>FIND ME ON</motion.h1>
              <motion.p variants={slideInLeft}>
                Feel free to <span className="purple">connect</span> with me
              </motion.p>
              <motion.ul 
                className="home-about-social-links"
                variants={containerVariants}
              >
                <motion.li 
                  className="social-icons"
                  variants={socialIconVariants}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                >
                  <a
                    href="https://github.com/KhaledAbdElazem"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </motion.li>
                <motion.li 
                  className="social-icons"
                  variants={socialIconVariants}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                >
                  <a
                    href="https://www.linkedin.com/in/khaled-abd-elazem-a0b106310"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </motion.li>
                <motion.li 
                  className="social-icons"
                  variants={socialIconVariants}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                >
                  <a
                    href="https://www.facebook.com/profile.php?id=100073468527492"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillFacebook />
                  </a>
                </motion.li>
              </motion.ul>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </Container>
  );
};

export default Home2;
