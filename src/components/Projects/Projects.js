import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ehealth from "../../Assets/Projects/e-health.png";
import univpdf from "../../Assets/Projects/univpdf.png";
import attendance from "../../Assets/Projects/attendance.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={univpdf}
              isBlog={false}
              title="Univpdf"
              description="UnivPDF is a website where users can download and share academic files like articles, research papers, lectures, books, and course materials. It offers a global user base easy access to these files and includes a search function for specific needs. Users can upload and share their own files, and the site has a simple interface with a vast collection of educational resources.  "
              ghLink="https://github.com/FeraounAbdelAziz/univpdf_v2"
              demoLink="https://univpdf-v2.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={attendance}
              isBlog={false}
              title="EZ Attendance"
              description="The EZ Attendance app was built using the Ionic framework for multi-platform support with HTML, CSS, and JavaScript. Supabase served as the real-time database using PostgreSQL. Integration with Ionic React enhanced development efficiency. Overall, EZ Attendance offers seamless attendance logging across platforms.My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/FeraounAbdelAziz/ez-attendance-app"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ehealth}
              isBlog={false}
              title="E-Health"
              description="E-Health is a bridge between doctors and patients, enabling patients to communicate with doctors and share their health information internally across a unified network!"
              ghLink="https://github.com/FeraounAbdelAziz/my-app"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
