import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function About() {
  // Variants for animations
  const fadeInVariant = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const floatVariant = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Refs for in-view animations
  const headerRef = useRef(null);
  const aboutCardRef = useRef(null);
  const skillsetRef = useRef(null);
  const toolsRef = useRef(null);
  const githubRef = useRef(null);

  // Setting up in-view animations for each section
  const headerInView = useInView(headerRef, { once: true });
  const aboutCardInView = useInView(aboutCardRef, { once: true });
  const skillsetInView = useInView(skillsetRef, { once: true });
  const toolsInView = useInView(toolsRef, { once: true });
  const githubInView = useInView(githubRef, { once: true });

  return (
    <motion.div initial="initial" animate="animate" exit="exit">
      <Container fluid className="about-section">
        <Particle />
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <motion.div
                ref={headerRef}
                variants={fadeInVariant}
                animate={headerInView ? "animate" : "initial"}
              >
                <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                  Know Who <strong className="purple">I'M</strong>
                </h1>
              </motion.div>
              <motion.div
                ref={aboutCardRef}
                variants={fadeInVariant}
                animate={aboutCardInView ? "animate" : "initial"}
              >
                <Aboutcard />
              </motion.div>
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "0px", paddingBottom: "80px" }}
              className="about-img"
            >
              <motion.img
                src={laptopImg}
                alt="about"
                variants={floatVariant}
                className="img-fluid"
                animate="animate"
              />
            </Col>
          </Row>

          <motion.div
            ref={skillsetRef}
            variants={fadeInVariant}
            animate={skillsetInView ? "animate" : "initial"}
          >
            <h1 className="project-heading">
              Professional <strong className="purple">Skillset</strong>
            </h1>
            <Techstack />
          </motion.div>

          <motion.div
            ref={toolsRef}
            variants={fadeInVariant}
            animate={toolsInView ? "animate" : "initial"}
          >
            <h1 className="project-heading">
              <strong className="purple">Tools</strong> I use
            </h1>
            <Toolstack />
          </motion.div>

          <motion.div
            ref={githubRef}
            variants={fadeInVariant}
            animate={githubInView ? "animate" : "initial"}
          >
            <Github />
          </motion.div>
        </Container>
      </Container>
    </motion.div>
  );
}

export default About;
