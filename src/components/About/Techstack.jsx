import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiPhp,
  DiPython,
  DiGit,
  DiJava,
  DiCss3Full,
} from "react-icons/di";
import { SiMysql, SiBootstrap, SiTailwindcss } from "react-icons/si";
import { TbHtml } from "react-icons/tb";
import { motion } from "framer-motion";

function Techstack() {
  const slideInLeft = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {[DiPhp, DiJavascript1, DiReact, TbHtml, DiCss3Full, DiGit, SiTailwindcss, SiBootstrap, SiMysql, DiPython, DiJava].map((Icon, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <motion.div
            variants={slideInLeft}
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

export default Techstack;
