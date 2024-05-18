import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages: [
            {id: 1, value: "Javascript", xp:1.8},
            {id: 2, value: "Html, Css", xp:1.8},
            {id: 3, value: "Python", xp:1.8},
            {id: 4, value: "Sql", xp:1.8},
            {id: 1, value: "Java", xp:1.8}
        ],

        frameworks:[
            {id: 1, value: "React", xp:1.8},
            {id: 2, value: "Bootstrap", xp:1.8},
            {id: 3, value: "Sass", xp:1.8},
            {id: 4, value: "Material UI", xp:1.8},
        ]
    }
    render() {
        let {languages, frameworks} = this.state;

        return (
                <div className='languagesFramworks'>
                    <ProgressBar
                        languages={languages}
                        className='languagesDisplay'
                        title='Languages'
                    />
                    <ProgressBar
                        languages={frameworks}
                        className='frameworksDisplay'
                        title='Frameworks'
                    />
                </div>
        );
    }
}

export default Languages;

{/* <div className='languages'>
                        <h2>Languages</h2>
                        <ul>
                            {
                                languages.map(language => {
                                    return (
                                        <li key={language.id}>{language.value}</li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                    <div className='frameworks'>
                        <h2>Frameworks</h2>
                        <ul>
                            {
                                framework.map(framework => {
                                    return (
                                        <li key={framework.id}>{framework.value}</li>
                                    );
                                })
                            }
                        </ul>
                    </div> */}