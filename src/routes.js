import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Watch from './pages/Watch';
import Page404 from './pages/Page404';
import PageBase from './pages/PageBase';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageBase />}>
                    <Route index element={<Home />} />
                    <Route path="watch/:id" element={<Watch />} />
                    <Route path="*" element={<Page404 />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;