import React from 'react';
import styles from './ProgressCard.module.css';
import { Link } from 'react-router-dom';

function ProgressCard({ id, title, cover, progress }) {
    return (
        <Link to={`/watch/${id}`} className={styles.card}>
            <div className={styles.percentage}>{progress}%</div>
            <img src={cover} alt={title} className={styles.thumbnail} />
            <div className={styles.info}>
                <div className={styles.title}>{title}</div>
                <div className={styles.barBg}>
                    <div 
                        className={styles.barFill} 
                        style={{width: `${progress}%`}}
                    ></div>
                </div>
            </div>
        </Link>
    );
}

export default ProgressCard;