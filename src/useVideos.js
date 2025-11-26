
import { useState, useEffect, useCallback } from 'react';

export function useVideos() {
  const [videos, setVideos] = useState([]);
 
  const [user, setUser] = useState(null); 
  const [inProgress, setInProgress] = useState([]); 

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        const response = await fetch('/db.json');
        if (!response.ok) {
          throw new Error('Falha ao buscar os dados.');
        }
        const data = await response.json();
        setTimeout(() => {
            setVideos(data.videos);
            setUser(data.user);
            setInProgress(data.in_progress || []);
            setLoading(false);
        }, 800);
      } catch (err) {
        setError(err.message);
        setLoading(false);
        console.error("Erro ao carregar dados:", err);
      }
    };

    fetchVideos();
  }, []);

  const getCategories = useCallback((filter) => {
    const filteredVideos = filter 
      ? videos.filter(video => video.title.toLowerCase().includes(filter.toLowerCase()))
      : videos;

    return Object.values(filteredVideos.reduce((acc, video) => {
        (acc[video.category] = acc[video.category] || { title: video.category, videos: [] }).videos.push(video);
        return acc;
    }, {}));
  }, [videos]);

  // [MODIFICADO] Retornando user e inProgress junto aos outros estados
  return { videos, user, inProgress, loading, error, getCategories };
  // [/MODIFICADO]
}