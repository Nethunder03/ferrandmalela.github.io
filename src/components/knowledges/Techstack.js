import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiReact,
  DiMongodb,
  DiPython,
  DiGit,
  DiSpark,
} from "react-icons/di";
import {
  SiPowerbi,
  SiTableau,
  SiFirebase,
  SiNextdotjs,
  SiDocker,
  SiPostgresql,
  SiFlutter,
  SiMysql,
} from "react-icons/si";
import TooltipItem from './TooltipItem';


function Techstack() {

  return (
    <Row className="tech-row" style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <TooltipItem title="Apache_Spark">
        <Col xs={4} md={2} className="tech-icons">
          <DiSpark />
        </Col>
      </TooltipItem>
      <TooltipItem title="Microsoft_Power_BI">
        <Col xs={4} md={2} className="tech-icons">
          <SiPowerbi />
        </Col>
      </TooltipItem>
      <TooltipItem title="Flutter_(logiciel)">
        <Col xs={4} md={2} className="tech-icons">
          <SiFlutter />
        </Col>
      </TooltipItem>
      
      <TooltipItem title="MySQL">
        <Col xs={4} md={2} className="tech-icons">
          <SiMysql />
        </Col>
      </TooltipItem>
      
      <TooltipItem title="React">
        <Col xs={4} md={2} className="tech-icons">
          <DiReact />
        </Col>
      </TooltipItem>
      
      <TooltipItem title="Docker_(logiciel)">
        <Col xs={4} md={2} className="tech-icons">
          <SiDocker />
        </Col>
      </TooltipItem>
      
      <TooltipItem title="MongoDB">
        <Col xs={4} md={2} className="tech-icons">
          <DiMongodb />
        </Col>
      </TooltipItem>
      <TooltipItem title="Next.js">
        <Col xs={4} md={2} className="tech-icons">
          <SiNextdotjs />
        </Col>
      </TooltipItem>
      
      <TooltipItem title="Git">
        <Col xs={4} md={2} className="tech-icons">
          <DiGit />
        </Col>
      </TooltipItem>
      
      <TooltipItem title="Firebase">
        <Col xs={4} md={2} className="tech-icons">
          <SiFirebase />
        </Col>
      </TooltipItem>
      
      <TooltipItem title="Tableau_Software">
        <Col xs={4} md={2} className="tech-icons">
          <SiTableau />
        </Col>
      </TooltipItem>
      
      <TooltipItem title="PostgreSQL">
        <Col xs={4} md={2} className="tech-icons">
          <SiPostgresql />
        </Col>
      </TooltipItem>
      
      <TooltipItem title="Python_(programming_language)">
        <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      </TooltipItem>
    </Row>
  );
}

export default Techstack;
