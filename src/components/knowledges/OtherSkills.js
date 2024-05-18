import React from 'react';

const OtherSkills = () => {
    return (
        <div className='otherSkilld'>
            <h3>Autres comptétences</h3>
            <div className='list'>
                <ul>
                    <li><i className='fas fa-check-square'></i>Anglais courant</li>
                    <li><i className='fa-brands fa-github'></i>Github</li>
                    <li><i className='fas fa-check-square'></i>SEO</li>
                    <li><i className='fas fa-check-square'></i>Méthode agiles</li>
                </ul>

                <ul>
                    <li><i className='fas fa-check-square'></i>ProwerBI / Tableau Desktop</li>
                    <li><i className='fas fa-check-square'></i>NoSQL</li>
                    <li><i className='fa-brands fa-docker'></i>Docker</li>
                    <li><i className='fas fa-check-square'></i>API</li>
                </ul>
            </div>
        </div>
    );
};

export default OtherSkills;