import React from "react";
import Particle from "../Particle";
import Type from "./Type";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
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

  const fadeInVariant = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1.5 } },
    exit: { opacity: 0, transition: { duration: 1.5 } },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const fadeUpVariant = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.div
      variants={fadeInVariant}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <motion.div variants={staggerContainer} animate="animate">
            <Row>
              <Col md={7} className="home-header">
                <motion.h1
                  style={{ paddingBottom: 15 }}
                  className="heading"
                  variants={fadeUpVariant}
                >
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </motion.h1>

                <motion.h1
                  className="heading-name"
                  variants={fadeUpVariant}
                >
                  I'M
                  <strong className="main-name"> Md Emamul Mursalin</strong>
                </motion.h1>

                <motion.div
                  style={{ padding: 50, textAlign: "left" }}
                  variants={fadeUpVariant}
                >
                  <Type />
                </motion.div>
              </Col>

              <Col md={4} className="myAvatar">
                <Tilt>
                  <motion.img
                    src="\src\Assets\avatar.png"
                    className="img-fluid"
                    alt="avatar"
                    style={{ borderRadius: "100%" }}
                    variants={floatVariant}
                    animate="animate"
                  />
                </Tilt>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </Container>
    </motion.div>
  );
}

export default Home;
