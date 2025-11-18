import React from 'react';
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.text}>DataMind &copy; 2025. Transformando dados em conhecimento.</p>
        </footer>
    );
}

export default Footer;