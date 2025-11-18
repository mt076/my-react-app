.card {
    flex: 0 0 auto;
    width: 300px;
    background-color: var(--bg-secondary);
    border-radius: 12px;
    overflow: hidden;
    text-decoration: none;
    transition: transform 0.3s, box-shadow 0.3s;
    position: relative;
    border: 1px solid rgba(255,255,255,0.05);
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.4);
    border-color: var(--accent);
}

.imageContainer {
    width: 100%;
    height: 160px;
    overflow: hidden;
}

.cover {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;
}

.card:hover .cover {
    transform: scale(1.1);
}

.info {
    padding: 15px;
}

.title {
    color: var(--text-primary);
    font-size: 1rem;
    font-weight: 600;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.tag {
    display: inline-block;
    font-size: 0.7rem;
    background-color: rgba(245,158,11,0.2);
    color: var(--accent);
    padding: 4px 8px;
    border-radius: 4px;
    margin-top: 8px;
    font-weight: bold;
}