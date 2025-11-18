import React from 'react';
import styles from './Card.module.css';

function Card({ title, url, cover, category }) {
    return (
        <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.card}
        >
            <div className={styles.imageContainer}>
                <img src={cover} alt={title} className={styles.cover} />
            </div>
            <div className={styles.info}>
                <h3 className={styles.title}>{title}</h3>
                <span className={styles.tag}>Assistir agora</span>
            </div>
        </a>
    );
}

export default Card;