import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import ProjectList from "./ProjectList";
import logo1 from "../letters-fm.png";
import { FaDatabase, FaChartPie, FaLaptopCode, FaThList } from 'react-icons/fa';


class Projects extends Component {
    state = {
        radios: [
            {id: 1, value: "Tout",icon: <i class='fa-solid fa-rectangle-list'></i>},
            {id: 2, value: "Big Data",icon: <i class='fa-solid fa-database'></i>},
            {id: 3, value: "Data Science", icon: <FaChartPie />},
            {id: 4, value: "DevWeb", icon: <FaLaptopCode />},
        ],
        selectedRadio: 'Tout'

        };

    handleRadio = (event) => {
        let radio = event.target.value;
        this.setState({
            selectedRadio: radio
        })
    }

    render() {
        let {radios, selectedRadio} = this.state;
        return (
            <div>
            <div className='portfolioContent'>
                <ul className='radioDisplay'>
                    {
                        radios.map((radio) => {
                            return (
                                <li key={radio.id}
                                    checked={radio.value === selectedRadio}
                                    value={radio.value}
                                    id={radio.value}
                                    onChange={this.handleRadio}
                                    >
                                    <label htmlFor={radio.value} for={radio.value}><i>{radio.icon}</i><span>{radio.value}</span></label>
                                </li>
                            )
                        })
                    }
                </ul>
                </div>
                <div>
                <Container fluid className="project-section">
                    <Container>
                        <h1 className="project-heading">
                        My Recent <strong className="purple">Works </strong>
                        </h1>
                        <p style={{ color: "white" }}>
                        Here are a few projects I've worked on recently.
                        </p>
                        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                        <Col md={4} className="project-card">
                            <ProjectList
                            imgPath={logo1}
                            isBlog={false}
                            title="Chatify"
                            description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
                            ghLink="https://github.com/soumyajit4419/Chatify"
                            demoLink="https://chatify-49.web.app/"
                            />
                        </Col>
                        </Row>
                        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

                        <Col md={4} className="project-card">
                            <ProjectList
                            //imgPath={leaf}
                            isBlog={false}
                            title="Projet 1"
                            description="Description"
                            ghLink="https://github.com/Nethunder03"
                            demoLink="https://plant49-ai.herokuapp.com/"
                            />
                        </Col>

                        <Col md={4} className="project-card">
                            <ProjectList
                            //imgPath={emotion}
                            isBlog={false}
                            title="Projet 2"
                            description="Description"
                            ghLink="https://github.com/Nethunder03"
                            // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
                            />
                        </Col>
                        </Row>
                    </Container>
                </Container>

                <Container fluid className="project-section">
                    <Container>
                        <h1 className="project-heading">
                        Mes <strong className="purple">Projets </strong>recent
                        </h1>
                        <p style={{ color: "white" }}>
                        ...
                        </p>
                    </Container>
                    </Container>
                </div></div>
        );
    }
}

export default Projects;
