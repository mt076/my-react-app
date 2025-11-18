import React from 'react';
import styles from './Loading.module.css';

function Loading() {
    return (
        <div className={styles.container}>
            <div className={styles.spinner}></div>
            <h2 className={styles.text}>Carregando biblioteca...</h2>
        </div>
    );
}

export default Loading;