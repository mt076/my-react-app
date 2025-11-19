import React from 'react';
import Header from '../../components/Header';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import { Outlet } from 'react-router-dom';

function PageBase() {
    return (
        <main>
            {/* O Header agora pode ser fixo ou gerenciado aqui */}
            {/* Nota: A busca global precisaria de um Context API, 
                mas por hora vamos focar na estrutura de rotas */}
            <Header /> 
            <Container>
                <Outlet />
            </Container>
            <Footer />
        </main>
    );
}

export default PageBase;