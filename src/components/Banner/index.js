import React from 'react';
import styles from './Banner.module.css';

function Banner({ title, subtitle }) {
    return (
        <div className={styles.banner}>
            <div className={styles.content}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.subtitle}>
                    {subtitle}
                </p>
            </div>
        </div>
    );
}

export default Banner;