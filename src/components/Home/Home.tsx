import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import homeLogo from "../../assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <motion.h1 
                  variants={itemVariants}
                  style={{ paddingBottom: 15 }} 
                  className="heading"
                >
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </motion.h1>

                <motion.h1 
                  variants={itemVariants}
                  className="heading-name"
                >
                  I&#39;M
                  <strong className="main-name"> Khaled Abdelazem</strong>
                </motion.h1>

                <motion.div 
                  variants={itemVariants}
                  style={{ padding: 50, textAlign: "left" }}
                >
                  <Type />
                </motion.div>
              </Col>

              <Col md={5} style={{ paddingBottom: 20 }}>
                <motion.img
                  variants={imageVariants}
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "450px" }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                />
              </Col>
            </Row>
          </Container>
        </motion.div>
      </Container>
      <Home2 />
    </section>
  );
};

export default Home;
