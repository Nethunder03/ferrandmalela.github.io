import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div  className='home'>
            <Navigation/>
            <div className='homeContent'>
                <div className='content'>
                    <h1>Rock Ferrand MALELA</h1>
                    <h2>Data Scientist Junior</h2>
                    <div className='pdf'>
                        <a href='https://drive.google.com/file/d/1-2-3/view?usp=sharing' target='_blank' rel='noreferrer'>Télécharger CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;