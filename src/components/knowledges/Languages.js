import React, { Component } from 'react';
import ProgressBar from './ProgressBar';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

class Languages extends Component {
    state = {
        selectedFramework: 'PythonLibraries',
        languages: [
            {id: 1, value: "Javascript", xp: 0.9},
            {id: 2, value: "Html, Css", xp: 2.0},
            {id: 3, value: "Python", xp: 1.0},
            {id: 4, value: "Sql", xp: 1.2},
            {id: 5, value: "Java", xp: 0.3}
        ],
        frameworks: {
            PythonLibraries: [
                {id: 1, value: "NumPy", xp: 1.0},
                {id: 2, value: "Pandas", xp: 1.0},
                {id: 3, value: "Scikit-learn", xp: 1.0},
                {id: 4, value: "Matplotlib", xp: 1.0},
                {id: 5, value: "Seaborn", xp: 1.0},
                {id: 6, value: "SciPy", xp: 1.0},

            ],
            RLibraries: [
                {id: 7, value: "ggplot2", xp: 1.0},
                {id: 8, value: "dplyr", xp: 1.0},
                {id: 9, value: "caret", xp: 1.0},
                {id: 10, value: "shiny", xp: 1.0},
                ],
            BigData: [
                {id: 11, value: "Apache Spark", xp: 1.0},
                {id: 12, value: "Hadoop", xp: 1.0},
                ],
            DataVisualization: [
                {id: 13, value: "Tableau", xp: 1.0},
                {id: 14, value: "Power BI", xp: 1.0},
                {id: 15, value: "Plotly", xp: 1.0},
                {id: 16, value: "Bokeh", xp: 1.0}
                ],
            DeploymentAndContainerization: [
                {id: 17, value: "Docker", xp: 1.0},
                {id: 18, value: "Kubernetes", xp: 1.0},
                ],
            CloudServices: [
                {id: 19, value: "AWS SageMaker", xp: 1.0},
                {id: 20, value: "Google Cloud AI Platform", xp: 1.0},
                {id: 21, value: "Microsoft Azure Machine Learning", xp: 1.0}
                ],
            MLOps: [
                {id: 22, value: "Kubeflow", xp: 1.0},
                {id: 23, value: "DataRobot", xp: 1.0},
                {id: 24, value: "Airflow", xp: 1.0}
                ]
            },
    };

    handleFrameworkChange = (selectedFramework) => {
        this.setState({ selectedFramework });
    };

    render() {
        const { languages, frameworks, selectedFramework } = this.state;
        const frameworkItems = frameworks[selectedFramework];

        return (
            <div className='languagesFrameworks'>
                <ProgressBar
                    items={languages}
                    className='languagesDisplay'
                    title='Languages'
                />
                <h3>Frameworks</h3>
                <div className='frameworksIcons'>
                    {Object.keys(frameworks).map((key) => (
                        <div
                            key={key}
                            className={`frameworkIcon ${selectedFramework === key ? 'active' : ''}`}
                            onClick={() => this.handleFrameworkChange(key)}
                        >
                            <i className={`fas ${this.getFrameworkIconClass(key)}`}></i>
                        </div>
                    ))}
                </div>
                <ProgressBar
                    items={frameworkItems}
                    className='frameworksDisplay'
                    title={selectedFramework.replace(/([A-Z])/g, ' $1').trim()}
                />
            </div>
        );
    }

    getFrameworkIconClass(key) {
        const iconMap = {
            PythonLibraries: 'fa-brands fa-python',
            RLibraries: 'fa-brands fa-r-project',
            BigData: 'fa-database',
            DataVisualization: 'fa fa-bar-chart',
            DeploymentAndContainerization: 'fa-solid fa-server',
            CloudServices: 'fa-cloud',
            MLOps: 'fa-cogs'
        };
        return iconMap[key] || 'fa-tools';
    }
}

export default Languages;
