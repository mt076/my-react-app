
import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Banner from '../../components/Banner';
import Category from '../../components/Category';
import ProgressCard from '../../components/ProgressCard';
import Header from '../../components/Header'; 
import { useVideos } from '../../useVideos'; 

const layoutStyle = {
    display: 'flex',
    minHeight: '100vh',
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
    color: '#d946ef', 
    fontFamily: 'var(--font-mono)',
    fontSize: '1.2rem',
    marginBottom: '15px',
    display: 'flex',
    alignItems: 'center'
};

function Home() {
  const [filter, setFilter] = useState(''); 

  const { loading, user, inProgress, getCategories } = useVideos();

  if (loading) return <div style={{color: '#fff', textAlign: 'center', marginTop: '20%'}}>Carregando sistema...</div>;

  const categories = getCategories(filter);

  return (
    <>
      <Header onSearch={setFilter} user={user} />
      
      <div style={layoutStyle}>
          <Sidebar user={user} />
          
          <main style={mainContentStyle}>
              {!filter && <Banner />}
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
                  {/* [MODIFICADO] Iterando sobre as categorias retornadas pelo getCategories(filter) */}
                  {categories.map(category => (
                      <Category 
                        key={category.title}
                        title={category.title}
                        videos={category.videos}
                      />
                  ))}

                  {/* [NOVO] Mensagem de feedback caso nenhum vídeo seja encontrado */}
                  {filter && categories.length === 0 && (
                    <h3 style={{color: '#d946ef', marginTop: '40px', textAlign: 'center'}}>&gt; Nenhum módulo encontrado com "{filter}"</h3>
                  )}
              </div>
          </main>
      </div>
    </>
  );
}

export default Home;