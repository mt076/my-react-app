import React from 'react';
import styles from './Page404.module.css'; // Crie um css básico se quiser

function Page404() {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '60vh', color: 'white'}}>
            <h2 style={{fontSize: '4rem', color: 'var(--accent)'}}>404</h2>
            <p>Falha no sistema. Página não encontrada.</p>
        </div>
    );
}
export default Page404;