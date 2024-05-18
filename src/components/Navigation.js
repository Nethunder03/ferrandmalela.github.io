import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <div className='sidebar'>
                <div className='id'>
                    <div className='idContent'>
                        <img src="photo.jpg" alt='ma photo'/>
                        <h3>Rock Ferrand MALELA</h3>
                    </div>
                </div>
            </div>

            <div className='navigation'>
                <ul>
                    <li>
                        <NavLink exact to='/' activeClassName='navActive'>
                            <i className='fas fa-home'></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/competences' activeClassName='navActive'>
                        <i className='fas fa-brain'></i>
                        <span>Compétences</span>
                    </NavLink>
                    </li>
                    <li>
                        <NavLink to='/portfolio' activeClassName='navActive'>
                        <i className='fas fa-images'></i>
                        <span>Portfolio</span>
                    </NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' activeClassName='navActive'>
                        <i className='fas fa-address-book'></i>
                        <span>Contact</span>
                    </NavLink>
                    </li>
                </ul>
            </div>

            <div className='social-link'>
                <ul>
                    <li>
                        <a href='https://www.whatsapp.com/+22178605036/' target='_blank' rel='noopener noreferrer'><i className='fa-brands fa-whatsapp'></i></a>
                    </li>
                    <li>
                        <a href='https://www.telegram.com/@whisperback/' target='_blank' rel='noopener noreferrer'><i className='fa-brands fa-telegram'></i></a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/rock-ferrand-malela-4a5b491a9/' target='_blank' rel='noopener noreferrer'><i className='fa-brands fa-linkedin'></i></a>
                    </li>
                    <li>
                        <a href='https://twitter.com/RockFerrand' target='_blank' rel='noopener noreferrer'><i className='fa-brands fa-x-twitter'></i></a>
                    </li>
                    <li>
                        <a href='https://github.com/RockFerrand' target='_blank' rel='noopener noreferrer'><i className='fa-brands fa-github'></i></a>
                    </li>
                </ul>
            </div>
            <div className='signature'>
                <p>&copy;  (2024) Rock Ferrand MALELA</p>
            </div>

        </div>
    );
};

export default Navigation;