import React from 'react';

const Hobbies = () => {
    return (
        <div className='hobbies'>
            <h3>Intérêts</h3>
            <ul>
                <li className='hobby'>
                    <i className='fa-solid fa-laptop-code'></i>
                    <sapan> Veille Informatique</sapan>
                </li>
                <li className='hobby'>
                    <i className='fa-solid fa-music'></i>
                    <sapan> Musique</sapan>
                </li>
                <li className='hobby'>
                <i className='fa-solid fa-running'></i>
                    <sapan> Sport</sapan>
                </li>
                <li className='hobby'>
                <i className='fa-solid fa-book-open'></i>
                    <sapan> Lecture</sapan>
                </li>
                < li className='hobby'>
                <i className='fa-solid fa-gamepad'></i>
                    <sapan>Jeux de stratégie</sapan></li>
                    < li className='hobby'>
                <i className='fa-solid fa-book-open'></i>
                    <sapan>Jeux de </sapan></li>

            </ul>
        </div>
    );
};

export default Hobbies;