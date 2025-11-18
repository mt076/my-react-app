import React from 'react';
import styles from './Category.module.css';
import Card from '../Card';

function Category({ title, videos }) {
    if (!videos || videos.length === 0) return null;

    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.title}>{title}</h2>
            </div>
            <div className={styles.list}>
                {videos.map(video => (
                    <Card 
                        key={video.id}
                        title={video.title}
                        url={video.url}
                        cover={video.cover}
                    />
                ))}
            </div>
        </section>
    );
}

export default Category;