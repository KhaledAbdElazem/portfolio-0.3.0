
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import store2 from "../../assets/Projects/Store2.png";
import task from "../../assets/Projects/Task.png";
import game from "../../assets/Projects/Game.png";
import store from "../../assets/Projects/Store.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I&#39;ve worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={game}
              isBlog={false}
              title="Hue-Game"
              description="Hue Color Puzzle Game is a relaxing and elegant puzzle game where players need to arrange tiles according to their hues. The game offers a basic mode with multiple levels and provides AI hints to assist players when needed."
              ghLink="https://github.com/KhaledAbdElazem/AI_Hue_Color_Puzzle_game"
              demoLink="https://hue-colors.giize.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={store}
              isBlog={false}
              title="Online-Store"
              description="Our e-commerce platform provides a seamless shopping experience with a wide range of products, from fashion to electronics. Users can easily browse best-sellers, view detailed descriptions, and add items to their cart. With secure checkout and AI-powered recommendations, we ensure a smooth and personalized shopping journey. Quality and customer satisfaction are our top priorities."
              ghLink="https://github.com/KhaledAbdElazem/Online-Store-Frontend"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={task}
              isBlog={false}
              title="React-Task-Manager"
              description="This React-based To-Do List app allows users to easily add, edit, or delete tasks. It features a clean, intuitive UI, making task management simple and efficient. Perfect for organizing daily tasks with a sleek design and responsive functionality."
              ghLink="https://github.com/KhaledAbdElazem/TODO_LIST_REACT"
              // demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={store2}
              isBlog={false}
              title="Pure-Online-Store"
              description="AKATSUKE is a premium e-commerce platform offering a wide range of stylish products, from backpacks to casual wear. With a clean interface and easy navigation, users can explore high-quality items for everyday use. Shop now for a seamless, top-tier shopping experience."
              ghLink="https://github.com/KhaledAbdElazem/Pure-Online-Store"
              demoLink=" http://pure-online-store.giize.com/"
            />
          </Col>
{/* 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
