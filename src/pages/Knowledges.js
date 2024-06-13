import React from 'react';
import Navigation from '../components/Navigation';
import Experience from '../components/knowledges/Experience';
import Languages from '../components/knowledges/Languages';
import Hobbies from '../components/knowledges/Hobbies';
// import Toolstack from '../components/knowledges/Toolstack';
import Techstack from '../components/knowledges/Techstack';


const Knowledges = () => {
    return (

        <div className='knowledges'>
            <Navigation/>
            <div className='knowledgesContent'>
                <Languages/>
                <Experience/>
                <Hobbies/>
                <Techstack/>
            </div>
        </div>
    );
};

export default Knowledges;