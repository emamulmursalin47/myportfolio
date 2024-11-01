import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiLinux, SiPycharm, SiCpanel, SiGithub, SiMiro } from "react-icons/si";
import { motion } from "framer-motion";

function Toolstack() {
  const slideInRight = {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {[SiLinux, SiPycharm, SiCpanel, SiGithub, SiMiro].map((Icon, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <motion.div
            variants={slideInRight}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Icon />
          </motion.div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
