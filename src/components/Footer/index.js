import React from 'react';
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.text}>TechZone &copy; 2025. Todos os direitos reservados.</p>
        </footer>
    );
}

export default Footer;