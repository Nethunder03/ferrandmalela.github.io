import React from 'react';
import Navigation from '../components/Navigation';
import Projects from '../components/portfolio/Projects';

const Portfolio = () => {
    return (
        <div className='portfolio'>
            <Navigation/>
            <Projects/>
        </div>
    );
};

export default Portfolio;