import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div>
            <h1>Página Principal</h1>
            <Link to="/test-ref">Ir para a Página de Testes</Link>
        </div>
    );
}

export default HomePage;