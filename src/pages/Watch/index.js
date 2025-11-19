import React, { useEffect, useState } from 'react';
import styles from './Watch.module.css';
import { useParams, Link } from 'react-router-dom';
import Page404 from '../Page404';

function Watch() {
    const { id } = useParams();
    const [video, setVideo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        // Busca os dados do db.json para confirmar se o vídeo existe
        fetch('/db.json')
            .then(response => response.json())
            .then(data => {
                const foundVideo = data.videos.find(v => v.id === id);
                if (foundVideo) {
                    setVideo(foundVideo);
                } else {
                    setError(true);
                }
                setLoading(false);
            })
            .catch(() => {
                setError(true);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div style={{textAlign:'center', marginTop:'100px', color: '#fff'}}>Carregando player...</div>;
    if (error) return <Page404 />;

    return (
        <div className={styles.container}>
            <Link to="/" className={styles.backButton}>&lt; Voltar para Home</Link>
            
            <div className={styles.contentWrapper}>
                <iframe 
                    className={styles.playerContainer}
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                ></iframe>
                
                <h1 className={styles.title}>{video.title}</h1>
                <p className={styles.category}>Categoria: {video.category}</p>
            </div>
        </div>
    );
}

export default Watch;