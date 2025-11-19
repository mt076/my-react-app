import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Banner from '../../components/Banner';
import Category from '../../components/Category';
import ProgressCard from '../../components/ProgressCard'; // Import novo
import Footer from '../../components/Footer';

// Estilo inline para o layout grid da página principal
const layoutStyle = {
    display: 'flex',
    minHeight: '100vh',
    paddingTop: '80px' // Header height
};

const mainContentStyle = {
    marginLeft: '250px', // Sidebar width
    width: 'calc(100% - 250px)',
    display: 'flex',
    flexDirection: 'column'
};

const continueWatchingSection = {
    padding: '20px 40px 0 40px',
    marginBottom: '-20px'
};

const sectionTitle = {
    color: '#d946ef', // Cor diferente para destaque
    fontFamily: 'var(--font-mono)',
    fontSize: '1.2rem',
    marginBottom: '15px',
    display: 'flex',
    alignItems: 'center'
};

function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetch('/db.json')
      .then(response => response.json())
      .then(jsonData => {
        setData(jsonData);
        setTimeout(() => setLoading(false), 500);
      })
      .catch(error => console.error("Erro:", error));
  }, []);

  if (loading) return <div style={{color: '#fff', textAlign: 'center', marginTop: '20%'}}>Carregando sistema...</div>;

  const videos = data?.videos || [];
  const user = data?.user;
  const inProgress = data?.in_progress || [];

  // Filtro
  const filteredVideos = videos.filter(v => 
    v.title.toLowerCase().includes(filter.toLowerCase())
  );

  const categories = [...new Set(filteredVideos.map(video => video.category))];

  return (
    <>
      <Header onSearch={setFilter} user={user} />
      
      <div style={layoutStyle}>
          <Sidebar user={user} />
          
          <main style={mainContentStyle}>
              {!filter && <Banner />}
              
              {/* Seção Continuar Assistindo - Só aparece se não estiver filtrando */}
              {!filter && inProgress.length > 0 && (
                  <div style={continueWatchingSection}>
                      <h3 style={sectionTitle}>&gt; CONTINUAR_ESTUDOS</h3>
                      <div style={{display: 'flex', overflowX: 'auto', paddingBottom: '10px'}}>
                          {inProgress.map(item => (
                              <ProgressCard 
                                  key={item.id}
                                  {...item}
                              />
                          ))}
                      </div>
                  </div>
              )}

              <div style={{padding: '0 40px 40px 40px'}}>
                  {categories.map(category => (
                      <Category 
                        key={category}
                        title={category}
                        videos={filteredVideos.filter(video => video.category === category)}
                      />
                  ))}
              </div>
              <Footer />
          </main>
      </div>
    </>
  );
}

export default Home;