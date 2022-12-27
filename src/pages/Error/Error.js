import React from 'react';
import { Link } from 'react-router-dom'
import './error.css'

const Error = () => {
    return (
            <main className="page-404">
                <h1 className="titre-404">404</h1>
                <span className="description-404">Oups! La page que vous demandez n'existe pas.</span>
                <Link to='/' className='retour'>Retourner sur la page d'accueil</Link>
            </main>
    );
};

export default Error;