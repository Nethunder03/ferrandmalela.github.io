import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiSlack,
  SiGooglecolab,
  SiAnaconda,
  SiAndroidstudio,
} from "react-icons/si";

function Toolstack() {
    return (
        <Row className="tech-row" style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
            <SiAndroidstudio />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiVisualstudiocode />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiSlack />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiGooglecolab />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiAnaconda />
        </Col>
        </Row>
    );
}

export default Toolstack;
