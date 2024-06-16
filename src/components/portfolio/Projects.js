import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import ProjectList from "./ProjectList";
import { FaChartPie, FaLaptopCode } from 'react-icons/fa';

class Projects extends Component {
    state = {
        radios: [
        { id: 1, value: "Tout", icon: <i className='fa-solid fa-rectangle-list'></i> },
        { id: 2, value: "Big Data", icon: <i className='fa-solid fa-database'></i> },
        { id: 3, value: "Data Science", icon: <FaChartPie /> },
        { id: 4, value: "DevWeb", icon: <FaLaptopCode /> },
        ],
        selectedRadio: 'Tout',
        projects: []
    };

    componentDidMount() {
        this.fetchProjects();
    }

    fetchProjects = async () => {
        try {
        const response = await fetch('https://api.github.com/users/Nethunder03/repos');
        const data = await response.json();
        console.log('Fetched data:', data);
        if (Array.isArray(data)) {
            const projectsWithImages = data.map(project => {
            const imageUrl = `/images/projects/${project.name}.png`;
            return {
                ...project,
                imageUrl
            };
            });
            console.log('Projects with images:', projectsWithImages);
            this.setState({ projects: projectsWithImages });
            localStorage.setItem('projects', JSON.stringify(projectsWithImages)); // Mettre en cache les projets
        } else {
            console.error('Error: GitHub API response is not an array', data);
        }
        } catch (error) {
        console.error('Error fetching the repos:', error);
        const cachedProjects = localStorage.getItem('projects');
        if (cachedProjects) {
            this.setState({ projects: JSON.parse(cachedProjects) });
        }
        }
    };

    handleRadio = (event) => {
        let radio = event.target.value;
        this.setState({
        selectedRadio: radio
        });
    };

    filterProjects = (projects, category) => {
        if (category === 'Tout') {
        return projects;
        }
        return projects.filter(project => {
        if (category === "Big Data" && project.topics.includes("big-data")) return true;
        if (category === "Data Science" && project.topics.includes("data-science")) return true;
        if (category === "DevWeb" && project.topics.includes("web-development")) return true;
        return false;
        });
    };

    render() {
        let { radios, selectedRadio, projects } = this.state;
        const filteredProjects = this.filterProjects(projects, selectedRadio) || [];

        return (
        <div>
            <div className='portfolioContent'>
            <ul className='radioDisplay'>
                {
                radios.map((radio) => (
                    <li key={radio.id}>
                    <input
                        type="radio"
                        checked={radio.value === selectedRadio}
                        value={radio.value}
                        id={radio.value}
                        onChange={this.handleRadio}
                    />
                    <label htmlFor={radio.value}>
                        <i>{radio.icon}</i><span>{radio.value}</span>
                    </label>
                    </li>
                ))
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
                    {
                    filteredProjects.map(project => (
                        <Col md={4} className="project-card" key={project.id}>
                        <ProjectList
                            imgPath={project.imageUrl}
                            isBlog={false}
                            title={project.name}
                            description={project.description}
                            ghLink={project.html_url}
                            demoLink={project.homepage} // Si disponible
                        />
                        </Col>
                    ))
                    }
                </Row>
                </Container>
            </Container>
            </div>
        </div>
        );
    }
}

export default Projects;
