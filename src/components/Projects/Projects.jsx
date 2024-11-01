import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import atc from "../../Assets/Projects/atc.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={atc}
              isBlog={false}
              title="ATC Soft Academy Website"
              description="

Developed a comprehensive website for ATC Soft Academy, enabling students to browse and enroll in courses. The website features a seamless payment integration with SSLCommerz, providing a smooth and secure transaction experience for users."
              ghLink="https://github.com/emamulmursalin47/ATC-Tech-Course-Catalog3"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Pharmacy Management System"
              description="Pharmacy Managament System
I have completed this project using Java programming language on NetBeans IDE. In this project, I have made use of my knowledge of Object-oriented programming, MySQL & Apache Server.

Tools: NetBeans IDE, Apache Server
Register/login to the the app.
Manage Medicines.
Manage Companies
Manage Agents
Print Bill"
              ghLink="https://github.com/emamulmursalin47/Pharmacy-Management-System-using-Java-with-JDBC-on-NetBeans"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="eCommerce Website wiht Python"
              description="Tools: PHP, HTML, CSS, Bootstrap, SQLite
User Register/login to the web app.
Admin Login
Shop By Category
Surf Recently Added Products
Shopping Cart"
              ghLink="https://github.com/emamulmursalin47/Professional_Ecommerce_Website_PHP"
           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Amazon Website Clone"
              description="Tools: HTML, CSS, JavaScript
Users can view posts and contact the admin via Contact Page.
Admin can Add, Delete, Update posts."
              ghLink="https://github.com/emamulmursalin47/Amazon_HomePage_Clone_using_HTML_CSS_Basics"
              demoLink="https://amazon-clone-hpage.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Rock, Paper, Scissors Game with Vanilla JavaScript"
              description="Simple Rock Paper Scissor Game
A simple rock paper scissor game using html css javascript

Tools: HTML, CSS, JavaScript
Players can play the game with the computer."
              ghLink="https://github.com/emamulmursalin47/Rock-scissor-paper-simple-game-with-HTML_CSS_JS"
              demoLink="https://rock-paper-scissor-sithi.netlify.app/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
