import React, { useState, useMemo } from 'react';
import './App.css'; 
import Header from './components/Header';
import Banner from './components/Banner';
import Container from './components/Container';
import Categoria from './components/Banner/Categoria'; // CORRIGIDO: O nome do componente é Categoria
import Footer from './components/Footer';
import Loading from './components/Banner/Categoria/index.js'; // CORRIGIDO: O código do Loading está neste arquivo
import { useVideos } from './useVideos'; // Corrigido: O hook está na raiz de /src

function App() {
  const [filter, setFilter] = useState('');
  const { loading, error, getCategories } = useVideos();
  
  // useMemo garante que as categorias só são recalculadas se o filtro mudar.
  const categoriesToDisplay = useMemo(() => getCategories(filter), [filter, getCategories]);

  return (
    <>
      <Header onSearch={setFilter} />
      <Banner 
        title="Evolua seu Código"
        subtitle="Uma seleção curada dos melhores conteúdos para devs front-end."
      />
      
      <Container>
        {loading && <Loading />}
        {error && <div className="error-message"><h2>{error}</h2></div>}
        {!loading && !error && (
          <>
            {categoriesToDisplay.length > 0 ? (
              categoriesToDisplay.map(category => (
                <Categoria 
                  key={category.title}
                  title={category.title}
                  videos={category.videos}
                />
              ))
            ) : (
              <div className="not-found-message">
                <h2>Nenhum conteúdo encontrado.</h2>
                <p>Tente uma busca diferente ou verifique mais tarde.</p>
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