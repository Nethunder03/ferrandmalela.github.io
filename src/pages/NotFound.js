import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='notFound'>
            <div className='notFoundContent'>
                <h2>Désolé cette page est introuvable </h2>
                <NavLink exact to='/'>
                    <i className='fas fa-home'></i>
                    <span> Retourner à l'accueil</span>
                </NavLink>
            </div>
        </div>
    );
};

export default NotFound;