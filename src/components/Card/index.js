import React from 'react';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';

function Card({ id, title, cover }) { // Note que agora recebemos o ID explicitamente
    return (
        <Link 
            to={`/watch/${id}`} 
            className={styles.card}
        >
            <div className={styles.imageContainer}>
                <img src={cover} alt={title} className={styles.cover} />
            </div>
            <div className={styles.info}>
                <h3 className={styles.title}>{title}</h3>
                <span className={styles.tag}>Acessar Dados</span>
            </div>
        </Link>
    );
}

export default Card;