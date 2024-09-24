import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/profile.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillFacebook } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Home2: React.FC = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>
            <p className="home-about-body">
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
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/KhaledAbdElazem"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/khaled-abd-elazem-a0b106310"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/profile.php?id=100073468527492"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Home2;
