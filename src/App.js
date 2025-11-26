import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Container from './components/Container';
import Category from './components/Category';
import Footer from './components/Footer';

function App() {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch('/db.json');
        const data = await response.json();
        setContent(data.videos);
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      } finally {
        setTimeout(() => setLoading(false), 800);
      }
    };

    loadData();
  }, []);

  const getCategories = () => {
    const groups = {};
    
    content.forEach(video => {

      if (filter && !video.title.toLowerCase().includes(filter.toLowerCase())) {
        return;
      }

      if (!groups[video.category]) {
        groups[video.category] = [];
      }
      groups[video.category].push(video);
    });

    return groups;
  };

  const categoriesToDisplay = getCategories();

  return (
    <>
      <Header onSearch={setFilter} />
      <Banner />
      
      <Container>
        {loading ? (
          <div style={{ textAlign: 'center', padding: '50px', color: '#94a3b8' }}>
            <h2>Carregando biblioteca...</h2>
          </div>
        ) : (
          <>
            {Object.keys(categoriesToDisplay).length > 0 ? (
              Object.keys(categoriesToDisplay).map(categoryTitle => (
                <Category 
                  key={categoryTitle}
                  title={categoryTitle}
                  videos={categoriesToDisplay[categoryTitle]}
                />
              ))
            ) : (
              <div style={{ textAlign: 'center', padding: '50px', color: '#94a3b8' }}>
                <h2>Nenhum conteúdo encontrado para "{filter}"</h2>
              </div>
            )}
          </>
        )}
      </Container>

      <Footer />
    </>
  );
}

export default App;