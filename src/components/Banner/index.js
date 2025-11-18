import React from 'react';
import styles from './Banner.module.css';

function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.content}>
                <h1 className={styles.title}>Domine os Dados</h1>
                <p className={styles.subtitle}>
                    Explore o universo da Inteligência Artificial, Ciência de Dados e Machine Learning.
                </p>
            </div>
        </div>
    );
}

export default Banner;